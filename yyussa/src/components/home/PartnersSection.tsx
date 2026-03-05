import ScrollReveal from '@/components/ui/ScrollReveal';
import { PARTNERS } from '@/lib/constants';
import Image from 'next/image';

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

        {/* Partner logos from public/partners */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6">
          {PARTNERS.map((partner, index) => (
            <ScrollReveal key={partner.name} direction="up" delay={index * 0.04}>
              <div
                className="group flex aspect-3/2 cursor-pointer items-center justify-center border-r border-b p-4 transition-[opacity,background-color] duration-200 hover:opacity-95"
                style={{
                  borderColor: 'var(--color-secondary-dark)',
                  background: 'var(--bg-white)',
                }}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={60}
                  className="max-h-12 w-auto object-contain transition-transform duration-200 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 140px"
                />
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
