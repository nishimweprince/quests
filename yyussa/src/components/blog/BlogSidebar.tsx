import Link from 'next/link';
import { Search } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';
import { BLOG_CATEGORIES, BLOG_TAGS } from '@/lib/constants';

interface BlogSidebarProps {
  recentPosts: BlogPost[];
}

const panelClass = 'rounded-xl border border-[var(--color-border)] p-5 md:p-6';

export default function BlogSidebar({ recentPosts }: BlogSidebarProps) {
  return (
    <aside aria-label="Blog sidebar" className="space-y-6">
      <div className={panelClass} style={{ background: 'var(--color-surface-white)' }}>
        <h3 className="text-sm uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Search
        </h3>
        <div className="relative">
          <input
            type="search"
            placeholder="Search posts..."
            className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 pr-10 text-sm bg-[var(--color-surface-white)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            aria-label="Search blog posts"
          />
          <Search
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className={panelClass} style={{ background: 'var(--color-surface-white)' }}>
        <h3 className="text-sm uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--color-text-primary)' }}>
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-2"
              >
                {post.title}
              </Link>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short', day: 'numeric', year: 'numeric',
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className={panelClass} style={{ background: 'var(--color-surface-white)' }}>
        <h3 className="text-sm uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--color-text-primary)' }}>
          Categories
        </h3>
        <ul className="space-y-2.5">
          {BLOG_CATEGORIES.map((cat) => (
            <li key={cat.name} className="flex items-center justify-between gap-2">
              <Link
                href={`/blog?category=${encodeURIComponent(cat.name)}`}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {cat.name}
              </Link>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: 'color-mix(in srgb, var(--color-primary) 15%, transparent)',
                  color: 'var(--color-primary)',
                }}
              >
                {cat.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={panelClass} style={{ background: 'var(--color-surface-white)' }}>
        <h3 className="text-sm uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--color-text-primary)' }}>
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {BLOG_TAGS.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
