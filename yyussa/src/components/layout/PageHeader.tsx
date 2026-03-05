import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section
      className="grain-overlay relative overflow-hidden"
      style={{ background: 'var(--bg-dark)' }}
      aria-label={`Page header: ${title}`}
    >
      {/* Subtle accent gradient bottom */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, transparent 38%, color-mix(in srgb, var(--color-accent) 14%, transparent) 100%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-xl relative z-10 pb-14 pt-28 md:pt-36 md:pb-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12px]">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    size={12}
                    style={{ color: 'var(--color-grey-700)' }}
                    aria-hidden="true"
                  />
                )}
                {crumb.href && index < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="uppercase tracking-[0.1em] text-(--color-grey-300) transition-colors duration-200 hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className="uppercase tracking-[0.1em]"
                    style={{ color: 'var(--color-accent)' }}
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title */}
        <h1
          className="max-w-3xl text-white!"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--color-grey-300)' }}
          >
            {subtitle}
          </p>
        )}

        {/* Bottom accent rule */}
        <div className="mt-10 flex items-center gap-4">
          <div
            className="h-px w-16"
            style={{ background: 'var(--color-accent)' }}
            aria-hidden="true"
          />
          <div
            className="h-px flex-1"
            style={{ background: 'var(--color-grey-700)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
