"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const consent = localStorage.getItem("indiaspora_cookie_consent");
      if (consent !== "all") return;
    } catch { return; }

    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname, referrer: document.referrer || null }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
