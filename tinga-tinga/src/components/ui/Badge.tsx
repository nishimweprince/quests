import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type BadgeProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function Badge({ children, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md bg-[var(--bg-tertiary)] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-[var(--text-secondary)]",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
