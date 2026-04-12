"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
};

export function SectionHeading({ title, subtitle, icon, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className={cn("mx-auto mb-10 max-w-3xl text-center", className)}
    >
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-[var(--text-primary)] md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--text-secondary)] md:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
