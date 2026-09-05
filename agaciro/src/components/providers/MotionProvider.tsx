"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/** Safari only gained requestIdleCallback in 16.4, so fall back to a timer. */
const requestIdle = (run: () => void): number =>
  typeof requestIdleCallback === "function"
    ? requestIdleCallback(run, { timeout: 500 })
    : window.setTimeout(run, 200);

const cancelIdle = (handle: number) => {
  if (typeof cancelIdleCallback === "function") cancelIdleCallback(handle);
  else window.clearTimeout(handle);
};

/**
 * Siwa's motion is deliberately small: a scale-and-fade reveal on scroll and
 * a count-up on figures. No word-fill: Siwa loads SplitText but never uses it.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    let cancelled = false;
    let context: gsap.Context | undefined;

    const buildContext = () =>
      gsap.context(() => {
        document
          .querySelectorAll<HTMLElement>("[data-reveal]")
          .forEach((element) => {
            const inHero = Boolean(element.closest(".hero, .page-hero"));
            gsap.fromTo(
              element,
              { opacity: 0, scale: 0.98, y: 12 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                delay: inHero ? 0.05 : 0,
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
            // "456bn" counts as a number but keeps its unit, and the server's
            // text is left untouched until the trigger fires.
            const suffix = (element.textContent ?? "").replace(/^[\s\d,.]*/, "");
            const state = { value: 0 };
            const write = (value: number) => {
              element.textContent = `${Math.round(value)}${suffix}`;
            };
            gsap.to(state, {
              value: target,
              duration: 1.0,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 92%", once: true },
              onStart: () => write(0),
              onUpdate: () => write(state.value),
            });
          });
      });

    // This effect belongs to the root layout, and React hydrates that before
    // the page segment nested inside Next's loading boundary. Building the
    // tweens straight away writes GSAP's inline styles onto server HTML React
    // has not hydrated yet, and React reports that as a hydration mismatch on
    // every page. So nothing may be touched until the segment below has
    // hydrated. React raises no event for it, so wait on the two things that
    // bracket it: the scripts carrying the segment have run (the load event),
    // and the scheduler has drained the hydration work queued off them (an
    // idle callback). Both are capped, so a slow image cannot hold the reveal
    // back and a busy page cannot leave it unplayed.
    let idle = 0;
    let started = false;
    const start = () => {
      if (started || cancelled) return;
      started = true;
      idle = requestIdle(() => {
        if (!cancelled) context = buildContext();
      });
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    const startCap = window.setTimeout(start, 1200);

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
      window.clearTimeout(startCap);
      window.removeEventListener("load", start);
      cancelIdle(idle);
      window.removeEventListener("load", onLoad);
      window.clearTimeout(refresh);
      context?.revert();
    };
  }, [pathname]);

  return children;
}
