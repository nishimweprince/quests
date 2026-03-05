import type { Metadata } from 'next';
import type { LucideProps } from 'lucide-react';
import Link from 'next/link';
import { Building2, Globe2, Truck, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import PartnersSection from '@/components/home/PartnersSection';
import { SERVICES, STATS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore YYUSSA Group\'s three core services: Real Estate, Import & Export, and Logistics across East Africa.',
};

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Building2, Globe2, Truck,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Services grid */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-labelledby="services-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <SectionLabel>YYUSSA Services</SectionLabel>
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Our Key Services
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[var(--color-text-secondary)]">
                Three decades of expertise across three critical sectors — all operating under one
                trusted name.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <ScrollReveal key={service.slug} direction="up" delay={index * 0.12}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                    style={{ background: 'var(--color-surface-white)' }}
                  >
                    {/* Image placeholder */}
                    <div
                      className="h-44 flex items-center justify-center"
                      style={{ background: 'var(--color-surface-dark)' }}
                      aria-hidden="true"
                    >
                      {Icon && (
                        <Icon size={48} className="opacity-30 text-white group-hover:opacity-60 transition-opacity" />
                      )}
                    </div>

                    <div className="p-8">
                      {Icon && (
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 -mt-12 relative z-10 border-4 border-[var(--color-surface-white)] group-hover:bg-[var(--color-primary)] transition-colors"
                          style={{ background: 'var(--color-surface-light)' }}
                        >
                          <Icon
                            size={22}
                            className="text-[var(--color-primary)] group-hover:text-white transition-colors"
                          />
                        </div>
                      )}

                      <h3
                        className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div
                        className="inline-flex items-center gap-2 text-sm font-normal"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Read More
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 md:py-20 grain-overlay"
        style={{ background: 'var(--color-surface-darker)' }}
        aria-label="Company statistics"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center ${
                  index < STATS.length - 1
                    ? 'sm:border-r sm:border-[var(--color-border-dark)]'
                    : ''
                }`}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <PartnersSection />
    </>
  );
}
