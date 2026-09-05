"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Siwa's motion is deliberately small: a scale-and-fade reveal on scroll and
 * a count-up on figures. No word-fill — Siwa loads SplitText but never uses it.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          const inHero = Boolean(element.closest(".hero, .page-hero"));
          gsap.fromTo(
            element,
            { opacity: 0, scale: 0.965, y: 18 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              delay: inHero ? 0.15 : 0,
              scrollTrigger: inHero
                ? undefined
                : { trigger: element, start: "top 88%", once: true },
            },
          );
        });

      document
        .querySelectorAll<HTMLElement>("[data-count]")
        .forEach((element) => {
          const target = Number(element.dataset.count);
          if (!Number.isFinite(target)) return;
          const state = { value: 0 };
          element.textContent = "0";
          gsap.to(state, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
            onUpdate: () => {
              element.textContent = Math.round(state.value).toString();
            },
          });
        });
    });

    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    // Remote images arrive after paint and shift trigger positions. Re-measure
    // once everything has loaded so scrolled reveals cannot stick invisible.
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      window.clearTimeout(refresh);
      context.revert();
    };
  }, [pathname]);

  return children;
}
