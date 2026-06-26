"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/data/wafaaContent";
import { wafaaConfig } from "@/data/wafaaConfig";

function Wordmark() {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className="group flex shrink-0 cursor-pointer items-center no-underline"
      aria-label={`${wafaaConfig.shortName} — ${wafaaConfig.organizationName}, back to top`}
    >
      {logoError ? (
        <span className="font-display text-xl font-semibold tracking-tight text-wafaa-primary group-hover:text-wafaa-primary-deep">
          {wafaaConfig.shortName}
        </span>
      ) : (
        <Image
          src={wafaaConfig.logoUrl}
          alt={`${wafaaConfig.shortName} logo`}
          width={160}
          height={48}
          priority
          className="h-10 w-auto max-w-[140px] object-contain sm:max-w-[160px]"
          onError={() => setLogoError(true)}
        />
      )}
    </a>
  );
}

export function WafaaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    firstFocusableRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  const donateHref = wafaaConfig.donationUrl || "#get-involved";

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-wafaa-line bg-wafaa-paper backdrop-blur-sm">
        <div className="wafaa-container flex h-16 items-center justify-between gap-4">
          <Wordmark />

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] font-medium text-wafaa-muted transition-colors hover:text-wafaa-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={wafaaConfig.primaryPhoneHref}
              className="inline-flex min-h-[44px] items-center px-2 text-[0.9375rem] font-semibold text-wafaa-sage hover:text-wafaa-primary"
            >
              Get Support
            </a>
            <a
              href={donateHref}
              className="inline-flex min-h-[44px] items-center rounded-md bg-wafaa-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-wafaa-primary-deep"
            >
              Donate
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md border border-wafaa-line bg-white px-3 text-wafaa-primary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 top-40 max-sm:top-48 z-[55] overflow-y-auto bg-wafaa-paper lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1 p-5" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                ref={i === 0 ? firstFocusableRef : undefined}
                href={link.href}
                className="flex min-h-[48px] cursor-pointer items-center rounded-md px-4 text-lg font-medium text-wafaa-text hover:bg-wafaa-lilac"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-wafaa-line pt-4">
              <a
                href={wafaaConfig.primaryPhoneHref}
                className="flex min-h-[48px] cursor-pointer items-center justify-center rounded-md bg-wafaa-berry/10 px-5 text-base font-semibold text-wafaa-berry ring-1 ring-wafaa-berry/20"
                onClick={closeMenu}
              >
                Call for support
              </a>
              <a
                href="#contact"
                className="flex min-h-[48px] cursor-pointer items-center justify-center rounded-md border border-wafaa-line px-5 text-base font-semibold text-wafaa-primary"
                onClick={closeMenu}
              >
                Get Support
              </a>
              <a
                href={donateHref}
                className="flex min-h-[48px] cursor-pointer items-center justify-center rounded-md bg-wafaa-primary px-5 text-base font-semibold text-white"
                onClick={closeMenu}
              >
                Donate
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
