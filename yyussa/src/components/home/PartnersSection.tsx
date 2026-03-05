import ScrollReveal from '@/components/ui/ScrollReveal';
import { Image as ImageIcon } from 'lucide-react';
import { PARTNERS } from '@/lib/constants';

export default function PartnersSection() {
  return (
    <section
      className="py-24 md:py-28"
      style={{ background: 'var(--bg-light)' }}
      aria-labelledby="partners-heading"
    >
      <div className="container-xl">
        {/* Top rule */}
        <div className="mb-14 flex items-center gap-6">
          <div className="h-px flex-1" style={{ background: 'var(--color-secondary-dark)' }} aria-hidden="true" />
          <ScrollReveal direction="none">
            <div className="text-center">
              <span className="section-label">Our Partners</span>
              <h2
                id="partners-heading"
                className="mt-2 text-2xl md:text-3xl"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-dark)',
                }}
              >
                Trusted by Industry Leaders
              </h2>
            </div>
          </ScrollReveal>
          <div className="h-px flex-1" style={{ background: 'var(--color-secondary-dark)' }} aria-hidden="true" />
        </div>

        {/* Partner logo placeholders */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
          {PARTNERS.map((partner, index) => (
            <ScrollReveal key={partner} direction="up" delay={index * 0.04}>
              <div
                className="group flex aspect-[3/2] items-center justify-center border-r border-b p-4 transition-colors duration-200"
                style={{
                  borderColor: 'var(--color-secondary-dark)',
                  background: 'var(--bg-white)',
                }}
                role="img"
                aria-label={`Logo placeholder for ${partner}`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="flex h-10 w-10 items-center justify-center border transition-colors duration-200 group-hover:border-(--color-accent)"
                    style={{ borderColor: 'var(--color-secondary-dark)' }}
                    aria-hidden="true"
                  >
                    <ImageIcon size={16} style={{ color: 'var(--color-grey-500)' }} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.1em]" style={{ color: 'var(--color-grey-400)' }}>
                    Logo
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal direction="up" delay={0.3}>
          <p
            className="mt-10 text-center text-xs uppercase tracking-[0.14em]"
            style={{ color: 'var(--color-grey-400)' }}
          >
            And many more trusted organizations across East Africa
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
