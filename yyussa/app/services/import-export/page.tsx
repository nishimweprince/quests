import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Import & Export Services',
  description:
    'YYUSSA Group commercial wholesale — importing wheat flour, petroleum, cement, sugar, salt, and cooking oil from Zambia, China, Tanzania, Kenya, Dubai, and Pakistan.',
};

const commodities = [
  { name: 'Wheat Flour', desc: 'Bulk grain flour imported and distributed regionally.' },
  { name: 'Petroleum Products', desc: 'Fuel and petroleum goods for industrial and commercial use.' },
  { name: 'Cement', desc: "High-grade construction cement for Rwanda's growing infrastructure." },
  { name: 'Sugar', desc: 'Refined and raw sugar for food industry distribution.' },
  { name: 'Salt', desc: 'Industrial and consumer-grade salt products.' },
  { name: 'Cooking Oil', desc: 'Bulk vegetable and cooking oils for retail and wholesale.' },
];

const origins = [
  { country: 'Zambia', code: 'ZM' },
  { country: 'China', code: 'CN' },
  { country: 'Tanzania', code: 'TZ' },
  { country: 'Kenya', code: 'KE' },
  { country: 'UAE / Dubai', code: 'AE' },
  { country: 'Pakistan', code: 'PK' },
];

const strengths = [
  'Strategic sourcing from 6+ countries',
  'Essential commodity focus: food, fuel, construction',
  'Seamless integration with YYUSSA Logistics',
  'Competitive pricing for bulk orders',
  'Established supplier relationships since 1994',
  'East & Central Africa distribution network',
];

export default function ImportExportPage() {
  return (
    <>
      <PageHeader
        title="Import & Export"
        subtitle="Commercial wholesale powering regional supply chains with essential commodities."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Import & Export' },
        ]}
      />

      {/* ── Overview ── */}
      <section
        className="py-24 md:py-32"
        style={{ background: 'var(--bg-light)' }}
        aria-labelledby="ie-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
            <ScrollReveal direction="left">
              <span className="section-label">Commercial Wholesale</span>
              <h2
                id="ie-heading"
                className="mt-3 mb-7 text-3xl md:text-4xl"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  letterSpacing: '-0.025em',
                  color: 'var(--color-text-dark)',
                }}
              >
                Powering Regional<br />Supply Chains
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                <p>
                  Our import and export unit is the commercial backbone of YYUSSA Group. We
                  specialize in the procurement, importation, and regional distribution of
                  essential commodities — ensuring consistent supply and competitive value
                  across East and Central Africa.
                </p>
                <p>
                  Operating across six source countries, we maintain strong supplier relationships
                  and leverage our logistics network to deliver goods efficiently — from the port
                  of Mombasa to markets deep in Central Africa.
                </p>
              </div>

              {/* Strengths list */}
              <ul className="mt-8 space-y-3">
                {strengths.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0"
                      style={{ background: 'var(--color-accent)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: 'var(--color-grey-600)' }}>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 border px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:bg-[var(--color-text-dark)] hover:text-white"
                style={{ borderColor: 'var(--color-text-dark)', color: 'var(--color-text-dark)' }}
              >
                Discuss Partnerships
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </ScrollReveal>

            {/* Trade origins */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="sticky top-28">
                <p
                  className="mb-5 text-[11px] uppercase tracking-[0.16em]"
                  style={{ color: 'var(--color-grey-500)' }}
                >
                  Import Origins
                </p>
                <div className="grid grid-cols-2 gap-px border"
                  style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--color-secondary-dark)' }}>
                  {origins.map(({ country, code }) => (
                    <div
                      key={country}
                      className="flex flex-col justify-between p-6"
                      style={{ background: 'var(--bg-white)' }}
                    >
                      <span
                        className="mb-2 text-xs font-bold"
                        style={{ color: 'var(--color-grey-300)', letterSpacing: '0.08em' }}
                      >
                        {code}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-text-dark)' }}
                      >
                        {country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Commodities ── */}
      <section
        className="py-24 md:py-28"
        style={{ background: 'var(--bg-white)' }}
        aria-labelledby="commodities-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <span className="section-label">What We Trade</span>
            <h2
              id="commodities-heading"
              className="mt-3 mb-12 text-3xl md:text-4xl"
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                letterSpacing: '-0.025em',
                color: 'var(--color-text-dark)',
              }}
            >
              Core Commodities
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px border [grid-auto-rows:1fr] sm:grid-cols-2 lg:grid-cols-3"
            style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--color-secondary-dark)' }}>
            {commodities.map(({ name, desc }, i) => (
              <ScrollReveal key={name} direction="up" delay={i * 0.08}>
                <div
                  className="group flex h-full flex-col p-8 transition-colors duration-200 hover:bg-(--bg-light)"
                  style={{ background: 'var(--bg-white)' }}
                >
                  <div
                    className="mb-5 h-px w-8 transition-all duration-300 group-hover:w-14"
                    style={{ background: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <h3
                    className="mb-2 text-lg"
                    style={{
                      fontFamily: "'Libre Baskerville', Georgia, serif",
                      color: 'var(--color-text-dark)',
                    }}
                  >
                    {name}
                  </h3>
                  <p className="mt-auto text-sm leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
                  className="text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif", letterSpacing: '-0.02em' }}
                >
                  Ready to Partner with Us?
                </h2>
                <p className="mt-2 text-sm" style={{ color: 'var(--color-grey-500)' }}>
                  Contact our commercial team to discuss import, export, and wholesale opportunities.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-3 border px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:bg-white hover:text-[var(--color-primary)]"
                style={{ borderColor: 'var(--color-grey-600)', color: 'var(--color-grey-300)' }}
              >
                Get in Touch
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
