import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/constants';

export default function StatsBar() {
  return (
    <section
      className="relative z-10"
      style={{ background: 'var(--bg-light)' }}
      aria-label="Company statistics"
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          style={{ borderColor: 'var(--color-secondary-dark)' }}>
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-10 md:py-12"
              style={{ borderColor: 'var(--color-secondary-dark)' }}
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom border */}
      <div className="h-px w-full" style={{ background: 'var(--color-secondary-dark)' }} aria-hidden="true" />
    </section>
  );
}
