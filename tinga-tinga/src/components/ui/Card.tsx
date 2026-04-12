import type { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 transition-colors duration-200 hover:border-[var(--border)]",
        className,
      )}
      {...props}
    />
  );
}
