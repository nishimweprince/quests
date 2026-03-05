import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section
      className="grain-overlay relative overflow-hidden"
      style={{ background: 'var(--color-surface-dark)' }}
      aria-label={`Page header: ${title}`}
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 38%), linear-gradient(0deg, rgba(154,52,36,0.22) 0%, rgba(154,52,36,0.08) 100%)',
        }}
      />

      <div className="container-xl relative z-10 pt-28 pb-14 md:pt-36 md:pb-18">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-1.5 shadow-sm shadow-black/40 backdrop-blur-sm"
              aria-hidden="true"
            >
              <span
                className="h-px w-8"
                style={{ background: 'var(--color-primary-light)' }}
              />
              <span className="text-[11px] uppercase tracking-[0.22em] text-(--color-text-muted-light)">
                Corporate Profile
              </span>
            </div>

            <h1
              className="text-balance text-4xl text-white md:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.018em', lineHeight: 1.08 }}
            >
              {title}
            </h1>
          </div>

          <div className="hidden max-w-xs flex-col items-end gap-2 text-right md:flex">
            <span className="text-[11px] uppercase tracking-[0.18em] text-(--color-text-muted-light)">
              YYUSSA Group
            </span>
            <span
              className="h-px w-16 bg-linear-to-r from-transparent via-(--color-primary-light) to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        <nav
          aria-label="Breadcrumb"
          className="mt-7 inline-flex rounded-full border border-white/6 bg-black/30 px-4 py-2 backdrop-blur-sm"
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-[14px] md:text-[15px]">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    size={14}
                    className="text-white/30"
                    aria-hidden="true"
                  />
                )}
                {crumb.href && index < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="inline-flex items-center rounded-full px-3 py-1 text-(--color-text-muted-light) transition-colors duration-200 hover:bg-white/5 hover:text-(--color-text-light)"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className="inline-flex items-center rounded-full bg-white/8 px-3 py-1 text-(--color-text-light) shadow-sm shadow-black/40"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
