import Link from 'next/link';
import { ArrowLeft, ArrowRight, Compass, FileSearch, Home, Mail, ShieldAlert } from 'lucide-react';

const recoveryLinks = [
  {
    title: 'Return Home',
    href: '/',
    description: 'Go back to the main YYUSSA overview and start from the company homepage.',
    Icon: Home,
  },
  {
    title: 'Browse Services',
    href: '/services',
    description: 'Explore real estate, import and export, and logistics divisions.',
    Icon: Compass,
  },
  {
    title: 'Read Insights',
    href: '/blog',
    description: 'View company articles, updates, and longer-form editorial content.',
    Icon: FileSearch,
  },
  {
    title: 'Contact YYUSSA',
    href: '/contact',
    description: 'Reach the team directly if the page you expected should already be available.',
    Icon: Mail,
  },
];

export default function NotFound() {
  return (
    <section
      className="grain-overlay relative overflow-hidden"
      style={{ background: 'var(--bg-dark)' }}
      aria-labelledby="not-found-title"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 18% 22%, rgba(82,104,118,0.34), transparent 30%), radial-gradient(circle at 82% 14%, rgba(247,73,35,0.12), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent 35%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="container-xl relative z-10 flex min-h-[calc(100vh-74px)] items-center py-28 md:min-h-[calc(100vh-82px)] md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.95fr)] lg:gap-14">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.2em]"
              style={{ color: 'var(--color-accent)' }}
            >
              Error 404
            </p>

            <div className="mt-5 mb-6 overflow-hidden">
              <div
                className="leading-none select-none"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  fontSize: 'clamp(5.5rem, 20vw, 13rem)',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(188,199,210,0.3)',
                  textShadow: '0 0 40px rgba(82,104,118,0.18)',
                }}
              >
                404
              </div>
            </div>

            <h1
              id="not-found-title"
              className="max-w-2xl text-4xl text-white! md:text-5xl"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}
            >
              This page is off route, unpublished, or no longer in the portfolio.
            </h1>

            <p
              className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-grey-300)' }}
            >
              The link may be broken, the content may have moved, or the destination may not be
              available yet. Use one of the guided routes below to return to an active section of
              the YYUSSA website.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border px-6 py-4 text-[11px] uppercase tracking-[0.16em] transition-colors"
                style={{
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                }}
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border px-6 py-4 text-[11px] uppercase tracking-[0.16em] transition-colors"
                style={{
                  borderColor: 'var(--color-grey-700)',
                  color: 'var(--color-grey-300)',
                }}
              >
                Explore Services
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <aside
              className="border p-7"
              style={{
                background: 'rgba(27,39,53,0.86)',
                borderColor: 'var(--color-grey-700)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center border"
                  style={{ borderColor: 'var(--color-accent)' }}
                >
                  <ShieldAlert size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: 'var(--color-grey-400)' }}
                  >
                    Link Status
                  </p>
                  <h2 className="mt-2 text-xl text-white!">What probably happened</h2>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--color-grey-300)' }}>
                    This address may refer to a page that was renamed, a destination that has not
                    been published yet, or a URL copied from an outdated source. The rest of the
                    website is still available.
                  </p>
                </div>
              </div>
            </aside>

            <div
              className="grid grid-cols-1 gap-px border"
              style={{ background: 'var(--color-grey-700)', borderColor: 'var(--color-grey-700)' }}
            >
              {recoveryLinks.map(({ title, href, description, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-start gap-4 p-6 py-4 transition-colors"
                  style={{ background: 'rgba(15,26,39,0.94)' }}
                >
                  <div
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border transition-colors"
                    style={{ borderColor: 'var(--color-grey-700)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3
                        className="text-sm uppercase tracking-[0.12em] transition-colors"
                        style={{ color: 'var(--color-grey-200)' }}
                      >
                        {title}
                      </h3>
                      <ArrowRight
                        size={14}
                        className="shrink-0 transition-transform group-hover:translate-x-0.5"
                        style={{ color: 'var(--color-grey-500)' }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-grey-400)' }}>
                      {description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
