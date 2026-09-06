"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

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

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const enterTimeRef = useRef<number>(Date.now());
  const prevPathRef = useRef<string | null>(null);
  const supabase = createClient();

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

      // Get current user (best-effort, non-blocking)
      let userId: string | null = null;
      try {
        const { data: { user } } = await supabase.auth.getUser();
        userId = user?.id ?? null;
      } catch { /* ignore */ }

      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: pathname,
          referrer: document.referrer || null,
          sessionId: getSessionId(),
          userId,
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
