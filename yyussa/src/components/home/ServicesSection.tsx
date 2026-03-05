import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SERVICES } from '@/lib/constants';

export default function ServicesSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-dark)' }}
      aria-labelledby="services-heading"
    >
      <div className="container-xl">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label" style={{ color: 'var(--color-accent)' }}>
                Our Services
              </span>
              <h2
                id="services-heading"
                className="mt-3 text-3xl text-white! md:text-5xl"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  letterSpacing: '-0.025em',
                  lineHeight: 1.12,
                }}
              >
                Our Key Services
              </h2>
            </div>
            <p
              className="max-w-sm text-sm leading-relaxed md:text-right"
              style={{ color: 'var(--color-grey-300)' }}
            >
              Three pillars of excellence — real estate, wholesale trading, and logistics — serving
              Rwanda and beyond.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards */}
        <div
          className="grid grid-cols-1 gap-px md:grid-cols-3"
          style={{ background: 'var(--color-grey-700)', border: '1px solid var(--color-grey-700)' }}
        >
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.slug} direction="up" delay={index * 0.12}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden p-8 transition-colors duration-300 md:p-10"
                style={{ background: 'var(--color-grey-800)' }}
                aria-label={`Learn about our ${service.title} services`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(145deg, color-mix(in srgb, var(--color-primary) 22%, transparent) 0%, transparent 55%)',
                  }}
                  aria-hidden="true"
                />
                {/* Brass top accent line */}
                <div
                  className="absolute left-0 top-0 h-[3px] w-full transition-all duration-300"
                  style={{ background: 'var(--color-grey-700)' }}
                  aria-hidden="true"
                />
                <div
                  className="absolute left-0 top-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: 'var(--color-accent)' }}
                  aria-hidden="true"
                />

                {/* Division number */}
                <div
                  className="mb-8 text-sm font-medium uppercase tracking-[0.14em]"
                  style={{ color: 'var(--color-grey-600)' }}
                >
                  0{index + 1}
                </div>

                {/* Service name */}
                <h3
                  className="mb-4 text-xl text-white! transition-colors group-hover:text-(--color-text-light)"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    letterSpacing: '-0.02em',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="flex-1 text-sm leading-relaxed"
                  style={{ color: 'var(--color-grey-300)' }}
                >
                  {service.shortDescription}
                </p>

                {/* CTA */}
                <div
                  className="mt-8 inline-flex items-center gap-2 text-sm transition-colors group-hover:gap-3"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Read More
                  <ArrowRight size={15} className="transition-all group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.35}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-(--color-grey-300) transition-colors hover:text-(--color-primary)"
            >
              View All Services
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
