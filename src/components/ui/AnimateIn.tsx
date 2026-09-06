"use client";

import React, { useEffect, useRef, CSSProperties, ReactNode } from "react";

type Direction = "left" | "right" | "up" | "none";

interface Props {
  children: ReactNode;
  from?: Direction;
  delay?: number;       // ms
  duration?: number;    // ms
  distance?: number;    // px
  className?: string;
  style?: CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
  threshold?: number;   // 0–1
}

const TRANSLATE: Record<Direction, string> = {
  left:  "translateX(-40px)",
  right: "translateX(40px)",
  up:    "translateY(24px)",
  none:  "none",
};

export default function AnimateIn({
  children,
  from = "up",
  delay = 0,
  duration = 700,
  distance,
  className,
  style,
  as: Tag = "div",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const translate = distance
    ? from === "left"  ? `translateX(-${distance}px)`
    : from === "right" ? `translateX(${distance}px)`
    : from === "up"    ? `translateY(${distance}px)`
    : "none"
    : TRANSLATE[from];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start hidden
    el.style.opacity = "0";
    el.style.transform = translate;
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, translate, threshold]);

  const El = Tag as React.ElementType;
  return <El ref={ref} className={className} style={style}>{children}</El>;
}
