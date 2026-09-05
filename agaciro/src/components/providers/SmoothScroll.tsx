"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

import { lenisOptions } from "@/lib/lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ autoRaf: true, ...lenisOptions });
    lenisRef.current = lenis;

    // Keep scroll-triggered reveals in step with the smoothed scroll position.
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Every route starts at the top. Lenis owns the scroll position once it is
  // running, so window.scrollTo alone would be overridden on the next frame.
  // Stop any in-flight animation first: resetting mid-glide desyncs Lenis's
  // internal position from the window and leaves the page stuck. Refresh the
  // triggers on the next frame so new content has painted before measuring.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const lenis = lenisRef.current;
    let target: Element | null = null;
    try {
      const hash = window.location.hash;
      if (hash.length > 1) target = document.querySelector(hash);
    } catch {
      target = null;
    }
    const restart = () => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
      lenis?.start();
    };
    if (lenis) {
      // A stopped Lenis drops scrollTo unless forced, so force both jumps.
      lenis.stop();
      if (target) lenis.scrollTo(target as HTMLElement, { force: true });
      else lenis.scrollTo(0, { immediate: true, force: true });
      restart();
    } else if (target) {
      target.scrollIntoView();
      requestAnimationFrame(() => ScrollTrigger.refresh());
    } else {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }
  }, [pathname]);

  return children;
}
