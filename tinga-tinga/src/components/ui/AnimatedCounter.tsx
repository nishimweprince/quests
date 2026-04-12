"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function AnimatedCounter({ value, suffix = "", prefix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, { duration: 1.2, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
