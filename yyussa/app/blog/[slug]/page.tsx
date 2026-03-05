import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import PageHeader from '@/components/layout/PageHeader';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-label="Blog post content"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-10 lg:gap-12">
            <article className="min-w-0" aria-labelledby="article-title">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm mb-8"
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to Insights
              </Link>

              <header
                className="rounded-2xl border border-[var(--color-border)] p-7 md:p-9 mb-8"
                style={{ background: 'var(--color-surface-white)' }}
              >
                <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-secondary)] mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} aria-hidden="true" />
                    {formattedDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User size={13} aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs badge-primary">{post.category}</span>
                </div>

                <h1
                  id="article-title"
                  className="text-3xl md:text-4xl mb-4"
                  style={{
                    letterSpacing: '-0.015em',
                    lineHeight: 1.24,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {post.title}
                </h1>

                <p className="text-[var(--color-text-secondary)] italic leading-relaxed">{post.excerpt}</p>
              </header>

              <div
                className="rounded-2xl border border-[var(--color-border)] p-7 md:p-9"
                style={{ background: 'var(--color-surface-white)' }}
              >
                <div className="prose prose-neutral prose-dark max-w-none">
                  <MDXRemote source={post.content} />
                </div>

                {post.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag size={14} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="text-xs px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>

            <div className="lg:pt-14">
              <BlogSidebar recentPosts={allPosts} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
