import { missionStatement } from "@/data/wafaaContent";
import { HeroCarousel } from "./HeroCarousel";

export function HeroSection() {
  return (
    <section
      id="main-content"
      className="flex min-h-[100svh] flex-col bg-wafaa-paper"
      aria-labelledby="hero-mission-heading"
    >
      <div className="wafaa-container flex flex-1 flex-col gap-8 py-8 md:py-10">
        <div className="relative min-h-[18rem] flex-1">
          <div className="absolute inset-0">
            <HeroCarousel />
          </div>
        </div>

        <div className="shrink-0 border-t border-wafaa-line pt-8">
          <p
            id="hero-mission-heading"
            className="text-sm font-semibold uppercase tracking-widest text-wafaa-sage"
          >
            Our mission
          </p>
          <blockquote className="mt-4 max-w-4xl">
            <p className="font-display text-2xl font-medium leading-snug text-wafaa-primary sm:text-3xl lg:text-[2.125rem] lg:leading-[1.25]">
              {missionStatement}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
