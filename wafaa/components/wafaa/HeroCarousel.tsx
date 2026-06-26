"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroCarousel } from "@/data/wafaaContent";

const AUTO_ADVANCE_MS = 6000;

function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function PlaceholderTile({ alt }: { alt: string }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-wafaa-lilac"
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 25% 35%, rgba(47, 44, 72, 0.14) 0%, transparent 70%),
            radial-gradient(ellipse 55% 45% at 75% 70%, rgba(93, 120, 104, 0.16) 0%, transparent 60%),
            linear-gradient(160deg, #E9E5F1 0%, #FAFAF8 55%, #E9E5F1 100%)
          `,
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--wafaa-primary)" strokeWidth="1.25" aria-hidden="true" className="opacity-50">
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <p className="font-display text-sm font-semibold text-wafaa-primary/70">
          Photo coming soon
        </p>
      </div>
    </div>
  );
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = heroCarousel.length;
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (count <= 1 || isPaused) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      goTo(indexRef.current + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [count, goTo, isPaused]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    }
  };

  if (count === 0) return null;

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-md border border-wafaa-line bg-wafaa-lilac"
      role="group"
      aria-roledescription="carousel"
      aria-label="WAFAA community photos"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
    >
      {heroCarousel.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} of ${count}`}
        >
          {slide.src ? (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          ) : (
            <PlaceholderTile alt={slide.alt} />
          )}
        </div>
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-wafaa-line bg-wafaa-paper/90 text-wafaa-primary backdrop-blur-sm transition-colors hover:bg-white"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-wafaa-line bg-wafaa-paper/90 text-wafaa-primary backdrop-blur-sm transition-colors hover:bg-white"
          >
            <ChevronRight />
          </button>

          <div
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-md bg-wafaa-paper/80 px-3 py-2 backdrop-blur-sm"
            role="tablist"
            aria-label="Choose photo"
          >
            {heroCarousel.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 cursor-pointer rounded-md transition-all ${
                  i === index
                    ? "w-6 bg-wafaa-primary"
                    : "w-2.5 bg-wafaa-primary/30 hover:bg-wafaa-primary/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
