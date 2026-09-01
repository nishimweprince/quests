import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Arrow, type ArrowDirection } from "./Arrow";

type Variant = "white" | "brown" | "sand" | "grey" | "cream" | "glass";

export function Button({
  href,
  children,
  variant = "brown",
  arrow = "diagonal",
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: ArrowDirection | false;
  className?: string;
  external?: boolean;
}) {
  const classes = cn("btn", variant !== "white" && `btn--${variant}`, className);
  const content = (
    <>
      {children}
      {arrow ? <Arrow direction={arrow} /> : null}
    </>
  );

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        rel="noreferrer noopener"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
