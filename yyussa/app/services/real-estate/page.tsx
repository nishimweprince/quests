import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { PROPERTIES, CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Real Estate Services',
  description:
    'YYUSSA Real Estate offers 100+ rental properties across Rwanda, trusted by Vivo Energy, World Vision, MTN, Bank of Kigali, and more.',
};

const collaborators = [
  'Vivo Energy', 'World Vision', 'Bank of Kigali', 'Rubis Energy',
  'Mastercard Foundation', 'MTN', 'RRA', 'Oryx Energies',
];

export default function RealEstatePage() {
  return (
    <>
      <PageHeader
        title="Real Estate"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Real Estate' },
        ]}
      />

      {/* Overview */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-labelledby="re-overview-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <SectionLabel>YYUSSA Services</SectionLabel>
              <h2
                id="re-overview-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Real Estate
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5 text-base md:text-lg">
                With over 100 rental options nationwide, we ensure you find the perfect space
                wherever you are. Our portfolio spans commercial, residential, and institutional
                properties — designed for businesses that demand quality and reliability.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Our trusted expertise is backed by successful collaborations with industry leaders
                across energy, finance, health, and technology sectors — making YYUSSA the go-to
                real estate partner for major organizations in Rwanda.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  '100+ rental properties across Rwanda',
                  'Commercial, residential & institutional options',
                  'Trusted by multinationals and NGOs',
                  'Professional property management',
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
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-normal transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                Get in Touch Today
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div
                className="rounded-2xl p-10 grain-overlay"
                style={{ background: 'var(--color-surface-dark)' }}
              >
                <Building2 size={48} className="mb-6" style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                <div
                  className="text-6xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)', letterSpacing: '-0.04em' }}
                >
                  100+
                </div>
                <div className="text-xl font-bold text-white mb-2">Rental Properties</div>
                <div className="text-[var(--color-text-muted-light)] text-sm">
                  Available across Rwanda — from Kigali to regional centers.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Property Portfolio */}
      <section
        className="py-20 md:py-24"
        style={{ background: 'var(--color-surface-white)' }}
        aria-labelledby="portfolio-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <SectionLabel>Our Portfolio</SectionLabel>
              <h2
                id="portfolio-heading"
                className="text-3xl md:text-4xl font-bold mt-2"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Property Portfolio
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTIES.map((property, index) => (
              <ScrollReveal key={property.name} direction="up" delay={index * 0.1}>
                <div
                  className="rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'var(--color-surface-white)' }}
                >
                  {/* Placeholder image */}
                  <div
                    className="h-44 flex items-center justify-center"
                    style={{ background: 'var(--color-surface-dark)' }}
                    aria-hidden="true"
                  >
                    <Building2 size={40} className="opacity-20 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[var(--color-text-primary)] mb-1">{property.name}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{property.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section
        className="py-16 md:py-20 grain-overlay"
        style={{ background: 'var(--color-surface-dark)' }}
        aria-labelledby="collaborators-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <SectionLabel light>Our Clients</SectionLabel>
              <h2
                id="collaborators-heading"
                className="text-3xl font-bold mt-2 text-white"
                style={{ letterSpacing: '-0.03em' }}
              >
                Key Collaborators
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {collaborators.map((name, index) => (
              <ScrollReveal key={name} direction="up" delay={index * 0.07}>
                <div
                  className="rounded-xl border border-[var(--color-border-dark)] p-5 text-center"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <span className="text-sm font-normal text-[var(--color-text-muted-light)]">
                    {name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20"
        style={{ background: 'var(--color-surface-light)' }}
        aria-label="Contact call to action"
      >
        <div className="container-xl text-center">
          <ScrollReveal direction="up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
            >
              Get in touch today!
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
              Ready to find your perfect space? Our real estate team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-normal transition-all hover:scale-[1.02] active:scale-95"
              >
                Contact Us
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phones.realEstate[0].replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-normal border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                <Phone size={18} aria-hidden="true" />
                {CONTACT_INFO.phones.realEstate[0]}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
