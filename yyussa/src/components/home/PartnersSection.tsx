import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { PARTNERS } from '@/lib/constants';

export default function PartnersSection() {
  return (
    <section
      className="grain-overlay py-20 md:py-24"
      style={{ background: 'var(--color-surface-dark)' }}
      aria-labelledby="partners-heading"
    >
      <div className="container-xl">
        <ScrollReveal direction="up">
          <div className="mb-12 text-center">
            <SectionLabel light>Our Partners</SectionLabel>
            <h2
              id="partners-heading"
              className="text-3xl md:text-4xl font-bold mt-2 text-white"
              style={{ letterSpacing: '-0.03em' }}
            >
              Trusted by <span className="serif-accent" style={{ color: 'var(--color-primary-light)' }}>Industry Leaders</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-(--color-text-muted-light)">
              We are proud to serve and partner with some of East Africa&apos;s most respected
              organizations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PARTNERS.map((partner, index) => (
            <ScrollReveal key={partner} direction="up" delay={index * 0.05}>
              <div
                className="flex h-full items-center justify-center rounded-xl border border-(--color-border-dark) bg-(--color-surface-card-dark) px-4 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-primary)/60 hover:bg-black/30"
                role="img"
                aria-label={partner}
              >
                <span className="text-xs font-semibold leading-tight text-(--color-text-light)">
                  {partner}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
