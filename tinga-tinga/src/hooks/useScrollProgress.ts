"use client";

import { useScroll } from "framer-motion";
import { RefObject } from "react";

export function useScrollProgress(target: RefObject<HTMLElement | null>) {
  return useScroll({
    target,
    offset: ["start end", "end start"],
  });
}
