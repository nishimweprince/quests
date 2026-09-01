"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, type ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo("[data-reveal]", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.07, ease: "power3.out" });
      document.querySelectorAll<HTMLElement>("[data-word-fill]").forEach((element) => {
        const split = new SplitType(element, { types: "words" });
        gsap.fromTo(split.words, { color: "#ababab" }, { color: "#000000", stagger: 0.04, scrollTrigger: { trigger: element, start: "top 80%", end: "bottom 45%", scrub: true } });
      });
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((element) => {
        const target = Number(element.dataset.count);
        const state = { value: 0 };
        gsap.to(state, { value: target, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 90%", once: true }, onUpdate: () => { element.textContent = Math.round(state.value).toString(); } });
      });
    });
    return () => context.revert();
  }, []);
  return children;
}
