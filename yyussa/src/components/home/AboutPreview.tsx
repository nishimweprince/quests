import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

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
      className="py-20 md:py-28"
      style={{ background: 'var(--color-surface-light)' }}
      aria-labelledby="about-heading"
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <ScrollReveal direction="left">
              <SectionLabel>About YYUSSA</SectionLabel>
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6"
                style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
              >
                Who We <span className="serif-accent">Are</span>
              </h2>
              <p className="mb-6 text-base leading-relaxed text-(--color-text-secondary) md:text-lg">
                Bringing the difference isn&apos;t just a dream. It is YYUSSA&apos;s mission. We are
                committed to being a reliable business partner in logistics, commercial wholesale and
                real estates — delivering excellence at every step.
              </p>
              <p className="mb-8 text-base leading-relaxed text-(--color-text-secondary)">
                Since 1994, YYUSSA Group has grown to become one of Rwanda&apos;s most trusted
                conglomerates, serving governments, multinationals, and communities across East
                and Central Africa.
              </p>

              <div className="mb-10 space-y-5">
                {highlights.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle2
                      size={22}
                      className="shrink-0 mt-0.5"
                      style={{ color: 'var(--color-primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-(--color-text-secondary)">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-normal group"
                style={{ color: 'var(--color-primary)' }}
              >
                Read More About Us
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </ScrollReveal>
          </div>

          {/* Visual — decorative cards */}
          <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
              {/* Main visual card */}
              <div
                className="flex aspect-4/3 items-end overflow-hidden rounded-3xl border border-(--color-border) bg-linear-to-br from-(--color-surface-dark) via-[#120a08] to-black shadow-[0_26px_65px_rgba(15,23,42,0.55)]"
                style={{
                  background: 'linear-gradient(135deg, var(--color-surface-dark) 0%, #120a08 100%)',
                }}
              >
                <div className="p-8">
                  <div
                    className="mb-1 text-6xl font-bold"
                    style={{
                      color: 'var(--color-primary)',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    30+
                  </div>
                  <div className="text-xl font-semibold text-white">Years of Excellence</div>
                  <div className="mt-1 text-sm text-(--color-text-muted-light)">
                    Serving East Africa since 1994
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -right-4 -top-4 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-(--color-border-dark) bg-(--color-primary) shadow-lg"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold text-white">100+</span>
                <span className="px-1 text-center text-xs leading-tight text-white/80">
                  Properties
                </span>
              </div>

              {/* Bottom card */}
              <div
                className="absolute -bottom-4 -left-4 rounded-xl border border-(--color-border) bg-background p-4 shadow-lg"
                aria-hidden="true"
              >
                <div className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                  300+
                </div>
                <div className="text-xs font-medium text-(--color-text-secondary)">
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
