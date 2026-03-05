import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Logistics Services',
  description:
    'YYUSSA Logistics — 25+ years of cargo transport expertise with 300+ tank trailers and 50+ flatbed trailers serving East and Central Africa.',
};

const fleetStats = [
  { value: '300+', label: 'Tank Trailers', desc: 'Petroleum, chemicals & liquid cargo' },
  { value: '50+', label: 'Flatbed Trailers', desc: 'Bulk dry goods & heavy cargo' },
  { value: '25+', label: 'Years of Service', desc: 'Proven operations since the 1990s' },
  { value: '2M+', label: 'Tonnes Shipped', desc: 'Cargo moved across the region' },
];

const specializations = [
  'Petroleum Products', 'Wheat Flour', 'Cement & Clinker',
  'Coal', 'Sugar', 'Consumer Goods',
];

const routes = [
  { city: 'Nairobi', country: 'Kenya' },
  { city: 'Mombasa', country: 'Kenya' },
  { city: 'Dar es Salaam', country: 'Tanzania' },
  { city: 'Tanga', country: 'Tanzania' },
  { city: 'Lusaka', country: 'Zambia' },
  { city: 'Goma', country: 'DRC' },
  { city: 'Lubumbashi', country: 'DRC' },
  { city: 'Bujumbura', country: 'Burundi' },
];

export default function LogisticsPage() {
  return (
    <>
      <PageHeader
        title="Logistics"
        subtitle="25+ years of cargo expertise with a fleet built for East and Central Africa."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Logistics' },
        ]}
      />

      {/* ── Overview ── */}
      <section
        className="py-24 md:py-32"
        style={{ background: 'var(--bg-light)' }}
        aria-labelledby="logistics-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
            <ScrollReveal direction="left">
              <span className="section-label">Cargo Transport</span>
              <h2
                id="logistics-heading"
                className="mt-3 mb-7 text-3xl md:text-4xl"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  letterSpacing: '-0.025em',
                  color: 'var(--color-text-dark)',
                }}
              >
                Built for Scale,<br />Driven by Reliability
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                <p>
                  We have more than 25 years of expertise in cargo shipping with a strong fleet
                  of 300+ tank trailers and 50+ flatbed trailers. Our transport division is
                  built on reliability, safety, and an unwavering zero-accident commitment.
                </p>
                <p>
                  Operating across East and Central Africa, YYUSSA Logistics moves millions of
                  tonnes of cargo annually — connecting suppliers, refineries, and distributors
                  with precision and HSSEQ-certified operations.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 border px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:bg-[var(--color-text-dark)]! hover:text-white!"
                style={{ borderColor: 'var(--color-text-dark)', color: 'var(--color-text-dark)' }}
              >
                Request a Quote
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </ScrollReveal>

            {/* Fleet stats grid */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-px border"
                style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--color-secondary-dark)' }}>
                {fleetStats.map(({ value, label, desc }) => (
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
                      <div className="text-sm font-semibold" style={{ color: 'var(--color-text-dark)' }}>
                        {label}
                      </div>
                      <div className="mt-0.5 text-xs" style={{ color: 'var(--color-grey-500)' }}>
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Cargo & Routes ── */}
      <section
        className="py-24 md:py-28"
        style={{ background: 'var(--bg-white)' }}
        aria-labelledby="cargo-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal direction="left">
              <span className="section-label">Cargo Expertise</span>
              <h2
                id="cargo-heading"
                className="mt-3 mb-8 text-2xl md:text-3xl"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-dark)',
                }}
              >
                What We Move
              </h2>
              <div className="grid grid-cols-2 gap-px border"
                style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--color-secondary-dark)' }}>
                {specializations.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 bg-(--bg-white) p-5 text-sm text-(--color-grey-600) transition-colors duration-200 hover:bg-(--bg-light) hover:text-(--color-text-dark)"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0"
                      style={{ background: 'var(--color-accent)' }}
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <span className="section-label">Route Network</span>
              <h2
                className="mt-3 mb-8 text-2xl md:text-3xl"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-dark)',
                }}
              >
                Coverage
              </h2>
              <ul className="space-y-0 border"
                style={{ borderColor: 'var(--color-secondary-dark)' }}>
                {routes.map(({ city, country }, i) => (
                  <li
                    key={`${city}-${country}`}
                    className="flex items-center justify-between border-b px-5 py-4 last:border-0"
                    style={{ borderColor: 'var(--color-secondary-dark)' }}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin
                        size={14}
                        style={{ color: 'var(--color-accent)' }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium" style={{ color: 'var(--color-text-dark)' }}>
                        {city}
                      </span>
                    </div>
                    <span
                      className="text-xs uppercase tracking-[0.1em]"
                      style={{ color: 'var(--color-grey-500)' }}
                    >
                      {country}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 grain-overlay"
        style={{ background: 'var(--bg-dark)' }}
        aria-label="Contact call to action"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2
                  className="text-2xl text-white! md:text-3xl"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif", letterSpacing: '-0.02em' }}
                >
                  Move Your Cargo with Confidence
                </h2>
                <p className="mt-2 text-sm" style={{ color: 'var(--color-grey-500)' }}>
                  Talk to our logistics team about fleet capacity, routes, and tailored solutions.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-3 border px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:bg-white! hover:text-[var(--color-accent)]!"
                style={{ borderColor: 'var(--color-grey-600)', color: 'var(--color-grey-300)' }}
              >
                Contact Logistics Team
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
