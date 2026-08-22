"use client";

import { useEffect, useRef, useState } from "react";

// Parse a stat string like "~24,500" → { prefix: "~", number: 24500, suffix: "", separator: "," }
// or "150+" → { prefix: "", number: 150, suffix: "+", separator: "" }
// or "26" → { prefix: "", number: 26, suffix: "", separator: "" }
function parseStat(value: string) {
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9,]*$/)?.[0] ?? "";
  const raw = value.slice(prefix.length, value.length - suffix.length);
  const hasSeparator = raw.includes(",");
  const number = parseInt(raw.replace(/,/g, ""), 10);
  return { prefix, number, suffix, hasSeparator };
}

function formatNumber(n: number, hasSeparator: boolean): string {
  if (!hasSeparator) return String(n);
  return n.toLocaleString("en-US");
}

// Easing: ease-out-cubic
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(value: string, duration = 1800) {
  const { prefix, number, suffix, hasSeparator } = parseStat(value);
  const [display, setDisplay] = useState(prefix + formatNumber(0, hasSeparator) + suffix);
  const ref = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isNaN(number)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.round(easeOut(progress) * number);
          setDisplay(prefix + formatNumber(current, hasSeparator) + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [number, prefix, suffix, hasSeparator, duration]);

  return { display, ref };
}
