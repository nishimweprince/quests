"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  faBars,
  faEnvelope,
  faLocationDot,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Arrow, Chevron } from "@/components/ui/Arrow";
import { Logo } from "@/components/ui/Logo";
import { navigation, site } from "@/content/site";

/** Routes that open on a light background need the dark logo and sand CTA. */
const LIGHT_PREFIXES = [
  "/contact",
  "/disclaimer",
  "/whistleblowing",
  "/resources",
  "/careers",
  "/news",
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastPath, setLastPath] = useState(pathname);

  // Reset the chrome when the route changes — adjusting state during render
  // rather than in an effect avoids a cascading second render.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setVisible(true);
  }

  const isProfile = /^\/about\/(board|team)\/[^/]+$/.test(pathname);
  const light =
    isProfile || LIGHT_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);


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
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header
        className={`nav ${light ? "nav--light" : ""} ${visible ? "" : "nav--hidden"}`}
      >
        <div className="nav-inner container">
          <Link aria-label="Agaciro Development Fund — home" className="nav-logo" href="/">
            <span className="nav-logo-light">
              <Logo priority white />
            </span>
            <span className="nav-logo-dark">
              <Logo priority />
            </span>
          </Link>

          <nav aria-label="Primary" className="nav-pill">
            {navigation.map((item) => (
              <div className="nav-pill-item" key={item.href}>
                <Link
                  className={`nav-pill-link ${isActive(item.href) ? "is-active" : ""}`}
                  href={item.href}
                >
                  {item.label}
                  {item.children ? <Chevron /> : null}
                </Link>
                {item.children ? (
                  <div className="nav-drop">
                    {item.children.map((child) => (
                      <Link
                        className={pathname === child.href ? "is-active" : ""}
                        href={child.href}
                        key={child.href}
                      >
                        {child.label}
                        {child.note ? <span>{child.note}</span> : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <Link className="nav-cta" href="/contact">
            Get in Touch <Arrow direction="diagonal" />
          </Link>

          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="nav-burger"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu ${open ? "is-open" : ""}`}
        inert={!open || undefined}
      >
        <div className="mobile-menu-top">
          <Link aria-label="Agaciro Development Fund — home" className="nav-logo" href="/">
            <Logo />
          </Link>
          <button
            aria-label="Close menu"
            className="mobile-close"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="mobile-nav">
          {navigation.map((item) => (
            <div className="mobile-group" key={item.href}>
              <Link
                className={isActive(item.href) ? "is-active" : ""}
                href={item.href}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="mobile-sub">
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="mobile-group">
            <Link
              className={isActive("/contact") ? "is-active" : ""}
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        <div className="mobile-contact">
          <a href={`mailto:${site.email}`}>
            <FontAwesomeIcon aria-hidden="true" icon={faEnvelope} />
            {site.email}
          </a>
          <a href={`tel:${site.phoneHref}`}>
            <FontAwesomeIcon aria-hidden="true" icon={faPhone} />
            {site.phone}
          </a>
          <a
            href={`https://maps.google.com/?q=${site.mapQuery}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <FontAwesomeIcon aria-hidden="true" icon={faLocationDot} />
            {site.address[0]}
          </a>
        </div>
      </div>
    </>
  );
}
