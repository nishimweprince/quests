"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCandlesticks = dynamic(
  () =>
    import("@/src/components/three/HeroCandlesticks").then((mod) => ({
      default: mod.HeroCandlesticks,
    })),
  { ssr: false },
);

function GridFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,162,83,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(220,38,38,0.12),transparent_32%),linear-gradient(180deg,#0c0f14_5%,#0c0f14_45%,#16191f_100%)]" />
    </div>
  );
}

export function CandlestickScene() {
  const [supportsWebgl] = useState(() => {
    if (typeof window === "undefined") return true;
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  });
  const [mobile, setMobile] = useState(() =>
    typeof window === "undefined" ? false : window.innerWidth < 768,
  );

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!supportsWebgl) return <GridFallback />;

  return (
    <div className="absolute inset-0">
      <HeroCandlesticks mobile={mobile} />
    </div>
  );
}
