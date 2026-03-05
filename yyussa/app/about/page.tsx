import type { Metadata } from 'next';
import type { LucideProps } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { CheckCircle2, Zap, Star, Shield, Heart, RefreshCw, Clock, Settings, TrendingUp, Users } from 'lucide-react';
import { CORE_VALUES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about YYUSSA Group Ltd — a leading Rwandan conglomerate with 30+ years in real estate, logistics, and commercial wholesale.',
};

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Zap, Star, Shield, Heart, RefreshCw, CheckCircle2, Clock, Settings, TrendingUp, Users,
};

const qualityPolicies = [
  {
    title: 'Responsive Communication',
    desc: 'We ensure fast, clear, and respectful communication with all stakeholders at every stage of engagement.',
  },
  {
    title: 'Health & Safety Commitment',
    desc: 'Zero-accident operations are our standard. We embed HSSEQ principles in every operational decision.',
  },
  {
    title: 'YYUSSA Operating Management System',
    desc: 'Our proprietary OMS ensures consistent service quality, efficiency, and compliance across all business units.',
  },
  {
    title: 'Meeting HSSEQ Requirements',
    desc: 'We rigorously meet and exceed Health, Safety, Security, Environment, and Quality standards.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Vision Section */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-labelledby="vision-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <SectionLabel>Since 1994</SectionLabel>
              <h2
                id="vision-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Our Vision
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
                YYUSSA Group aspires to be a leading conglomerate in commercial wholesale (imports
                and exports), logistics, cargo transportation, and real estate development across
                Rwanda and beyond. Driven by our commitment to excellence and high-quality service,
                we aim to expand our footprint across Africa, delivering reliability, value, and
                lasting partnerships to our clients and stakeholders.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div
                className="rounded-2xl p-10 grain-overlay"
                style={{ background: 'var(--color-surface-dark)' }}
              >
                <div
                  className="text-7xl font-bold mb-3"
                  style={{
                    color: 'var(--color-primary)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  30
                </div>
                <div className="text-2xl font-bold text-white mb-2">Years of Experience</div>
                <div className="text-[var(--color-text-muted-light)] text-sm">
                  Building trust and delivering excellence across East Africa since 1994.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Are + Mission */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-white)' }}
        aria-labelledby="who-we-are-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal direction="left">
              <SectionLabel>Our Identity</SectionLabel>
              <h2
                id="who-we-are-heading"
                className="text-3xl md:text-4xl font-bold mt-2 mb-6"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Who We Are
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                At YYUSSA, making a difference isn&apos;t just a vision — it&apos;s our mission.
                We are a trusted partner in transportation, commercial wholesale, and real estate,
                delivering excellence and reliability in every aspect of our business.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Our zero-accident operations and rigorous HSSEQ commitment reflect our belief that
                how we operate matters as much as what we deliver. Every shipment, every property,
                every partnership is handled with the highest standards of professionalism.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <SectionLabel>Direction</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-bold mt-2 mb-6"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Our Mission
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Commercial Wholesale',
                    desc: 'Seamless supply chain and lasting value addition in import and export operations.',
                  },
                  {
                    title: 'Cargo Transportation',
                    desc: 'Safe, timely, and efficient deliveries across East and Central Africa.',
                  },
                  {
                    title: 'Real Estate',
                    desc: 'Highest standards in property operations and rental management.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <CheckCircle2
                      size={22}
                      className="shrink-0 mt-0.5"
                      style={{ color: 'var(--color-primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-labelledby="quality-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <SectionLabel>Standards</SectionLabel>
              <h2
                id="quality-heading"
                className="text-3xl md:text-4xl font-bold mt-2"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Our Quality Policy
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {qualityPolicies.map((policy, index) => (
              <ScrollReveal key={policy.title} direction="up" delay={index * 0.1}>
                <div
                  className="rounded-xl border border-[var(--color-border)] p-7 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all duration-300"
                  style={{ background: 'var(--color-surface-white)' }}
                >
                  <div
                    className="w-10 h-1 rounded mb-4"
                    style={{ background: 'var(--color-primary)' }}
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-text-primary)' }}>
                    {policy.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {policy.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        className="py-20 md:py-28 grain-overlay"
        style={{ background: 'var(--color-surface-dark)' }}
        aria-labelledby="values-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <SectionLabel light>Our Foundation</SectionLabel>
              <h2
                id="values-heading"
                className="text-3xl md:text-4xl font-bold mt-2 text-white"
                style={{ letterSpacing: '-0.03em' }}
              >
                Core Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CORE_VALUES.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <ScrollReveal key={item.value} direction="up" delay={index * 0.06}>
                  <div
                    className="rounded-xl border border-[var(--color-border-dark)] p-5 text-center hover:border-[var(--color-primary)]/40 hover:bg-white/5 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    {Icon && (
                      <div className="mb-3 flex justify-center">
                        <Icon size={22} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                      </div>
                    )}
                    <p className="text-sm font-semibold text-[var(--color-text-light)] leading-tight">
                      {item.value}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
