import { SectionHeading } from "@/src/components/ui";
import { brokers } from "@/src/lib/constants";

export function Brokers() {
  return (
    <section id="brokers" className="section-shell">
      <SectionHeading
        title="Recommended Brokers"
        subtitle="Use our recommended links for safer, smarter broker choices."
      />
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-4 lg:grid-cols-3">
        {brokers.map((broker) => (
          <article
            key={broker.name}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 transition-all duration-300 hover:border-[var(--accent-primary)]/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          >
            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{broker.name}</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{broker.description}</p>
            <a
              href={broker.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Sign Up
            </a>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-5 w-[min(1180px,92vw)] text-xs text-[var(--text-tertiary)]">
        Affiliate disclosure: We may earn a commission if you register via the links above at no
        additional cost to you.
      </p>
    </section>
  );
}
