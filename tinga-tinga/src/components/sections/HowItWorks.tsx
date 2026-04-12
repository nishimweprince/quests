"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/src/lib/constants";
import { SectionHeading } from "@/src/components/ui";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell">
      <SectionHeading title="Start Trading in 3 Simple Steps" />
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-5 lg:grid-cols-3">
        {howItWorksSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6"
          >
            {index < howItWorksSteps.length - 1 ? (
              <span className="absolute right-[-32px] top-1/2 hidden -translate-y-1/2 font-mono text-sm text-[var(--text-tertiary)] lg:flex">
                →
              </span>
            ) : null}
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent-primary)] font-mono text-xs font-bold text-[#052e16]">
              {index + 1}
            </span>
            <div className="mt-5 text-[var(--accent-primary)]">
              <step.icon size={20} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
