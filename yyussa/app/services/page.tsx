import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import PartnersSection from '@/components/home/PartnersSection';
import { SERVICES, STATS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Explore YYUSSA Group's three core divisions: Real Estate, Import & Export, and Logistics across East Africa.",
};

// Decorative pattern backgrounds for each division card
const divisionThemes = [
  {
    slug: 'real-estate',
    number: '01',
    // Architectural / geometric pattern
    pattern: 'repeating-linear-gradient(45deg, rgba(184,150,90,0.04) 0px, rgba(184,150,90,0.04) 1px, transparent 1px, transparent 50%)',
    patternSize: '20px 20px',
  },
  {
    slug: 'import-export',
    number: '02',
    // Grid dots pattern
    pattern: 'radial-gradient(circle, rgba(184,150,90,0.08) 1px, transparent 1px)',
    patternSize: '24px 24px',
  },
  {
    slug: 'logistics',
    number: '03',
    // Horizontal lines pattern
    pattern: 'repeating-linear-gradient(0deg, rgba(184,150,90,0.04) 0px, rgba(184,150,90,0.04) 1px, transparent 1px, transparent 32px)',
    patternSize: 'auto',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Divisions"
        subtitle="Three integrated pillars driving enterprise growth across East Africa."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* ── Division Cards ── */}
      <section
        className="py-24 md:py-32"
        style={{ background: 'var(--bg-dark)' }}
        aria-labelledby="divisions-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <span className="section-label" style={{ color: 'var(--color-accent)' }}>
              YYUSSA Group
            </span>
            <h2
              id="divisions-heading"
              className="mt-3 mb-16 text-3xl text-white! md:text-5xl"
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                letterSpacing: '-0.025em',
              }}
            >
              Three Decades,<br />Three Pillars
            </h2>
          </ScrollReveal>

          <div className="mb-8 max-w-2xl">
            <p className="text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-grey-300)' }}>
              Explore YYUSSA Group&apos;s three divisions. Each service line is integrated into one
              execution model: sourcing, movement, and long-term asset development.
            </p>
          </div>

          <div className="space-y-4">
            {SERVICES.map((service, index) => {
              const theme = divisionThemes.find((t) => t.slug === service.slug)!;
              return (
                <ScrollReveal key={service.slug} direction="up" delay={index * 0.1}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden border p-10 transition-colors duration-300 hover:bg-(--color-grey-700) md:p-14"
                    style={{
                      background: 'var(--color-grey-800)',
                      borderColor: 'var(--color-grey-700)',
                    }}
                    aria-label={`${service.title} — learn more`}
                  >
                    {/* Decorative pattern fill */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-100"
                      style={{
                        backgroundImage: theme.pattern,
                        backgroundSize: theme.patternSize,
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          'linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 18%, transparent) 0%, transparent 64%)',
                      }}
                      aria-hidden="true"
                    />

                    {/* Brass left accent */}
                    <div
                      className="absolute left-0 top-0 w-[3px] h-0 transition-all duration-500 group-hover:h-full"
                      style={{ background: 'var(--color-accent)' }}
                      aria-hidden="true"
                    />

                    {/* Top row: number + arrow */}
                    <div className="relative flex items-start justify-between">
                      <span
                        className="text-[4.5rem] font-bold leading-none"
                        style={{
                          fontFamily: "'Libre Baskerville', Georgia, serif",
                          color: 'transparent',
                          WebkitTextStroke: '1px var(--color-grey-700)',
                          transition: 'color 0.3s',
                        }}
                      >
                        {theme.number}
                      </span>
                      <div
                        className="flex h-12 w-12 items-center justify-center border transition-colors duration-300 group-hover:border-[var(--color-accent)]"
                        style={{ borderColor: 'var(--color-grey-700)' }}
                      >
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                          style={{ color: 'var(--color-grey-300)' }}
                        />
                      </div>
                    </div>

                    {/* Bottom row: title + description */}
                    <div className="relative mt-auto">
                      <div
                        className="mb-3 h-px w-12"
                        style={{ background: 'var(--color-accent)', opacity: 0.4 }}
                        aria-hidden="true"
                      />
                      <h3
                        className="mb-4 text-2xl text-white! md:text-3xl"
                        style={{
                          fontFamily: "'Libre Baskerville', Georgia, serif",
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="max-w-xl text-sm leading-relaxed md:text-base"
                        style={{ color: 'var(--color-grey-300)' }}
                      >
                        {service.description}
                      </p>
                      <span
                        className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300"
                        style={{ color: 'var(--color-grey-500)' }}
                      >
                        Learn More
                        <ArrowRight size={13} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        className="py-20"
        style={{ background: 'var(--bg-light)' }}
        aria-label="Company statistics"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            style={{ borderColor: 'var(--color-secondary-dark)' }}>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-14"
                style={{ borderColor: 'var(--color-secondary-dark)' }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
