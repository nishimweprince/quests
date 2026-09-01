"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const splits: SplitType[] = [];
    const context = gsap.context(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          const inHero = Boolean(element.closest(".home-hero, .intro-hero"));
          gsap.fromTo(
            element,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              duration: 0.82,
              ease: "power3.out",
              delay: inHero ? 0.12 : 0,
              scrollTrigger: inHero
                ? undefined
                : { trigger: element, start: "top 88%", once: true },
            },
          );
        });
      document
        .querySelectorAll<HTMLElement>("[data-word-fill]")
        .forEach((element) => {
          const split = new SplitType(element, { types: "words" });
          splits.push(split);
          gsap.fromTo(
            split.words,
            { color: "#ababab" },
            {
              color: "#000000",
              stagger: 0.04,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 45%",
                scrub: true,
              },
            },
          );
        });
      document
        .querySelectorAll<HTMLElement>("[data-count]")
        .forEach((element) => {
          const target = Number(element.dataset.count);
          const state = { value: 0 };
          element.textContent = "0";
          gsap.to(state, {
            value: target,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
            onUpdate: () => {
              element.textContent = Math.round(state.value).toString();
            },
          });
        });
    });
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      cancelled = true;
      window.clearTimeout(refresh);
      context.revert();
      splits.forEach((split) => split.revert());
    };
  }, [pathname]);
  return children;
}
