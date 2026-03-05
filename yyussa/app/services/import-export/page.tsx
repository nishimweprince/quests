import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Import & Export Services',
  description:
    'YYUSSA Group commercial wholesale — importing wheat flour, petroleum, cement, sugar, salt, and cooking oil from Zambia, China, Tanzania, Kenya, Dubai, and Pakistan.',
};

const commodities = [
  { name: 'Wheat Flour', desc: 'Bulk grain flour imported and distributed regionally.' },
  { name: 'Petroleum Products', desc: 'Fuel and petroleum goods for industrial and commercial use.' },
  { name: 'Cement', desc: 'High-grade construction cement for Rwanda\'s growing infrastructure.' },
  { name: 'Sugar', desc: 'Refined and raw sugar for food industry distribution.' },
  { name: 'Salt', desc: 'Industrial and consumer-grade salt products.' },
  { name: 'Cooking Oil', desc: 'Bulk vegetable and cooking oils for retail and wholesale.' },
];

const origins = [
  { country: 'Zambia', flag: '🇿🇲' },
  { country: 'China', flag: '🇨🇳' },
  { country: 'Tanzania', flag: '🇹🇿' },
  { country: 'Kenya', flag: '🇰🇪' },
  { country: 'Dubai, UAE', flag: '🇦🇪' },
  { country: 'Pakistan', flag: '🇵🇰' },
];

export default function ImportExportPage() {
  return (
    <>
      <PageHeader
        title="Import & Export"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Import & Export' },
        ]}
      />

      {/* Overview */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-labelledby="ie-overview-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <SectionLabel>YYUSSA Services</SectionLabel>
              <h2
                id="ie-overview-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Export &amp; Import
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5 text-base md:text-lg">
                Our import and export unit is the commercial backbone of YYUSSA Group. We
                specialize in the procurement, importation, and regional distribution of essential
                commodities — ensuring consistent supply and competitive value for our clients.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Operating across multiple source countries, we maintain strong supplier
                relationships and leverage our logistics network to deliver goods efficiently
                across East and Central Africa.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  'Strategic sourcing from 6+ countries',
                  'Essential commodity focus: food, fuel, construction',
                  'Seamless integration with YYUSSA Logistics',
                  'Competitive pricing for bulk orders',
                ].map((point) => (
                  <div key={point} className="flex gap-3 items-start">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 mt-0.5"
                      style={{ color: 'var(--color-primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--color-text-secondary)]">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-normal transition-all hover:scale-[1.02] active:scale-95"
              >
                Enquire Now <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div
                className="rounded-2xl p-10 grain-overlay"
                style={{ background: 'var(--color-surface-dark)' }}
              >
                <Globe2 size={48} className="mb-6" style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                <div
                  className="text-4xl font-bold mb-3 text-white"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  6 Countries
                </div>
                <div className="text-[var(--color-text-muted-light)] text-sm mb-6">
                  Strategic import origins across Asia, Middle East &amp; Africa.
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {origins.map((o) => (
                    <div
                      key={o.country}
                      className="text-center rounded-lg border border-[var(--color-border-dark)] py-3 px-2"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    >
                      <div className="text-xl mb-1" aria-hidden="true">{o.flag}</div>
                      <div className="text-xs text-[var(--color-text-muted-light)] leading-tight">{o.country}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Commodities */}
      <section
        className="py-20 md:py-24"
        style={{ background: 'var(--color-surface-white)' }}
        aria-labelledby="commodities-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <SectionLabel>What We Trade</SectionLabel>
              <h2
                id="commodities-heading"
                className="text-3xl md:text-4xl font-bold mt-2"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Our Key Commodities
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commodities.map((item, index) => (
              <ScrollReveal key={item.name} direction="up" delay={index * 0.1}>
                <div
                  className="rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all duration-300"
                  style={{ background: 'var(--color-surface-light)' }}
                >
                  <div
                    className="w-8 h-1 rounded mb-4"
                    style={{ background: 'var(--color-primary)' }}
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 grain-overlay"
        style={{ background: 'var(--color-surface-dark)' }}
        aria-label="Contact call to action"
      >
        <div className="container-xl text-center">
          <ScrollReveal direction="up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              style={{ letterSpacing: '-0.03em' }}
            >
              Ready to Partner with Us?
            </h2>
            <p className="text-[var(--color-text-muted-light)] mb-8 max-w-lg mx-auto">
              Contact our commercial team to discuss import, export, and wholesale opportunities.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-normal transition-all hover:scale-[1.02] active:scale-95"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
