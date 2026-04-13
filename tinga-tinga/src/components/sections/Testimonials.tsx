"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/src/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-[var(--accent-primary)] text-[var(--accent-primary)]"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-5xl">
            Voices of
            <br />
            <span className="font-extrabold italic text-[var(--text-primary)]/60">
              the Market
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              className="flex flex-col justify-between rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-secondary)] p-5"
            >
              <div>
                <StarRating count={t.rating} />
                <p className="mt-4 text-xs leading-relaxed text-[var(--text-secondary)] md:text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 border-t border-[var(--border)] pt-4">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {t.name}
                </p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  {t.title}
                </p>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
