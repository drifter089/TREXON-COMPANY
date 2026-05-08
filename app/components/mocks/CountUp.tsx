"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface CountUpProps {
  from: number;
  to: number;
  duration: number;
  delay: number;
  inView: boolean;
  prefix?: string;
  suffix?: string;
  decimals: number;
  className?: string;
}

export default function CountUp({
  from,
  to,
  duration,
  delay,
  inView,
  prefix = "",
  suffix = "",
  decimals,
  className,
}: CountUpProps) {
  const [val, setVal] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const t = window.setTimeout(() => {
      const controls = animate(from, to, {
        duration,
        ease,
        onUpdate: (v) => setVal(v),
      });
      return () => controls.stop();
    }, delay * 1000);
    return () => window.clearTimeout(t);
  }, [inView, from, to, duration, delay]);

  const formatted =
    decimals === 0
      ? Math.round(val).toLocaleString()
      : val.toFixed(decimals);

  return (
    <span className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
