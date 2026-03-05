import type { Metadata } from 'next';
import Image from 'next/image';
import { User } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { TEAM } from '@/lib/constants';

/** Map team member full name to image path in public/team/ */
const TEAM_IMAGES: Record<string, string> = {
  'Kalinganire Yusuf': '/team/kalinganire-yusuf.jpg',
  'Ugirase Zabibu': '/team/ugirase-zabibu.jpg',
  'Kayumba Godfrey': '/team/kayumba-godfrey.jpg',
  'Rwagarinde Is-Haq': '/team/rwanganire-is-haq.jpg',
  'Munyandekwe Trésor': '/team/munyandekwe-tresor.jpg',
  'Kalinganire Yousra': '/team/kalinganire-yousra.jpg',
  'Kalinganire Nouriat': '/team/kalinganire-nouriat.jpg',
  'Hitimana Monique': '/team/hitimana-monique.jpg',
  'Kayitesi Liliane': '/team/kayitesi-liliane.jpg',
  'Bizimana Hassan': '/team/bizimana-hassan.jpg',
  'Musabyemariya Yvette': '/team/musabyemariya-yvette.jpg',
  'Kagamba Fabrice': '/team/kabagamba-fabrice.jpg',
  'Abdul Djabar': '/team/abdoul-jabar.jpg',
  'Kayumba Kayitesi Flavia': '/team/kayumba-kayitesi-flavia.jpg',
  'Iradukunda Aliance': '/team/iradukunda-alliance.jpg',
};

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the leadership team behind YYUSSA Group Ltd — management, finance, and operations across East Africa.',
};

type DeptKey = keyof typeof TEAM;

const deptMeta: Record<DeptKey, { label: string; desc: string }> = {
  Management: {
    label: 'Senior Leadership',
    desc: "Guiding YYUSSA's vision, strategy, and long-term growth across all business units.",
  },
  Finance: {
    label: 'Finance & Administration',
    desc: 'Ensuring financial integrity, property administration, and operational efficiency.',
  },
  Operations: {
    label: 'Operations',
    desc: 'Driving day-to-day execution in transport, procurement, and health & safety.',
  },
};

// The founder is always displayed first in Management
const founder = { name: 'Kalinganire Yusuf', title: 'Founder & Chairman' };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Leadership"
        subtitle="The people driving YYUSSA Group's vision forward across East Africa."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Team' }]}
      />

      {/* ── Founder Feature ── */}
      <section
        className="py-24 grain-overlay"
        style={{ background: 'var(--bg-dark)' }}
        aria-label="Founder feature"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <ScrollReveal direction="left">
              {/* Founder avatar — large */}
              <div
                className="relative mx-auto flex max-w-xs flex-col items-center lg:mx-0"
              >
                <div
                  className="relative flex aspect-square w-full max-w-[260px] items-center justify-center overflow-hidden"
                  style={{ background: 'var(--color-grey-800)' }}
                >
                  <Image
                    src={TEAM_IMAGES[founder.name] ?? '/team/kalinganire-yusuf.jpg'}
                    alt=""
                    width={260}
                    height={260}
                    className="h-full w-full object-cover object-top"
                    sizes="260px"
                    priority
                  />
                  {/* Brass corner accent */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-16"
                    style={{ background: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-5 text-center lg:text-left">
                  <h2
                    className="text-xl text-white!"
                    style={{ fontFamily: "'Libre Baskerville', Georgia, serif", letterSpacing: '-0.02em' }}
                  >
                    {founder.name}
                  </h2>
                  <p
                    className="mt-1 text-sm uppercase tracking-[0.12em]"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {founder.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex h-full flex-col justify-center">
                <span className="section-label" style={{ color: 'var(--color-accent)' }}>
                  Founding Vision
                </span>
                <h3
                  className="mt-3 mb-6 text-2xl text-white! md:text-3xl"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif", letterSpacing: '-0.02em' }}
                >
                  Building an Enterprise<br />That Outlasts Its Founder
                </h3>
                <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--color-grey-500)' }}>
                  In 1994, Yusuf Kalinganire founded YYUSSA Group with a singular conviction:
                  that Rwanda and East Africa needed a reliable, homegrown enterprise to power
                  its supply chains, house its institutions, and move its goods.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-grey-500)' }}>
                  Three decades later, that conviction has become a 300-trailer fleet, 100+
                  properties, and a $32 million landmark acquisition — all anchored in the
                  same commitment to excellence that founded it.
                </p>
                {/* Pull quote */}
                <blockquote
                  className="mt-8 border-l-2 pl-5"
                  style={{ borderColor: 'var(--color-accent)' }}
                >
                  <p
                    className="italic text-white/70"
                    style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                  >
                    &ldquo;Bringing the difference isn&apos;t just a dream.
                    It is YYUSSA&apos;s mission.&rdquo;
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Department Sections ── */}
      {(Object.entries(TEAM) as [DeptKey, typeof TEAM[DeptKey]][]).map(([dept, members], deptIdx) => {
        const meta = deptMeta[dept];
        const isLight = deptIdx % 2 === 0;
        return (
          <section
            key={dept}
            className="py-24 md:py-28"
            style={{ background: isLight ? 'var(--bg-grey-100)' : 'var(--bg-white)' }}
            aria-labelledby={`dept-${dept.toLowerCase()}`}
          >
            <div className="container-xl">
              <ScrollReveal direction="up">
                <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span className="section-label">{meta.label}</span>
                    <h2
                      id={`dept-${dept.toLowerCase()}`}
                      className="mt-2 text-2xl md:text-3xl"
                      style={{
                        fontFamily: "'Libre Baskerville', Georgia, serif",
                        letterSpacing: '-0.02em',
                        color: 'var(--color-text-dark)',
                      }}
                    >
                      {dept}
                    </h2>
                  </div>
                  <p
                    className="max-w-md text-sm leading-relaxed md:text-right"
                    style={{ color: 'var(--color-grey-600)' }}
                  >
                    {meta.desc}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid auto-rows-[1fr] grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {members.map((member, i) => (
                  <ScrollReveal key={member.name} direction="up" delay={i * 0.06}>
                    <div
                      className="group flex h-full cursor-pointer flex-col items-center rounded-lg p-7 text-center transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-(--bg-light) hover:shadow-lg"
                      style={{ background: isLight ? 'var(--bg-grey-100)' : 'var(--bg-white)' }}
                    >
                      {/* Avatar */}
                      <div
                        className="relative mb-4 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover:ring-2 group-hover:ring-(--color-accent)/30"
                        style={{
                          background: 'var(--color-grey-100)',
                        }}
                      >
                        {TEAM_IMAGES[member.name] ? (
                          <Image
                            src={TEAM_IMAGES[member.name]}
                            alt=""
                            width={64}
                            height={64}
                            className="h-full w-full object-cover object-top"
                            sizes="64px"
                          />
                        ) : (
                          <User
                            size={26}
                            style={{ color: 'var(--color-grey-400)' }}
                            aria-hidden="true"
                          />
                        )}
                        {/* Brass bottom accent on hover */}
                        <div
                          className="absolute -bottom-1.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                          style={{ background: 'var(--color-accent)' }}
                          aria-hidden="true"
                        />
                      </div>
                      <h3
                        className="min-h-10 text-sm font-semibold leading-tight"
                        style={{
                          fontFamily: "'Libre Baskerville', Georgia, serif",
                          color: 'var(--color-text-dark)',
                        }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="mt-1.5 text-xs leading-tight uppercase tracking-[0.08em]"
                        style={{ color: 'var(--color-grey-500)' }}
                      >
                        {member.title}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
