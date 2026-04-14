import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { cn } from "@/src/lib/utils";

type Props = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon: Icon = Check,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex items-start gap-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4 transition-all duration-300 hover:border-[var(--accent-primary)]/20 hover:shadow-[0_2px_16px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--accent-primary)]/8 text-[var(--accent-primary)] transition-colors duration-300 group-hover:bg-[var(--accent-primary)]/12">
        <Icon size={14} strokeWidth={2.2} />
      </div>
      <div>
        <p className="text-sm font-medium text-[var(--text-primary)]">{title}</p>
        {description ? (
          <p className="mt-1 text-xs leading-relaxed text-[var(--text-tertiary)]">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
