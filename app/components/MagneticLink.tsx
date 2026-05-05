"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface MagneticLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
  cursorVariant?: "default" | "hover" | "view";
  cursorLabel?: string;
}

export default function MagneticLink({
  href,
  children,
  className,
  strength = 0.3,
  cursorVariant = "hover",
  cursorLabel,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafPending = false;

    const loop = () => {
      rafPending = false;
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      if (
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05
      ) {
        startRaf();
      }
    };

    const startRaf = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      targetX = (e.clientX - rect.left - rect.width / 2) * strength;
      targetY = (e.clientY - rect.top - rect.height / 2) * strength;
      startRaf();
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      startRaf();
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [strength]);

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      data-cursor={cursorVariant}
      data-cursor-label={cursorLabel}
    >
      {children}
    </Link>
  );
}
