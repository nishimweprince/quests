"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Arrow } from "@/components/ui/Arrow";
import { Logo } from "@/components/ui/Logo";

const links = [["Home", "/"], ["About Us", "/about"], ["Investment Criteria", "/investment-criteria"], ["Portfolio", "/portfolio"]] as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const isProfile = /^\/about\/(board|team)\/[^/]+$/.test(pathname);
  const light = pathname !== "/contact" && !pathname.includes("privacy") && !pathname.includes("terms") && !isProfile;
  useEffect(() => { document.documentElement.classList.toggle("menu-open", open); return () => document.documentElement.classList.remove("menu-open"); }, [open]);
  useEffect(() => {
    const routeTimer = window.setTimeout(() => { setOpen(false); setVisible(true); }, 0);
    return () => window.clearTimeout(routeTimer);
  }, [pathname]);
  useEffect(() => {
    let previous = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const current = window.scrollY;
        if (open || current < 80) setVisible(true);
        else if (current > previous + 7) setVisible(false);
        else if (current < previous - 5) setVisible(true);
        previous = current;
        frame = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, [open]);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`site-nav ${light ? "site-nav--light" : "site-nav--dark"} ${visible ? "" : "site-nav--hidden"} ${pathname === "/contact" ? "site-nav--contact" : ""} ${open ? "site-nav--menu-open" : ""}`}>
      <Link aria-label="Agaciro home" className="nav-logo" href="/"><span className="nav-logo-light"><Logo priority white /></span><span className="nav-logo-dark"><Logo priority /></span></Link>
      <nav aria-label="Primary" className="desktop-nav">
        {links.map(([label, href]) => <Link className={active(href) ? "active" : ""} href={href} key={href}>{label}</Link>)}
      </nav>
      <Link className={`nav-contact ${light ? "nav-contact--white" : "nav-contact--sand"}`} href="/contact">Get in Touch <Arrow /></Link>
      <button aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="menu-toggle" onClick={() => setOpen((value) => !value)}><span /><span /><span /></button>
      <div aria-hidden={!open} className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="mobile-menu-top"><Link aria-label="Agaciro home" href="/" onClick={() => setOpen(false)}><Logo /></Link><button aria-label="Close menu" className="mobile-close" onClick={() => setOpen(false)}>×</button></div>
        <nav aria-label="Mobile navigation">
          {[...links, ["Contact Us", "/contact"] as const].map(([label, href]) => <Link className={active(href) ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="menu-wave" aria-hidden="true"><i /><i /></div>
        <div className="mobile-contact"><a href="mailto:info@agaciro.rw"><span aria-hidden="true">✉</span> info@agaciro.rw</a><a href="https://maps.google.com/?q=BPR+PCD+Towers+Kigali"><span aria-hidden="true">●</span> KN 67, Kigali, Rwanda</a></div>
      </div>
    </header>
  );
}
