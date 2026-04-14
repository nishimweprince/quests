import type { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 transition-all duration-300 hover:border-[var(--accent-primary)]/20 hover:shadow-[inset_0_1px_0_rgba(212,162,83,0.12),0_4px_24px_rgba(0,0,0,0.3)]",
        className,
      )}
      {...props}
    />
  );
}
