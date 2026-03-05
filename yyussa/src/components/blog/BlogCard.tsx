'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

const CATEGORY_ACCENTS: Record<string, string> = {
  'Business Management': '#B8965A',
  'Compliance Audits':   '#7A8B6F',
  'Employee Relations':  '#6B7FA3',
  'HR Consulting':       '#A3776B',
  'Legal Contract':      '#8B6BA3',
  'Small Business HR':   '#6BA38B',
};

function getCategoryAccent(category: string): string {
  return CATEGORY_ACCENTS[category] ?? '#B8965A';
}

export default function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const accentColor = getCategoryAccent(post.category);
  const ordinal = String(index + 1).padStart(2, '0');

  if (featured) {
    return (
      <article
        className="group relative flex flex-col overflow-hidden"
        style={{ background: 'var(--bg-white)', border: '1px solid var(--color-secondary-dark)' }}
      >
        {/* Top accent bar — full width, category color */}
        <div className="h-0.5 w-full" style={{ background: accentColor }} />

        {/* Image area */}
        <div
          className="relative flex h-72 md:h-80 items-end overflow-hidden"
          style={{ background: 'var(--color-accent)' }}
          aria-hidden="true"
        >
          {/* Diagonal grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.018) 40px,
                rgba(255,255,255,0.018) 41px
              )`,
            }}
          />
          {/* Gradient fade at bottom */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.85) 0%, transparent 55%)' }}
          />

          {/* Index number — large watermark */}
          <span
            className="pointer-events-none absolute right-6 top-4 font-bold select-none"
            style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: '7rem',
              lineHeight: 1,
              color: 'rgba(255,255,255,0.04)',
              letterSpacing: '-0.04em',
            }}
            aria-hidden="true"
          >
            {ordinal}
          </span>

          {/* Category + date over image */}
          <div className="relative z-10 p-7 pb-8">
            <div className="mb-3 flex items-center gap-3">
              <span
                className="h-px w-5 shrink-0"
                style={{ background: accentColor }}
                aria-hidden="true"
              />
              <span
                className="text-[10px] uppercase tracking-[0.22em] font-medium"
                style={{ color: accentColor }}
              >
                {post.category}
              </span>
            </div>
            <h2
              className="text-xl md:text-2xl text-white! leading-snug"
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                letterSpacing: '-0.02em',
                maxWidth: '480px',
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="transition-opacity hover:opacity-80"
              >
                {post.title}
              </Link>
            </h2>
          </div>
        </div>

        {/* Content below image */}
        <div className="flex flex-1 flex-col p-7">
          <div
            className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.14em]"
            style={{ color: 'var(--color-grey-400)' }}
          >
            <span>{formattedDate}</span>
            <span style={{ color: 'var(--color-secondary-dark)' }}>·</span>
            <span>{post.author}</span>
          </div>

          <p
            className="mb-7 flex-1 text-sm leading-loose line-clamp-3"
            style={{ color: 'var(--color-grey-600)' }}
          >
            {post.excerpt}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="group/link inline-flex items-center gap-2.5 self-start"
            aria-label={`Read full article: ${post.title}`}
          >
            <span
              className="text-[10px] uppercase tracking-[0.18em] font-medium transition-colors"
              style={{ color: 'var(--color-accent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            >
              Read Article
            </span>
            <span
              className="flex h-6 w-6 items-center justify-center transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              style={{
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
              }}
            >
              <ArrowUpRight size={11} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article
      className="group relative flex flex-col overflow-hidden"
      style={{ background: 'var(--bg-white)' }}
    >
      {/* Left accent bar — category color, reveals on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] origin-bottom transition-transform duration-300 ease-out scale-y-0 group-hover:scale-y-100"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      {/* Image area */}
      <div
        className="relative flex h-44 items-end overflow-hidden"
        style={{ background: 'var(--color-accent)' }}
        aria-hidden="true"
      >
        {/* Fine dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.5) 0%, transparent 60%)' }}
        />

        {/* Index number watermark */}
        <span
          className="pointer-events-none absolute right-4 top-3 font-bold select-none"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '5rem',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.05)',
            letterSpacing: '-0.04em',
          }}
          aria-hidden="true"
        >
          {ordinal}
        </span>

        <div className="relative z-10 p-5">
          <div className="flex items-center gap-2">
            <span
              className="h-px w-3 shrink-0"
              style={{ background: accentColor }}
              aria-hidden="true"
            />
            <span
              className="text-[9px] uppercase tracking-[0.22em]"
              style={{ color: accentColor }}
            >
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 pl-7">
        <div
          className="mb-3 text-[10px] uppercase tracking-[0.12em]"
          style={{ color: 'var(--color-grey-400)' }}
        >
          {formattedDate} &middot; {post.author}
        </div>

        <h2
          className="mb-3 text-base leading-snug"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            color: 'var(--color-text-dark)',
            letterSpacing: '-0.015em',
          }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-dark)')}
          >
            {post.title}
          </Link>
        </h2>

        <p
          className="mb-5 flex-1 text-sm leading-relaxed line-clamp-2"
          style={{ color: 'var(--color-grey-600)' }}
        >
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="group/link inline-flex items-center gap-2 self-start"
          aria-label={`Read: ${post.title}`}
        >
          <span
            className="text-[9px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: 'var(--color-accent)' }}
          >
            Read More
          </span>
          <ArrowUpRight
            size={11}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            style={{ color: 'var(--color-accent)' }}
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
