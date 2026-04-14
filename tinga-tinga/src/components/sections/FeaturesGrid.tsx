"use client";

import { motion } from "framer-motion";
import { featureGridItems } from "@/src/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function FeaturesGrid() {
  return (
    <section id="features" className="section-shell relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_40%,rgba(212,162,83,0.04),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto w-[min(1180px,92vw)]">
        {/* Section heading — editorial split style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--accent-primary)]">
              Why Tinga Tinga
            </p>
            <h2 className="font-display text-[28px] font-black leading-[1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[48px]">
              Built for{" "}
              <span className="text-gold-gradient">
                Serious Traders
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-[var(--text-secondary)] md:text-right md:text-[14px]">
            Institutional-grade automation, built on proven frameworks and backed by a global community.
          </p>
        </motion.div>

        {/* Bento-style grid: first card spans 2 cols on desktop */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featureGridItems.map((feature, i) => {
            const isHero = i === 0;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                className={`group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] transition-all duration-300 hover:border-[var(--accent-primary)]/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] ${
                  isHero ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className={`flex h-full flex-col justify-between ${isHero ? "p-7 lg:p-10" : "p-5 lg:p-6"}`}>
                  <div>
                    <div className={`inline-flex items-center justify-center rounded-lg bg-[var(--accent-primary)]/8 text-[var(--accent-primary)] transition-all duration-300 group-hover:bg-[var(--accent-primary)]/12 group-hover:scale-105 ${
                      isHero ? "mb-5 h-12 w-12" : "mb-4 h-10 w-10"
                    }`}>
                      <feature.icon size={isHero ? 22 : 18} strokeWidth={1.6} />
                    </div>
                    <h3 className={`font-display font-bold text-[var(--text-primary)] ${
                      isHero ? "text-xl lg:text-2xl" : "text-base"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`mt-2 leading-relaxed text-[var(--text-secondary)] ${
                      isHero ? "max-w-md text-sm lg:text-[15px]" : "text-xs md:text-sm"
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  {isHero ? (
                    <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--accent-primary)]/60">
                      <span className="h-px w-6 bg-[var(--accent-primary)]/30" />
                      24/7 Automated
                    </div>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
