import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/constants';

export default function StatsBar() {
  return (
    <section
      className="relative z-10 -mt-1 grain-overlay"
      style={{ background: 'var(--color-surface-darker)' }}
      aria-label="Company statistics"
    >
      <div className="container-xl py-10 md:py-14">
        <div className="rounded-3xl border border-(--color-border-dark) bg-black/40 px-6 py-8 shadow-[0_18px_55px_rgba(0,0,0,0.7)] backdrop-blur-md md:px-10 md:py-9">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  index > 0 ? 'sm:border-l sm:border-white/10' : ''
                } sm:pl-6`}
              >
                <div className="mb-3 h-px w-8 bg-(--color-primary)" aria-hidden="true" />
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
