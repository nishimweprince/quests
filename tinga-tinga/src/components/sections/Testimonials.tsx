"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/src/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className="fill-[#f5c842] text-[#f5c842]"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,162,83,0.03),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto w-[min(1180px,92vw)]">
        {/* Heading — editorial split */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--accent-primary)]">
              Testimonials
            </p>
            <h2 className="font-display text-[28px] font-black leading-[1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[48px]">
              Voices of{" "}
              <span className="text-gold-gradient italic">
                the Market
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-[var(--text-secondary)] md:text-right md:text-[14px]">
            Real traders, real results. Hear from the community.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const isFeatured = i === 1;
            return (
              <motion.blockquote
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className={`group relative flex flex-col justify-between rounded-xl border bg-[var(--bg-secondary)] p-6 transition-all duration-300 ${
                  isFeatured
                    ? "border-[var(--accent-primary)]/15 shadow-[0_0_40px_rgba(212,162,83,0.05)] lg:-my-2"
                    : "border-[var(--border)] hover:border-[var(--accent-primary)]/15"
                } hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]`}
              >
                {/* Decorative quote */}
                <span
                  className="absolute -top-1 left-5 font-serif text-[64px] leading-none text-[var(--accent-primary)]/10 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div className="relative">
                  <StarRating count={t.rating} />
                  <p className="mt-5 text-[13px] leading-[1.7] text-[var(--text-secondary)] md:text-[14px]">
                    {t.quote}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                  {/* Avatar placeholder — initials circle */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 font-display text-sm font-bold text-[var(--accent-primary)]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {t.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
