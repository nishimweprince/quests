"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/src/components/ui";
import { ctaLinks, navLinks } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("products");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["products", "community", "brokers", "subscribe"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNavigate = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;
    setOpen(false);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled ? "border-b border-[var(--border)] bg-[rgba(12,15,20,0.92)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-14 w-[min(1180px,92vw)] items-center justify-between">
        <button onClick={() => onNavigate("#hero")} className="flex items-center gap-3 text-left">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-[var(--accent-primary)] font-mono text-[10px] font-bold text-[#052e16]">
            GOF
          </span>
          <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-[var(--text-secondary)] md:text-[11px]">
            GODFATHER OF FOREX
          </span>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => onNavigate(item.href)}
              className={cn(
                "text-xs font-medium transition-colors",
                active === item.href.replace("#", "")
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href={ctaLinks.botCheckout}>
            <Button size="sm">
              Get Tinga Tinga Bot
            </Button>
          </a>
        </div>

        <button
          aria-label="Open navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-[var(--border)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 w-[80vw] max-w-xs border-l border-[var(--border)] bg-[var(--bg-primary)] p-6 lg:hidden"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-tertiary)]">MENU</span>
              <button
                aria-label="Close navigation menu"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-[var(--border)] text-[var(--text-secondary)]"
                onClick={() => setOpen(false)}
              >
                <X size={14} />
              </button>
            </div>
            <div className="space-y-1">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => onNavigate(item.href)}
                  className="block h-10 w-full rounded px-3 text-left text-sm text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)]"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a href={ctaLinks.botCheckout} className="mt-6 block">
              <Button size="md" className="w-full">
                Get Tinga Tinga Bot
              </Button>
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
