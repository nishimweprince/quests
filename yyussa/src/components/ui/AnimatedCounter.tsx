'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
  light?: boolean;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  label,
  duration = 1800,
  light = false,
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  const displayValue =
    target >= 1000000
      ? `${(count / 1000000).toFixed(1)}M`
      : count.toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div
        aria-label={`${target}${suffix} ${label}`}
        style={{
          fontFamily: "'Libre Baskerville', Georgia, serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: light ? 'var(--color-accent-light)' : 'var(--color-accent)',
        }}
      >
        {displayValue}{suffix}
      </div>
      <div
        className="mt-3 text-[11px] uppercase tracking-[0.14em]"
        style={{ color: light ? 'rgba(245,242,237,0.45)' : 'var(--color-grey-500)' }}
      >
        {label}
      </div>
    </div>
  );
}
