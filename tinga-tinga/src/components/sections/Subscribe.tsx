"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";
import { Button } from "@/src/components/ui";

export function Subscribe() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="subscribe" className="section-shell">
      <div className="mx-auto w-[min(920px,92vw)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(20,25,32,0.82)] px-5 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-8 md:py-12"
        >
          <div
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[380px] md:w-[380px]"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08) 0%, rgba(28,33,40,0.65) 42%, rgba(12,15,20,0.95) 72%)",
              boxShadow:
                "inset 0 -40px 80px rgba(0,0,0,0.45), 0 0 120px rgba(255,86,86,0.08)",
            }}
          />

          <div
            className="absolute inset-x-10 bottom-0 h-24 rounded-full bg-[linear-gradient(90deg,rgba(212,162,83,0.14),rgba(245,200,66,0.12),rgba(212,162,83,0.14))] blur-3xl"
          />

          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)_18%,rgba(0,0,0,0.12)_100%)]"
          />

          <div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 md:h-[400px] md:w-[400px]"
            style={{
              background:
                "conic-gradient(from 180deg, transparent 0%, rgba(255,255,255,0.14) 24%, transparent 50%, rgba(255,255,255,0.06) 76%, transparent 100%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[720px]">
            <h2 className="font-serif text-3xl font-bold leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-4xl">
              Subscribe to godfatherofforex
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
              Sign up to get exclusive email updates directly from me.
            </p>

            <form
              className="mx-auto mt-6 flex max-w-[620px] flex-col gap-3"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="subscribe-email">
                Email
              </label>
              <input
                id="subscribe-email"
                type="email"
                inputMode="email"
                placeholder="Email"
                className="h-12 rounded-full border border-white/80 bg-[rgba(18,22,30,0.45)] px-5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[var(--accent-primary)]"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 w-full rounded-full"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
