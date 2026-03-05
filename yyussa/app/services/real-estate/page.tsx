import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { PROPERTIES, CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Real Estate Services',
  description:
    'YYUSSA Real Estate offers 100+ rental properties across Rwanda, trusted by Vivo Energy, World Vision, MTN, Bank of Kigali, and more.',
};

const highlights = [
  { value: '100+', label: 'Rental Properties', sub: 'Nationwide across Rwanda' },
  { value: '$32M', label: 'Kigali Heights', sub: 'Flagship property acquisition' },
  { value: '8+', label: 'Multinational Tenants', sub: 'Energy, finance, health & tech' },
  { value: '30+', label: 'Years in Property', sub: 'Consistent management excellence' },
];

const tenants = [
  'Vivo Energy', 'World Vision', 'Bank of Kigali', 'MTN', 'Rubis Energy',
  'Mastercard Foundation', 'RRA', 'Oryx Energies', 'Ecobank', 'I&M Bank', 'UGHE',
];

export default function RealEstatePage() {
  return (
    <>
      <PageHeader
        title="Real Estate"
        subtitle="Over 100 rental properties across Rwanda, trusted by East Africa's most respected organizations."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Real Estate' },
        ]}
      />

      {/* ── Overview ── */}
      <section
        className="py-24 md:py-32"
        style={{ background: 'var(--bg-light)' }}
        aria-labelledby="re-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
            <ScrollReveal direction="left">
              <span className="section-label">YYUSSA Real Estate</span>
              <h2
                id="re-heading"
                className="mt-3 mb-7 text-3xl md:text-4xl"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  letterSpacing: '-0.025em',
                  color: 'var(--color-text-dark)',
                }}
              >
                Rwanda&apos;s Premier<br />Property Portfolio
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                <p>
                  With over 100 rental options nationwide, we ensure you find the perfect space
                  wherever you are. Our portfolio spans commercial, residential, and institutional
                  properties — designed for businesses that demand quality and reliability.
                </p>
                <p>
                  Our trusted expertise is backed by successful collaborations with industry leaders
                  across energy, finance, health, and technology sectors. In 2024, YYUSSA acquired
                  the landmark Kigali Heights complex for $32 million — the single largest property
                  deal in our portfolio&apos;s history.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 border px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:bg-[var(--color-text-dark)] hover:text-white"
                style={{
                  borderColor: 'var(--color-text-dark)',
                  color: 'var(--color-text-dark)',
                }}
              >
                Inquire About Properties
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </ScrollReveal>

            {/* Key highlights grid */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-px border"
                style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--color-secondary-dark)' }}>
                {highlights.map(({ value, label, sub }) => (
                  <div
                    key={label}
                    className="flex flex-col justify-between p-7"
                    style={{ background: 'var(--bg-white)' }}
                  >
                    <div
                      className="mb-2 text-3xl font-bold leading-none"
                      style={{
                        fontFamily: "'Libre Baskerville', Georgia, serif",
                        color: 'var(--color-accent)',
                      }}
                    >
                      {value}
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-text-dark)' }}
                      >
                        {label}
                      </div>
                      <div className="mt-0.5 text-xs" style={{ color: 'var(--color-grey-500)' }}>
                        {sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Property Portfolio ── */}
      <section
        className="py-24 md:py-28"
        style={{ background: 'var(--bg-white)' }}
        aria-labelledby="portfolio-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <span className="section-label">Our Portfolio</span>
            <h2
              id="portfolio-heading"
              className="mt-3 mb-12 text-3xl md:text-4xl"
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                letterSpacing: '-0.025em',
                color: 'var(--color-text-dark)',
              }}
            >
              Featured Properties
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px border [grid-auto-rows:1fr] sm:grid-cols-2 lg:grid-cols-3"
            style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--color-secondary-dark)' }}>
            {PROPERTIES.map((property, index) => (
              <ScrollReveal key={property.name} direction="up" delay={index * 0.07}>
                <div
                  className="group flex h-full flex-col p-8 transition-colors duration-200 hover:bg-(--bg-light)"
                  style={{ background: 'var(--bg-white)' }}
                >
                  {/* Number */}
                  <div
                    className="mb-5 text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: 'var(--color-grey-400)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {/* Brass line */}
                  <div
                    className="mb-4 h-px w-8 transition-all duration-300 group-hover:w-14"
                    style={{ background: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <h3
                    className="mb-1 text-base font-semibold"
                    style={{
                      fontFamily: "'Libre Baskerville', Georgia, serif",
                      color: 'var(--color-text-dark)',
                    }}
                  >
                    {property.name}
                  </h3>
                  <p className="mt-auto text-sm" style={{ color: 'var(--color-grey-500)' }}>
                    {property.location}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tenants ── */}
      <section
        className="py-20 grain-overlay"
        style={{ background: 'var(--bg-dark)' }}
        aria-labelledby="tenants-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <span className="section-label" style={{ color: 'var(--color-accent)' }}>
              Key Tenants
            </span>
            <h2
              id="tenants-heading"
              className="mt-3 mb-10 text-2xl text-white md:text-3xl"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif", letterSpacing: '-0.02em' }}
            >
              Trusted by Industry Leaders
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-px"
            style={{ background: 'var(--color-grey-800)' }}>
            {tenants.map((name, i) => (
              <ScrollReveal key={name} direction="up" delay={i * 0.04}>
                <div
                  className="group flex aspect-square items-center justify-center p-4 text-center"
                  style={{ background: 'var(--color-primary-light)' }}
                >
                  <span
                    className="text-[11px] font-medium uppercase leading-tight tracking-[0.06em] transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                    style={{ color: 'var(--color-grey-500)' }}
                  >
                    {name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{ background: 'var(--bg-light)' }}
        aria-label="Contact call to action"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2
                  className="text-2xl md:text-3xl"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    color: 'var(--color-text-dark)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ready to find your perfect space?
                </h2>
                <p className="mt-2 text-sm" style={{ color: 'var(--color-grey-600)' }}>
                  Our real estate team is available Monday – Sunday, 7 AM – 8 PM.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:bg-[var(--color-text-dark)] hover:text-white"
                  style={{ borderColor: 'var(--color-text-dark)', color: 'var(--color-text-dark)' }}
                >
                  Contact Us
                </Link>
                <a
                  href={`tel:${CONTACT_INFO.phones.realEstate[0].replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 border px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white"
                  style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
                >
                  <Phone size={15} aria-hidden="true" />
                  {CONTACT_INFO.phones.realEstate[0]}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
