'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden grain-overlay"
      style={{ background: 'var(--color-surface-dark)' }}
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(130deg, #0b0b0e 0%, #111014 48%, #1a1110 100%)',
        }}
      />

      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 18% 78%, rgba(154,52,36,0.32) 0%, transparent 56%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.14) 0%, transparent 52%)',
        }}
      />

      <div
        className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full opacity-70"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.24) 0, transparent 60%)',
          filter: 'blur(2px)',
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full opacity-70"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at center, rgba(154,52,36,0.4) 0, transparent 60%)',
          filter: 'blur(4px)',
        }}
      />

      <div className="container-xl relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.23em] text-(--color-text-muted-light)">
              <span className="h-px w-10 bg-(--color-primary-light)" aria-hidden="true" />
              Established 1994 · Kigali, Rwanda
            </p>

            <div className="hidden items-center gap-3 text-right text-xs uppercase tracking-[0.22em] text-(--color-text-muted-light) sm:flex">
              <span className="h-px w-10 bg-linear-to-r from-transparent via-(--color-primary-light) to-transparent" />
              East African Enterprise Group
            </div>
          </div>

          <h1
            className="text-balance text-4xl text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.02 }}
          >
            Building Reliable
            <span className="mt-3 inline-block rounded-full bg-black/30 px-3 py-1 text-sm font-normal uppercase tracking-[0.32em] text-(--color-text-muted-light) align-middle sm:ml-3 sm:mt-0">
              YYUSSA Group
            </span>
            <span
              className="mt-3 block text-(--color-primary-light)"
              style={{ textShadow: '0 26px 55px rgba(0,0,0,0.8)' }}
            >
              Regional Enterprise
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-(--color-text-light)/90 md:text-lg">
            YYUSSA Group delivers integrated leadership in real estate, logistics, and commercial
            wholesale, enabling sustainable growth across East Africa through disciplined execution
            and long-term partnerships.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="btn-primary inline-flex items-center justify-center rounded-full border border-transparent px-8 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-white shadow-[0_18px_55px_rgba(0,0,0,0.65)] transition-all duration-200 hover:-translate-y-px hover:border-white/20"
            >
              Explore Divisions
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-(--color-text-light) transition-all duration-200 hover:border-white/50 hover:bg-white/5"
            >
              Our Corporate Story
            </Link>
          </div>

          <div className="mt-8 inline-flex flex-wrap gap-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-xs uppercase tracking-[0.18em] text-(--color-text-muted-light) backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-(--color-primary-light)" aria-hidden="true" />
              <span>3 Strategic Divisions</span>
            </div>
            <div className="h-px w-6 bg-white/10 sm:h-6 sm:w-px" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-(--color-primary-light)" aria-hidden="true" />
              <span>30+ Years of Excellence</span>
            </div>
            <div className="h-px w-6 bg-white/10 sm:h-6 sm:w-px" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-(--color-primary-light)" aria-hidden="true" />
              <span>Regional Presence in East Africa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
