import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article
      className="group rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)]/45 hover:shadow-lg transition-all duration-300 flex flex-col"
      style={{ background: 'var(--color-surface-white)' }}
    >
      <div
        className="h-40 md:h-44 flex items-end"
        style={{
          background:
            'linear-gradient(155deg, var(--color-surface-dark) 0%, #141319 68%, #221313 100%)',
        }}
        aria-hidden="true"
      >
        <div className="p-5">
          <span
            className="inline-block text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded border"
            style={{
              borderColor: 'rgba(255,255,255,0.24)',
              color: 'var(--color-text-light)',
            }}
          >
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-secondary)] mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} aria-hidden="true" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User size={13} aria-hidden="true" />
            {post.author}
          </span>
        </div>

        <h2
          className="text-xl leading-tight mb-3 group-hover:text-[var(--color-primary)] transition-colors"
          style={{ color: 'var(--color-text-primary)' }}
        >
          <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
            {post.title}
          </Link>
        </h2>

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm mt-auto"
          style={{ color: 'var(--color-primary)' }}
          aria-label={`Read more: ${post.title}`}
        >
          Continue Reading
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
