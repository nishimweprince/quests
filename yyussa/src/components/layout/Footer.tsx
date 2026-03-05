import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="grain-overlay"
      style={{ background: 'var(--color-surface-darker)' }}
      aria-label="Site footer"
    >
      <div className="container-xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4" aria-label="YYUSSA Home">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-white font-bold"
                style={{ background: 'var(--color-primary)' }}
                aria-hidden="true"
              >
                Y
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ letterSpacing: '-0.03em' }}
              >
                YYUSSA
              </span>
            </Link>
            <p className="text-[var(--color-text-muted-light)] text-sm leading-relaxed mb-6 max-w-xs">
              A leading Rwandan conglomerate with 30+ years of excellence in real estate, commercial
              wholesale, and logistics across East Africa.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {(['Facebook', 'LinkedIn', 'Twitter'] as const).map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={`Follow YYUSSA on ${platform}`}
                  className="w-9 h-9 rounded border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-text-muted-light)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <span className="text-xs font-bold">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => !l.dropdown).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted-light)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[var(--color-text-muted-light)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
            >
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Real Estate', href: '/services/real-estate' },
                { label: 'Import & Export', href: '/services/import-export' },
                { label: 'Logistics', href: '/services/logistics' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted-light)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
            >
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-[var(--color-text-muted-light)]">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[var(--color-text-muted-light)] mb-1 uppercase tracking-wider">Transport & Logistics</p>
                  {CONTACT_INFO.phones.logistics.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="block text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[var(--color-text-muted-light)] mb-1 uppercase tracking-wider">Real Estate</p>
                  {CONTACT_INFO.phones.realEstate.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="block text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-[var(--color-text-muted-light)]">{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border-dark)]">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-text-muted-light)]">
            © {currentYear} All Rights Reserved By YYUSSA Group Ltd
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-[var(--color-text-muted-light)] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--color-text-muted-light)] hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
