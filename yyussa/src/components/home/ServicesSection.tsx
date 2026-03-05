'use client';
import Link from 'next/link';
import type { LucideProps } from 'lucide-react';
import { Building2, Globe2, Truck, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Building2,
  Globe2,
  Truck,
};

export default function ServicesSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: 'var(--color-surface-white)' }}
      aria-labelledby="services-heading"
    >
      <div className="container-xl">
        <ScrollReveal direction="up">
          <div className="mb-14 text-center">
            <SectionLabel>Our Services</SectionLabel>
            <h2
              id="services-heading"
              className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
            >
              Our Key <span className="serif-accent">Services</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-(--color-text-secondary)">
              Three pillars of excellence — real estate, wholesale trading, and logistics — serving
              Rwanda and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.slug} direction="up" delay={index * 0.12}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-(--color-border) bg-linear-to-b from-white to-(--color-surface-light) shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-(--color-primary) hover:shadow-[0_22px_60px_rgba(15,23,42,0.16)]"
                  style={{ background: 'var(--color-surface-white)' }}
                  aria-label={`Learn more about our ${service.title} services`}
                >
                  {/* Top accent */}
                  <div
                    className="h-1 w-full bg-linear-to-r from-(--color-primary) via-(--color-primary-light) to-(--color-primary) opacity-20 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-(--color-primary)"
                      style={{ background: 'var(--color-surface-light)' }}
                      aria-hidden="true"
                    >
                      {Icon && (
                        <Icon
                          size={26}
                          className="text-(--color-primary) transition-colors duration-300 group-hover:text-white"
                        />
                      )}
                    </div>

                    <h3
                      className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-(--color-primary)"
                    >
                      {service.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-(--color-text-secondary)">
                      {service.shortDescription}
                    </p>

                    <div
                      className="mt-6 inline-flex items-center gap-2 text-sm font-normal"
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

        <ScrollReveal direction="up" delay={0.4}>
                  <div className="mt-12 text-center">
            <Link
              href="/services"
                      className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-normal text-white transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              View All Services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
