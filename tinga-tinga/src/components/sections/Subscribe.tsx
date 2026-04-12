"use client";

import { FormEvent, useState } from "react";
import { Button, SectionHeading } from "@/src/components/ui";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(
      email
        ? "Thanks — subscription backend will be connected in phase 2."
        : "Please enter a valid email address.",
    );
  };

  return (
    <section id="subscribe" className="section-shell">
      <div className="mx-auto w-[min(980px,92vw)] rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-14 md:px-10">
        <SectionHeading
          className="mb-8"
          title="Stay Ahead of the Market"
          subtitle="Get exclusive trading updates, bot tips, and market insights."
        />
        <form onSubmit={onSubmit} className="mx-auto max-w-2xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 font-mono text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent-primary)]"
            />
            <Button type="submit" size="md" className="sm:min-w-40">
              Subscribe
            </Button>
          </div>
          {message ? <p className="mt-3 text-sm text-[var(--text-tertiary)]">{message}</p> : null}
        </form>
        <p className="mt-5 text-center text-sm text-[var(--text-secondary)]">
          <a href="#products" className="font-medium text-[var(--accent-primary)] hover:text-[var(--text-primary)]">
            Or get the bot now →
          </a>
        </p>
      </div>
    </section>
  );
}
