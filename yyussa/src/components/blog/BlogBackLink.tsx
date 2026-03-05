'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogBackLink() {
  return (
    <Link
      href="/blog"
      className="mb-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] transition-colors"
      style={{ color: 'var(--color-grey-500)' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-500)')}
    >
      <ArrowLeft size={13} aria-hidden="true" />
      Back to Insights
    </Link>
  );
}
