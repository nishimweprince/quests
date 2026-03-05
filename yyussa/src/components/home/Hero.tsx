'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] as const } },
};

const heroStats = [
  '3 Strategic Divisions',
  '30+ Years of Excellence',
  'Regional Presence in East Africa',
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden grain-overlay"
      style={{ background: 'var(--bg-dark)' }}
      aria-label="Hero section"
    >
      {/* Base dark gradient */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(160deg, #0b1522 0%, #121f2f 52%, #0e1826 100%)',
        }}
      />

      {/* Orange glow — upper right (primary, subtle) */}
      <div
        className="pointer-events-none absolute -right-40 -top-20 h-[600px] w-[600px] opacity-20"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at center, color-mix(in srgb, var(--color-primary) 36%, transparent) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Accent glow — lower left */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 opacity-15"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at center, color-mix(in srgb, var(--color-accent) 52%, transparent) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Content — vertically centred in the viewport */}
      <div className="container-xl relative z-10 flex flex-1 flex-col justify-center pb-28 pt-24 md:pb-32 md:pt-28">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl"
        >
          {/* Eyebrow label */}
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40"
          >
            <span
              className="h-px w-10 shrink-0"
              style={{ background: 'var(--color-accent)' }}
              aria-hidden="true"
            />
            Established 1994 &middot; Kigali, Rwanda
          </motion.p>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="text-balance text-white!"
            style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: 'clamp(2.3rem, 5.8vw, 4.5rem)',
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
            }}
          >
            Building Reliable
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Regional Enterprise</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/50 md:text-base"
            style={{ color: 'var(--color-grey-300)' }}
          >
            YYUSSA Group delivers integrated leadership in real estate, logistics, and commercial
            wholesale across East Africa — thirty years of disciplined execution and long-term
            partnerships.
          </motion.p>

          {/* CTAs — primary only on main CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 border px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-200 hover:opacity-95"
              style={{
                background: 'var(--color-primary)',
                borderColor: 'var(--color-primary)',
                color: 'white',
              }}
            >
              Explore Divisions
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/30 px-5 py-3.5 text-[11px] uppercase tracking-[0.14em] transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
            >
              Our Corporate Story
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stat strip — pinned to very bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.4, 0, 0.2, 1] as const }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/[0.12]"
        aria-label="Company highlights"
      >
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row">
            {heroStats.map((stat, i) => (
              <div
                key={stat}
                className={`flex items-center gap-3 py-4 text-[10px] uppercase tracking-[0.14em] text-white/35 ${
                  i > 0 ? 'sm:border-l sm:border-white/[0.07] sm:pl-6' : ''
                } ${i < heroStats.length - 1 ? 'sm:pr-6' : ''}`}
              >
                <span
                  className="h-px w-5 shrink-0"
                  style={{ background: 'var(--color-accent)', opacity: 0.6 }}
                  aria-hidden="true"
                />
                {stat}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
