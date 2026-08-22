"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface StatNumberProps {
  value: string;
  style?: React.CSSProperties;
  className?: string;
  duration?: number;
}

export default function StatNumber({ value, style, className, duration }: StatNumberProps) {
  const { display, ref } = useCountUp(value, duration);
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} style={style} className={className}>
      {display}
    </span>
  );
}
