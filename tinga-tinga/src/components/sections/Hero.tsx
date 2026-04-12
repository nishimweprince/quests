"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useRef } from "react";
import { CandlestickScene } from "@/src/components/three/CandlestickScene";
import { Button } from "@/src/components/ui";
import { ctaLinks, heroTrustItems } from "@/src/lib/constants";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section id="hero" ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <CandlestickScene />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,20,0.5)_0%,rgba(12,15,20,0.75)_35%,rgba(12,15,20,1)_100%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto w-[min(1180px,92vw)] py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--accent-primary)]">
            Institutional-Grade Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mx-auto mt-6 max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-tighter text-[var(--text-primary)] md:text-7xl"
        >
          Trade Smarter With Automated Precision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-sm text-[var(--text-secondary)] md:text-base"
        >
          Tinga Tinga EA — A Plug & Play Forex Robot for All Pairs. No Experience Needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href={ctaLinks.botCheckout}>
            <Button size="lg" className="w-full sm:w-auto">
              Get the Bot — £1,500
            </Button>
          </a>
          <button
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            onClick={() => document.querySelector(ctaLinks.video)?.scrollIntoView({ behavior: "smooth" })}
          >
            <PlayCircle size={16} />
            Watch How It Works
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-tertiary)]"
        >
          {heroTrustItems.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-4">
              {index > 0 ? <span className="hidden h-px w-4 bg-[var(--border)] md:block" /> : null}
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
