import type { Metadata } from 'next';
import Link from 'next/link';
import { Truck, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Logistics Services',
  description:
    'YYUSSA Logistics — 25+ years of cargo transport expertise with 300+ tank trailers and 50+ flatbed trailers serving East and Central Africa.',
};

const fleet = [
  { count: '300+', label: 'Tank Trailers', desc: 'Petroleum, chemicals & liquid cargo' },
  { count: '50+', label: 'Flatbed Trailers', desc: 'Bulk dry goods & heavy cargo' },
  { count: '25+', label: 'Years of Service', desc: 'Proven track record since the 1990s' },
];

const specializations = [
  'Petroleum Products',
  'Wheat Flour',
  'Cement & Clinker',
  'Coal',
  'Sugar',
  'Consumer Goods',
];

const routes = [
  { city: 'Nairobi', country: 'Kenya', flag: '🇰🇪' },
  { city: 'Mombasa', country: 'Kenya', flag: '🇰🇪' },
  { city: 'Dar es Salaam', country: 'Tanzania', flag: '🇹🇿' },
  { city: 'Tanga', country: 'Tanzania', flag: '🇹🇿' },
  { city: 'Songea', country: 'Tanzania', flag: '🇹🇿' },
  { city: 'Lusaka', country: 'Zambia', flag: '🇿🇲' },
  { city: 'Goma', country: 'DRC', flag: '🇨🇩' },
  { city: 'Lubumbashi', country: 'DRC', flag: '🇨🇩' },
];

export default function LogisticsPage() {
  return (
    <>
      <PageHeader
        title="Logistics"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Logistics' },
        ]}
      />

      {/* Overview */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-labelledby="logistics-overview-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <SectionLabel>YYUSSA Services</SectionLabel>
              <h2
                id="logistics-overview-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Logistics &amp; Cargo Transport
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5 text-base md:text-lg">
                We have more than 25 years of expertise in cargo shipping with a strong fleet of
                300+ tank trailers and more than 50 flatbed trailers. Our transport division is
                built on reliability, safety, and scale.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Operating across East and Central Africa, YYUSSA Logistics moves millions of tonnes
                of cargo annually — connecting suppliers, refineries, and distributors with
                precision and zero-accident commitment.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  'Zero-accident operations mandate',
                  '300+ specialized tank trailers',
                  'Coverage across 4 countries',
                  'HSSEQ certified operations',
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
                Get a Quote <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-1 gap-4">
                {fleet.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[var(--color-border-dark)] p-6 flex items-center gap-6 grain-overlay"
                    style={{ background: 'var(--color-surface-dark)' }}
                  >
                    <div>
                      <div
                        className="text-3xl font-bold mb-1"
                        style={{ color: 'var(--color-primary)', letterSpacing: '-0.04em' }}
                      >
                        {item.count}
                      </div>
                      <div className="font-normal text-white">{item.label}</div>
                    </div>
                    <div className="w-px self-stretch bg-[var(--color-border-dark)]" aria-hidden="true" />
                    <p className="text-sm text-[var(--color-text-muted-light)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section
        className="py-20 md:py-24"
        style={{ background: 'var(--color-surface-white)' }}
        aria-labelledby="specializations-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <ScrollReveal direction="left">
                <SectionLabel>What We Move</SectionLabel>
                <h2
                  id="specializations-heading"
                  className="text-3xl md:text-4xl font-bold mt-2 mb-8"
                  style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
                >
                  Cargo Specializations
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {specializations.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[var(--color-border)] p-4 flex items-center gap-3"
                      style={{ background: 'var(--color-surface-light)' }}
                    >
                      <Truck size={16} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal direction="right" delay={0.15}>
                <SectionLabel>Coverage</SectionLabel>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2 mb-8"
                  style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
                >
                  Route Network
                </h2>
                <div className="space-y-3">
                  {routes.map((route) => (
                    <div
                      key={`${route.city}-${route.country}`}
                      className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] p-4"
                      style={{ background: 'var(--color-surface-light)' }}
                    >
                      <MapPin size={16} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">{route.city}</span>
                      <span className="ml-auto text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
                        <span aria-hidden="true">{route.flag}</span>
                        {route.country}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
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
              Move Your Cargo with Confidence
            </h2>
            <p className="text-[var(--color-text-muted-light)] mb-8 max-w-lg mx-auto">
              Talk to our logistics team about fleet capacity, routes, and tailored transport solutions.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-normal transition-all hover:scale-[1.02] active:scale-95"
            >
              Contact Logistics Team
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
