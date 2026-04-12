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
        "flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4",
        className,
      )}
    >
      <div className="mt-0.5 text-[var(--accent-primary)]">
        <Icon size={14} strokeWidth={2.5} />
      </div>
      <div>
        <p className="text-sm font-medium text-[var(--text-primary)]">{title}</p>
        {description ? (
          <p className="mt-1 text-xs text-[var(--text-tertiary)]">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
