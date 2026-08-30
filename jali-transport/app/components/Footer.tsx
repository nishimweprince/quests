import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { ArrowIcon } from "./ArrowIcon";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-col--brand">
          <Link href="/" className="footer-logo">
            <Image src="/logo13.png" alt="JALI Transport" width={186} height={51} />
          </Link>
          <p className="footer-tagline">
            JALI Transport provides public bus services in Kigali City and across
            Rwanda.
          </p>
          <Link href="/twandikire" className="button btn-arrow button--cream">
            <span>Get in Touch</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className="footer-col">
          <nav className="footer-nav" aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.labelEn}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-col footer-col--contact">
          <a href={site.emailHref} className="footer-link">
            {site.email}
          </a>
          <span className="footer-location">{site.addressEn}</span>
        </div>
      </div>

      <div className="container footer-legal">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        <a href="#" className="btn-scroll btn-scroll--footer">
          Back to Top
          <ArrowIcon className="icon-arrow--up" />
        </a>
      </div>
    </footer>
  );
}
