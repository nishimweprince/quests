"use client";

import { useEffect, useState } from "react";

const key = "agaciro-cookie-choice";
export function CookieBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(!localStorage.getItem(key)));
    return () => cancelAnimationFrame(frame);
  }, []);
  if (!open) return null;
  const choose = (value: string) => { localStorage.setItem(key, value); setOpen(false); };
  return (
    <aside aria-label="Cookie preferences" className="cookie-banner">
      <button aria-label="Close cookie preferences" className="cookie-close" onClick={() => choose("closed")}>×</button>
      <p>We use essential local storage to remember your preferences. No analytics are enabled.</p>
      <div className="cookie-actions"><button onClick={() => choose("declined")}>Decline</button><button className="cookie-accept" onClick={() => choose("accepted")}>Accept</button></div>
    </aside>
  );
}
