'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  const displayValue = target >= 1000000
    ? `${(count / 1000000).toFixed(count >= target ? 1 : 1)}M`
    : count.toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl md:text-5xl font-bold text-white"
        aria-label={`${target}${suffix} ${label}`}
      >
        {displayValue}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-[var(--color-text-muted-light)] uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
