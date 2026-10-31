"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Generate or reuse a session ID for this browser tab session
function getSessionId(): string {
  try {
    let sid = sessionStorage.getItem("indiaspora_sid");
    if (!sid) {
      sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem("indiaspora_sid", sid);
    }
    return sid;
  } catch {
    return "unknown";
  }
}

// Persistent anonymous browser id (only created after cookie consent)
function getVisitorId(): string {
  try {
    let vid = localStorage.getItem("indiaspora_vid");
    if (!vid) {
      vid = crypto.randomUUID();
      localStorage.setItem("indiaspora_vid", vid);
    }
    return vid;
  } catch {
    return "unknown";
  }
}

function isNewSession(): boolean {
  try {
    if (sessionStorage.getItem("indiaspora_sess_counted")) return false;
    sessionStorage.setItem("indiaspora_sess_counted", "1");
    return true;
  } catch {
    return false;
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const enterTimeRef = useRef<number>(Date.now());
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const track = async () => {
      try {
        const consent = localStorage.getItem("indiaspora_cookie_consent");
        if (consent !== "all") return;
      } catch { return; }

      // Calculate duration spent on previous page
      const now = Date.now();
      const duration = prevPathRef.current
        ? Math.round((now - enterTimeRef.current) / 1000)
        : null;

      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: pathname,
          referrer: document.referrer || null,
          sessionId: getSessionId(),
          visitorId: getVisitorId(),
          newSession: isNewSession(),
          prevPath: prevPathRef.current,
          prevDuration: duration,
        }),
      }).catch(() => {});

      prevPathRef.current = pathname;
      enterTimeRef.current = now;
    };

    track();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
