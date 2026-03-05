'use client';
import Link from 'next/link';
import { MapPin, Phone, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants';

const serviceLinks = [
  { label: 'Real Estate', href: '/services/real-estate' },
  { label: 'Import & Export', href: '/services/import-export' },
  { label: 'Logistics', href: '/services/logistics' },
];

const quickLinks = NAV_LINKS.filter((l) => !l.dropdown);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="grain-overlay"
      style={{ background: 'var(--bg-dark)' }}
      aria-label="Site footer"
    >
      {/* Top rule */}
      <div className="h-px w-full" style={{ background: 'var(--color-grey-800)' }} aria-hidden="true" />

      <div className="container-xl py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="YYUSSA Group Ltd — Home">
              <div className="leading-none">
                <span
                  className="block text-2xl font-bold tracking-[0.04em] text-white!"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  YYUSSA
                </span>
                <span
                  className="mt-1 block text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: 'var(--color-grey-600)' }}
                >
                  Group Ltd
                </span>
              </div>
            </Link>

            <p
              className="mt-6 mb-2 text-sm leading-relaxed italic"
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                color: 'var(--color-grey-500)',
              }}
            >
              &ldquo;Bringing the difference isn&apos;t just a dream. It is YYUSSA&apos;s
              mission.&rdquo;
            </p>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
              A leading Rwandan conglomerate with 30+ years of excellence across East Africa.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter / X' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Follow YYUSSA on ${label}`}
                  className="flex h-9 w-9 items-center justify-center border transition-colors duration-200"
                  style={{ borderColor: 'var(--color-grey-800)', color: 'var(--color-grey-600)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-grey-800)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-grey-600)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3
              className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white!"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-grey-500)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-500)')}
                  >
                    <span
                      className="h-px w-3 transition-all duration-200 group-hover:w-5"
                      style={{ background: 'var(--color-accent)', opacity: 0.5 }}
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3
              className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white!"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-grey-500)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-500)')}
                  >
                    <span
                      className="h-px w-3 transition-all duration-200 group-hover:w-5"
                      style={{ background: 'var(--color-accent)', opacity: 0.5 }}
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3
              className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white!"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed" style={{ color: 'var(--color-grey-500)' }}>
                  {CONTACT_INFO.address}
                </span>
              </li>

              <li className="flex gap-3">
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="mb-1.5 text-[10px] uppercase tracking-[0.14em]"
                    style={{ color: 'var(--color-grey-600)' }}
                  >
                    Transport &amp; Logistics
                  </p>
                  {CONTACT_INFO.phones.logistics.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="block text-sm transition-colors duration-200"
                      style={{ color: 'var(--color-grey-400)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-400)')}
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex gap-3">
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="mb-1.5 text-[10px] uppercase tracking-[0.14em]"
                    style={{ color: 'var(--color-grey-600)' }}
                  >
                    Real Estate
                  </p>
                  {CONTACT_INFO.phones.realEstate.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="block text-sm transition-colors duration-200"
                      style={{ color: 'var(--color-grey-400)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-400)')}
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex gap-3">
                <Clock
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <span className="text-sm" style={{ color: 'var(--color-grey-500)' }}>
                  {CONTACT_INFO.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'var(--color-grey-800)' }}
      >
        <div className="container-xl flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs" style={{ color: 'var(--color-grey-600)' }}>
            &copy; {year} YYUSSA Group Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms & Conditions', href: '/terms' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs transition-colors duration-200"
                style={{ color: 'var(--color-grey-600)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-grey-300)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-600)')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
