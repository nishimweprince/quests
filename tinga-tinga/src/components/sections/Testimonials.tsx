"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/src/lib/constants";
import { ScrollHighlightSection } from "@/src/components/sections/ScrollHighlightSection";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className="fill-[#f5c842] text-[#f5c842]"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const testimonialItems = testimonials.map((testimonial) => ({
    title: testimonial.name,
    description: testimonial.quote,
    icon: Star,
    ...testimonial,
  }));

  return (
    <ScrollHighlightSection
      id="testimonials"
      eyebrow="Testimonials"
      title={
        <>
          Voices of <span className="text-gold-gradient italic">the Market</span>
        </>
      }
      intro="Real traders, real results. Hear from the community."
      items={testimonialItems}
      activeTagline="Community Proof"
      getStepLabel={(_, index) => `Review ${index + 1}`}
      renderStepMeta={(item) => (
        <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-primary)]/10 font-display text-sm font-bold text-[var(--accent-primary)]">
            {item.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{item.name}</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">{item.title}</p>
          </div>
        </div>
      )}
      renderActiveBody={(item) => (
        <blockquote className="relative rounded-lg border border-[var(--border)]/80 bg-[var(--bg-secondary)]/60 p-4">
          <span className="absolute -top-2 left-4 font-serif text-3xl leading-none text-[var(--accent-primary)]/25" aria-hidden="true">
            &ldquo;
          </span>
          <StarRating count={item.rating} />
          <p className="mt-3 text-[14px] leading-[1.75] text-[var(--text-secondary)]">{item.quote}</p>
        </blockquote>
      )}
      renderActiveFooter={(item) => (
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{item.name}</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">{item.title}</p>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent-primary)]/70">Verified trader</span>
        </div>
      )}
    />
  );
}
