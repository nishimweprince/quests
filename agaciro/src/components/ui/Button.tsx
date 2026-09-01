import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Arrow } from "./Arrow";

export function Button({
  href,
  children,
  variant = "brown",
  arrow = true,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "brown" | "sand" | "white" | "glass" | "grey";
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "button",
        `button--${variant}`,
        !arrow && "button--centered",
        className,
      )}
      href={href}
    >
      <span>{children}</span>
      {arrow ? <Arrow /> : null}
    </Link>
  );
}
