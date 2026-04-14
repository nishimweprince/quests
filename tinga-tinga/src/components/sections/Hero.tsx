"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useRef } from "react";
import { CandlestickScene } from "@/src/components/three/CandlestickScene";
import { Button, SocialIconRow } from "@/src/components/ui";
import { ctaLinks, heroTrustItems, socialLinks } from "@/src/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function WaveLayers() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-[2] h-[55%] pointer-events-none">
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wave-warm" x1="0.7" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="rgba(180,100,40,0.35)" />
            <stop offset="60%" stopColor="rgba(12,15,20,0)" />
          </linearGradient>
        </defs>
        <path
          d="M0,180 C200,80 400,260 720,160 C1040,60 1280,220 1440,140 L1440,400 L0,400Z"
          fill="rgba(12,15,20,0.95)"
        />
        <path
          d="M0,220 C260,140 500,300 760,200 C1020,100 1260,260 1440,180 L1440,400 L0,400Z"
          fill="var(--bg-primary)"
        />
        <path
          d="M0,200 C180,120 440,280 740,170 C1040,60 1300,240 1440,160 L1440,400 L0,400Z"
          fill="url(#wave-warm)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <CandlestickScene />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,20,0.3)_0%,rgba(12,15,20,0.5)_40%,rgba(12,15,20,0.85)_75%,rgba(12,15,20,1)_100%)] z-[1]" />

      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(160,90,30,0.12),transparent_70%)]" />

      <WaveLayers />

      <motion.div
        style={{ y }}
        className="relative z-10 mx-auto w-[min(1080px,92vw)] py-20 text-center"
      >

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 text-[16px] max-w-4xl font-display leading-[0.9] tracking-[-0.03em] text-[var(--text-primary)]"
        >
          <span className="block text-[34px]! font-black">
            Trade Smarter.
          </span>
          <span className="block text-[26px] font-extrabold text-[var(--text-primary)]/70">
            Win Bigger.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mx-auto mt-5 max-w-lg text-xs text-[var(--text-secondary)] md:text-sm"
        >
          Tinga Tinga EA — A Plug & Play Forex Robot for All Pairs. No
          Experience Needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-6"
        >
          <SocialIconRow
            className="gap-3"
            linkClassName="h-10 w-10 border-white/10 bg-white/5 text-white/90 hover:border-white/25 hover:bg-white/10"
            iconClassName="h-4 w-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
        >
          <a href={socialLinks?.find((link) => link.label === "WhatsApp")?.href} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto">
              Get the Bot — £1,500
            </Button>
          </a>
          <button
            className="inline-flex items-center gap-2 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] md:text-sm"
            onClick={() =>
              document
                .querySelector("#video")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
            Watch How It Works
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-5 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--text-tertiary)]"
        >
          {heroTrustItems.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-4">
              {index > 0 ? (
                <span className="hidden h-px w-4 bg-[var(--border)] md:block" />
              ) : null}
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
