"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const lightNav = scrolled;

  return (
    <>
      <header className={`navbar${lightNav ? " navbar--light" : ""}`}>
        <div className="navbar-wrapper">
          <Link href="/" className="navbar-logo" aria-label="JALI Transport">
            <Image
              src="/logo13.png"
              alt="JALI Transport"
              width={345}
              height={95}
              priority
              className={lightNav ? "navbar-logo__img" : "navbar-logo__img navbar-logo__img--light"}
            />
          </Link>

          <nav className="navbar-links-desktop" aria-label="Main">
            <div className="navbar-links-wrapper">
              {nav.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="navbar-link"
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.labelEn}
                </Link>
              ))}
            </div>
          </nav>

          <div className="navbar-btn">
            <Button href="/twandikire" variant="nav">
              Get in Touch
            </Button>
          </div>

          <button
            type="button"
            className="navbar-open-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-header">
            <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
              <Image src="/logo13.png" alt="JALI Transport" width={200} height={55} />
            </Link>
          </div>
          <nav className="mobile-menu-links">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.labelEn}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-bottom">
            <Button href="/twandikire">Get in Touch</Button>
          </div>
        </div>
      </div>
    </>
  );
}
