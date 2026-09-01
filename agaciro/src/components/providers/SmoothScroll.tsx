"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

import { lenisOptions } from "@/lib/lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      ...lenisOptions,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
