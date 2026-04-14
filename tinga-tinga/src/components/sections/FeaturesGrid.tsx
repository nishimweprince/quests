"use client";

import { featureGridItems } from "@/src/lib/constants";
import { ScrollHighlightSection } from "@/src/components/sections/ScrollHighlightSection";

export function FeaturesGrid() {
  return (
    <ScrollHighlightSection
      id="features"
      eyebrow="Why Tinga Tinga"
      title={
        <>
          Built for <span className="text-gold-gradient">Serious Traders</span>
        </>
      }
      intro="Institutional-grade automation, built on proven frameworks and backed by a global community."
      items={featureGridItems}
      activeTagline="Trading Advantage"
      getStepLabel={(_, index) => `Feature ${index + 1}`}
      renderActiveFooter={(_, index) => (
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--accent-primary)]/70">
          <span className="h-px w-7 bg-[var(--accent-primary)]/35" />
          {index === 0 ? "24/7 Automated" : "Built for consistency"}
        </div>
      )}
    />
  );
}
