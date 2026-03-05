'use client';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';
import { BLOG_CATEGORIES } from '@/lib/constants';

interface BlogSidebarProps {
  recentPosts: BlogPost[];
}

export default function BlogSidebar({ recentPosts }: BlogSidebarProps) {
  return (
    <aside aria-label="Blog sidebar" className="space-y-10 lg:sticky lg:top-28 lg:self-start">

      {/* Recent posts */}
      <div
        className="border p-7"
        style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--bg-white)' }}
      >
        {/* Section header */}
        <div className="mb-6">
          <div
            className="mb-3 h-px w-full"
            style={{ background: 'var(--color-secondary-dark)' }}
          />
          <div className="flex items-center justify-between">
            <h3
              className="text-[10px] uppercase tracking-[0.22em] font-medium"
              style={{ color: 'var(--color-text-dark)' }}
            >
              Recent Posts
            </h3>
            <Link
              href="/blog"
              className="text-[9px] uppercase tracking-[0.14em] transition-colors"
              style={{ color: 'var(--color-grey-400)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-400)')}
            >
              All →
            </Link>
          </div>
        </div>

        <ol className="space-y-0">
          {recentPosts.slice(0, 5).map((post, i) => (
            <li
              key={post.slug}
              className="group flex items-start gap-4 py-4"
              style={{
                borderBottom: i < Math.min(recentPosts.length, 5) - 1
                  ? '1px solid var(--color-secondary-dark)'
                  : 'none',
              }}
            >
              {/* Number */}
              <span
                className="shrink-0 pt-0.5 font-bold leading-none select-none"
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  fontSize: '0.75rem',
                  color: 'var(--color-secondary-dark)',
                  letterSpacing: '-0.02em',
                  minWidth: '1.25rem',
                }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0 flex-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block text-sm font-medium leading-snug line-clamp-2 transition-colors"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    color: 'var(--color-grey-700)',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-700)')}
                >
                  {post.title}
                </Link>
                <p
                  className="mt-1.5 text-[10px] uppercase tracking-[0.1em]"
                  style={{ color: 'var(--color-grey-400)' }}
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric',
                  })}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Categories */}
      <div
        className="border p-7"
        style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--bg-white)' }}
      >
        {/* Section header */}
        <div className="mb-6">
          <div
            className="mb-3 h-px w-full"
            style={{ background: 'var(--color-secondary-dark)' }}
          />
          <h3
            className="text-[10px] uppercase tracking-[0.22em] font-medium"
            style={{ color: 'var(--color-text-dark)' }}
          >
            Categories
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={`/blog?category=${encodeURIComponent(cat.name)}`}
              className="inline-flex items-center gap-1.5 border px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] transition-all duration-150"
              style={{
                borderColor: 'var(--color-secondary-dark)',
                color: 'var(--color-grey-600)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent)';
                e.currentTarget.style.background = 'color-mix(in srgb, var(--color-accent) 6%, transparent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-secondary-dark)';
                e.currentTarget.style.color = 'var(--color-grey-600)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {cat.name}
              <span
                className="tabular-nums"
                style={{ color: 'var(--color-grey-400)' }}
              >
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Editorial note */}
      <div
        className="border-l-[3px] pl-5 py-1"
        style={{ borderColor: 'var(--color-accent)' }}
      >
        <p
          className="text-sm italic leading-relaxed"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            color: 'var(--color-grey-500)',
          }}
        >
          Perspectives on commerce, logistics, and real estate in East Africa — from the YYUSSA team.
        </p>
      </div>

    </aside>
  );
}
