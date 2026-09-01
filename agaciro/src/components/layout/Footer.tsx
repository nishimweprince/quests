import Link from "next/link";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Arrow } from "@/components/ui/Arrow";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, site } from "@/content/site";

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
              <Link className="btn btn--cream" href="/contact">
                Get in Touch <Arrow direction="diagonal" />
              </Link>
              <address className="footer-address">
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
              </address>
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
              <a
                className="footer-link"
                href="https://www.linkedin.com/company/agaciro-development-fund"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon aria-hidden="true" icon={faLinkedinIn} />
                LinkedIn
              </a>
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
