"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  label?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, icon, label, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={cn("mx-auto mb-12 max-w-3xl text-center", className)}
    >
      {label ? (
        <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--accent-primary)]">
          {label}
        </p>
      ) : null}
      {icon ? (
        <div className="mb-3 flex items-center justify-center text-[var(--accent-primary)]">
          {icon}
        </div>
      ) : null}
      <h2 className="font-display text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-[var(--text-primary)] md:text-[44px]">
        {title}
      </h2>
      <span
        className="mx-auto mt-4 block h-px w-12 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent"
        aria-hidden="true"
      />
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-xl text-[13px] leading-relaxed text-[var(--text-secondary)] md:text-[15px]">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
