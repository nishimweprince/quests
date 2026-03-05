'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const highlights = [
  {
    title: 'Solutions that Spark Excellence',
    desc: 'Delivering high-impact results across real estate, logistics, and commercial wholesale.',
  },
  {
    title: 'Where Vision Meets Action',
    desc: 'Thirty years of turning strategic vision into tangible value for our clients and partners.',
  },
];

export default function AboutPreview() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-light)' }}
      aria-labelledby="about-heading"
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
          {/* Text column */}
          <ScrollReveal direction="left">
            <div>
              <span className="section-label">About YYUSSA</span>
              <h2
                id="about-heading"
                className="mt-3 mb-6 text-3xl md:text-5xl"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  letterSpacing: '-0.025em',
                  lineHeight: 1.12,
                  color: 'var(--color-text-dark)',
                }}
              >
                Who We Are
              </h2>

              <p className="mb-5 text-base leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                Bringing the difference isn&apos;t just a dream. It is YYUSSA&apos;s mission. We are
                committed to being a reliable business partner in logistics, commercial wholesale and
                real estate — delivering excellence at every step.
              </p>
              <p className="mb-10 text-base leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                Since 1994, YYUSSA Group has grown to become one of Rwanda&apos;s most trusted
                conglomerates, serving governments, multinationals, and communities across East
                and Central Africa.
              </p>

              {/* Feature callouts */}
              <div className="mb-10 space-y-6">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-5 border-l-2 pl-5"
                    style={{ borderColor: 'var(--color-grey-800)' }}
                  >
                    <div>
                      <h3
                        className="mb-1 text-sm font-semibold uppercase tracking-[0.08em]"
                        style={{ color: 'var(--color-text-dark)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] transition-colors"
                style={{ color: 'var(--color-accent)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              >
                Read More About Us
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Visual column */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              {/* Main dark card */}
              <div
                className="relative overflow-hidden p-10 grain-overlay"
                style={{
                  background: 'var(--color-grey-800)',
                  aspectRatio: '4/5',
                }}
              >
                {/* Brass radial glow inside */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 opacity-20"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(184,150,90,0.8) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                  aria-hidden="true"
                />

                {/* Content at bottom */}
                <div className="absolute bottom-16 left-4 right-0 p-8">
                  <div
                    className="mb-1 leading-none"
                    style={{
                      fontFamily: "'Libre Baskerville', Georgia, serif",
                      fontSize: '3.5rem',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                      color: 'var(--color-accent)',
                    }}
                  >
                    30+
                  </div>
                  <div className="text-lg font-medium text-white">Years of Excellence</div>
                  <div className="mt-1 text-sm" style={{ color: 'var(--color-grey-500)' }}>
                    Serving East Africa since 1994
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="absolute right-0 top-0 h-full w-px opacity-30"
                  style={{ background: 'linear-gradient(180deg, transparent 0%, var(--color-accent) 50%, transparent 100%)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating stat badges */}
              <div
                className="absolute -right-5 top-8 border p-4 shadow-xl"
                style={{
                  background: 'var(--bg-white)',
                  borderColor: 'var(--color-accent)',
                }}
                aria-hidden="true"
              >
                <div
                  className="text-2xl font-bold leading-none"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    color: 'var(--color-accent)',
                  }}
                >
                  100+
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.1em]" style={{ color: 'var(--color-grey-600)' }}>
                  Properties
                </div>
              </div>

              <div
                className="absolute -bottom-5 -left-5 border p-4 shadow-xl"
                style={{
                  background: 'var(--bg-white)',
                  borderColor: 'var(--color-accent)',
                }}
                aria-hidden="true"
              >
                <div
                  className="text-2xl font-bold leading-none text-white"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: 'var(--color-accent)' }}
                >
                  300+
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.1em]" style={{ color: 'var(--color-grey-500)' }}>
                  Tank Trailers
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
