"use client";

import { motion } from "framer-motion";
import { featureGridItems } from "@/src/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function FeaturesGrid() {
  return (
    <section id="features" className="section-shell">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-5xl">
            Built for
            <br />
            <span className="font-extrabold italic text-[var(--text-primary)]/60">
              Serious Traders
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featureGridItems.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              className="group relative rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-secondary)] p-5 transition-colors duration-300 hover:border-[var(--accent-primary)]/30"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-button)] bg-[var(--bg-tertiary)] text-[var(--accent-primary)] transition-colors duration-300 group-hover:bg-[var(--accent-primary)]/10">
                <feature.icon size={18} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] md:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
