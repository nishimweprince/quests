"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";

type Props = {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
};

export function SocialIconRow({
  className,
  linkClassName,
  iconClassName,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2.5",
        className,
      )}
    >
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white",
            linkClassName,
          )}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className={cn("h-4 w-4", iconClassName)}
          />
        </a>
      ))}
    </div>
  );
}
