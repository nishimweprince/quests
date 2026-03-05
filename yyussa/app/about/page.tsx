import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Heart, Star, TrendingUp } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about YYUSSA Group Ltd — a leading Rwandan conglomerate with 30+ years in real estate, logistics, and commercial wholesale.',
};

const milestones = [
  { year: '1994', event: 'Founded in Kigali by Yusuf Kalinganire' },
  { year: '2000s', event: 'Fleet expansion — grew to 100+ tank trailers' },
  { year: '2010s', event: 'Real estate division launched across Rwanda' },
  { year: '2020s', event: 'Expanded to 300+ tank trailers, 50+ flatbeds' },
  { year: '2024', event: 'Acquired Kigali Heights complex for $32M' },
];

const values = [
  {
    Icon: Shield,
    name: 'Reliability',
    desc: 'Consistent delivery across every division, every project.',
  },
  {
    Icon: Heart,
    name: 'Integrity',
    desc: 'Transparent partnerships built on mutual trust.',
  },
  {
    Icon: Star,
    name: 'Excellence',
    desc: 'Thirty years of raising the standard in East Africa.',
  },
  {
    Icon: TrendingUp,
    name: 'Growth',
    desc: 'Sustainable expansion that benefits communities and partners.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our Corporate Story"
        subtitle="Three decades of building East Africa's most integrated enterprise group."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* ── Company Story ── */}
      <section
        className="py-24 md:py-32"
        style={{ background: 'var(--bg-light)' }}
        aria-labelledby="story-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr] lg:gap-20">
            {/* Editorial text */}
            <ScrollReveal direction="up">
              <div className="max-w-2xl">
                <span className="section-label">Since 1994</span>
                <h2
                  id="story-heading"
                  className="mt-3 mb-8 text-3xl md:text-4xl"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    letterSpacing: '-0.025em',
                    lineHeight: 1.15,
                    color: 'var(--color-text-dark)',
                  }}
                >
                  From a Single Operation<br />to a Regional Conglomerate
                </h2>

                <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                  <p>
                    Founded in 1994 by Yusuf Kalinganire, YYUSSA Group began as a logistics
                    operation in Kigali — a single vision to move essential goods across a region
                    hungry for reliable supply chains. From that foundation, something enduring
                    was built.
                  </p>
                  <p>
                    Over three decades, YYUSSA evolved into a fully integrated enterprise group,
                    spanning cargo transportation, commercial wholesale, and real estate. The fleet
                    grew from a handful of vehicles to 300+ tank trailers and 50+ flatbed units,
                    serving East and Central Africa with precision and zero-accident commitment.
                  </p>

                  {/* Pull quote */}
                  <blockquote
                    className="my-10 border-l-4 py-2 pl-7"
                    style={{ borderColor: 'var(--color-accent)' }}
                  >
                    <p
                      className="text-xl italic leading-relaxed"
                      style={{
                        fontFamily: "'Libre Baskerville', Georgia, serif",
                        color: 'var(--color-text-dark)',
                      }}
                    >
                      &ldquo;Bringing the difference isn&apos;t just a dream.
                      It is YYUSSA&apos;s mission.&rdquo;
                    </p>
                  </blockquote>

                  <p>
                    The expansion into real estate brought over 100 rental properties nationwide,
                    trusted by Vivo Energy, World Vision, Bank of Kigali, MTN, and a growing list
                    of multinationals. In 2024, the $32 million acquisition of Kigali Heights
                    cemented YYUSSA&apos;s position as one of Rwanda&apos;s most significant
                    corporate landholders.
                  </p>
                  <p>
                    Today, YYUSSA Group serves governments, international organizations, and
                    communities across East and Central Africa — still driven by the same conviction
                    that founded it thirty years ago.
                  </p>
                </div>

                <Link
                  href="/services"
                  className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-(--color-accent) transition-colors hover:text-(--color-accent-dark)"
                >
                  Explore Our Divisions
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="sticky top-28">
                <p
                  className="mb-7 text-[11px] uppercase tracking-[0.16em]"
                  style={{ color: 'var(--color-grey-500)' }}
                >
                  Key Milestones
                </p>
                <ol className="relative" aria-label="Company milestones">
                  {/* Vertical line */}
                  <div
                    className="absolute left-[5px] top-2 bottom-2 w-px"
                    style={{ background: 'var(--color-secondary-dark)' }}
                    aria-hidden="true"
                  />
                  {milestones.map((m, i) => (
                    <li key={m.year} className={`relative flex gap-5 ${i < milestones.length - 1 ? 'pb-8' : ''}`}>
                      {/* Dot */}
                      <div
                        className="relative mt-1.5 h-2.5 w-2.5 shrink-0 border"
                        style={{
                          background: i === milestones.length - 1 ? 'var(--color-accent)' : 'var(--bg-light)',
                          borderColor: i === milestones.length - 1 ? 'var(--color-accent)' : 'var(--color-secondary-dark)',
                        }}
                        aria-hidden="true"
                      />
                      <div>
                        <div
                          className="mb-1 text-[11px] uppercase tracking-[0.14em] font-medium"
                          style={{ color: 'var(--color-accent)' }}
                        >
                          {m.year}
                        </div>
                        <p className="text-sm leading-snug" style={{ color: 'var(--color-grey-600)' }}>
                          {m.event}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section
        className="py-24 md:py-28 grain-overlay"
        style={{ background: 'var(--bg-dark)' }}
        aria-labelledby="mv-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <span className="section-label" style={{ color: 'var(--color-accent)' }}>
              Who We Are
            </span>
            <h2
              id="mv-heading"
              className="mt-3 mb-14 text-3xl text-white! md:text-4xl"
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                letterSpacing: '-0.025em',
              }}
            >
              Mission &amp; Vision
            </h2>
          </ScrollReveal>

          <menu className="grid grid-cols-1 md:grid-cols-2 gap-4!"
            style={{ background: 'var(--color-grey-800)' }}>
            {[
              {
                label: 'Our Mission',
                text: 'We are committed to being a reliable business partner in logistics, commercial wholesale and real estate — delivering excellence and reliability at every step, with zero-accident operations and rigorous HSSEQ standards.',
              },
              {
                label: 'Our Vision',
                text: 'To be East Africa\'s most trusted and integrated enterprise group, enabling sustainable growth through disciplined execution, long-term partnerships, and a relentless commitment to quality across every division.',
              },
            ].map((card, i) => (
              <ScrollReveal key={card.label} direction="up" delay={i * 0.15}>
                <div
                  className="relative flex flex-col justify-between p-10 md:p-12"
                >
                  {/* Brass top accent */}
                  <div
                    className="absolute left-0 top-0 h-[3px] w-20"
                    style={{ background: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="mb-4 text-[11px] uppercase tracking-[0.18em]"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {card.label}
                    </p>
                    <p
                      className="text-lg italic leading-relaxed text-white"
                      style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                    >
                      &ldquo;{card.text}&rdquo;
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </menu>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section
        className="py-24 md:py-28"
        style={{ background: 'var(--bg-light)' }}
        aria-labelledby="values-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-label">Our Foundation</span>
                <h2
                  id="values-heading"
                  className="mt-3 text-3xl md:text-4xl"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    letterSpacing: '-0.025em',
                    color: 'var(--color-text-dark)',
                  }}
                >
                  Core Values
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-px border [grid-auto-rows:1fr] sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--color-secondary-dark)' }}>
            {values.map(({ Icon, name, desc }, i) => (
              <ScrollReveal key={name} direction="up" delay={i * 0.1}>
                <div
                  className="group flex h-full flex-col gap-5 p-8 transition-colors duration-200 hover:bg-(--bg-white) md:p-10"
                  style={{ background: 'var(--bg-light)' }}
                >
                  <Icon
                    size={22}
                    style={{ color: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="mb-2 text-lg"
                      style={{
                        fontFamily: "'Libre Baskerville', Georgia, serif",
                        color: 'var(--color-text-dark)',
                      }}
                    >
                      {name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Band ── */}
      <section
        className="py-20 grain-overlay"
        style={{ background: 'var(--bg-dark)' }}
        aria-label="Company statistics"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            style={{ borderColor: 'var(--color-grey-800)' }}>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-12"
                style={{ borderColor: 'var(--color-grey-800)' }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  light
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
