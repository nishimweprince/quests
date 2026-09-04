import Link from "next/link";

import { Arrow } from "@/components/ui/Arrow";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { footerColumns, site, socials } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="pad-global">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-intro">
              <p>
                Agaciro Development Fund invests national savings for Rwanda&apos;s
                long-term resilience and prosperity.
              </p>
              <p className="muted">
                Organised under Law N° 007/2021 and accountable to the
                Government of Rwanda through the Minister of Finance and
                Economic Planning.
              </p>
              <Link className="btn btn--sage" href="/contact">
                Contact the Fund <Arrow direction="diagonal" />
              </Link>
              <p className="footer-address">
                {site.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <a className="footer-link" href={`tel:${site.phoneHref}`}>
                  {site.phone}
                </a>
                <a className="footer-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <div className="social-row" role="group" aria-label="Follow Agaciro">
                {socials.map((item) => (
                  <SocialIcon
                    href={item.href}
                    key={item.icon}
                    label={`Agaciro Development Fund on ${item.label}`}
                    name={item.icon}
                    onDark
                  />
                ))}
                <SocialIcon
                  href={`mailto:${site.email}`}
                  label="Email Agaciro Development Fund"
                  name="email"
                  onDark
                />
              </div>
            </div>

            {footerColumns.map((column) => (
              <nav
                aria-label={column.heading}
                className="footer-col"
                key={column.heading}
              >
                <h2>{column.heading}</h2>
                {column.links.map((link) => (
                  <Link className="footer-link" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>

          <div className="footer-bottom">
            <Link aria-label="Agaciro Development Fund — home" className="footer-logo" href="/">
              <Logo white />
            </Link>
            <div className="footer-legal">
              <span>
                Copyright © Agaciro Development Fund 2026. All rights reserved.
              </span>
              <a className="footer-link" href="#top">
                Back to Top <Arrow direction="up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
