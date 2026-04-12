import { AnimatedCounter } from "@/src/components/ui";
import { stats } from "@/src/lib/constants";

export function StatsBar() {
  return (
    <section id="stats" className="border-y border-[var(--border)]">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-px sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="relative px-6 py-6 text-center"
          >
            {index < stats.length - 1 ? (
              <span className="absolute right-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-[var(--border)] lg:block" />
            ) : null}
            <p className="font-mono text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
