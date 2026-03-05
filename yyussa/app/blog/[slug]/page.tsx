import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag, ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import PageHeader from '@/components/layout/PageHeader';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogBackLink from '@/components/blog/BlogBackLink';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface Params { slug: string; }

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const readingTime = estimateReadingTime(post.content);

  // Prev / next navigation
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/blog' },
          { label: post.title },
        ]}
      />

      <section
        className="py-24 md:py-28"
        style={{ background: 'var(--bg-light)' }}
        aria-label="Blog post content"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-16">

            <article aria-labelledby="article-title">
              {/* Back link */}
              <BlogBackLink />

              {/* Article header card */}
              <header
                className="relative mb-1 overflow-hidden border p-8 md:p-10"
                style={{
                  borderColor: 'var(--color-secondary-dark)',
                  background: 'var(--bg-white)',
                }}
              >
                {/* Top accent rule */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: 'var(--color-accent)' }}
                  aria-hidden="true"
                />

                {/* Category + meta row */}
                <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.22em] font-medium"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {post.category}
                  </span>

                  <span
                    className="hidden h-3 w-px"
                    style={{ background: 'var(--color-secondary-dark)' }}
                    aria-hidden="true"
                  />

                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest"
                    style={{ color: 'var(--color-grey-500)' }}
                  >
                    <Calendar size={11} aria-hidden="true" />
                    {formattedDate}
                  </span>

                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest"
                    style={{ color: 'var(--color-grey-500)' }}
                  >
                    <User size={11} aria-hidden="true" />
                    {post.author}
                  </span>

                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest"
                    style={{ color: 'var(--color-grey-500)' }}
                  >
                    <Clock size={11} aria-hidden="true" />
                    {readingTime} min read
                  </span>
                </div>

                <h1
                  id="article-title"
                  className="text-3xl md:text-4xl"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    letterSpacing: '-0.025em',
                    lineHeight: 1.18,
                    color: 'var(--color-text-dark)',
                  }}
                >
                  {post.title}
                </h1>

                {post.excerpt && (
                  <>
                    <div
                      className="mt-6 mb-5 h-px"
                      style={{ background: 'var(--color-secondary-dark)' }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-base italic leading-relaxed"
                      style={{
                        fontFamily: "'Libre Baskerville', Georgia, serif",
                        color: 'var(--color-grey-600)',
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </>
                )}
              </header>

              {/* Article body */}
              <div
                className="border border-t-0 p-8 md:p-10"
                style={{
                  borderColor: 'var(--color-secondary-dark)',
                  background: 'var(--bg-white)',
                }}
              >
                {/* Left accent border on the prose content */}
                <div
                  className="border-l-[3px] pl-6 md:pl-8"
                  style={{ borderColor: 'var(--color-secondary-dark)' }}
                >
                  <div className="prose prose-neutral prose-dark max-w-none">
                    <MDXRemote source={post.content} />
                  </div>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div
                    className="mt-10 flex flex-wrap items-center gap-2 border-t pt-6"
                    style={{ borderColor: 'var(--color-secondary-dark)' }}
                  >
                    <Tag size={12} style={{ color: 'var(--color-grey-400)' }} aria-hidden="true" />
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="border px-3 py-1 text-[10px] uppercase tracking-widest text-(--color-grey-500) transition-all duration-150 hover:border-(--color-accent) hover:text-(--color-accent)"
                        style={{
                          borderColor: 'var(--color-secondary-dark)',
                        }}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Prev / Next navigation */}
              {(prevPost || nextPost) && (
                <nav
                  aria-label="Article navigation"
                  className="mt-1 grid grid-cols-1 gap-px sm:grid-cols-2"
                  style={{ background: 'var(--color-secondary-dark)' }}
                >
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group flex flex-col gap-2 p-6 transition-colors hover:bg-(--bg-light)"
                      style={{ background: 'var(--bg-white)' }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em]"
                        style={{ color: 'var(--color-grey-400)' }}
                      >
                        <ArrowLeft size={10} aria-hidden="true" />
                        Previous
                      </span>
                      <span
                        className="text-sm leading-snug line-clamp-2 transition-colors group-hover:text-(--color-accent)"
                        style={{
                          fontFamily: "'Libre Baskerville', Georgia, serif",
                          color: 'var(--color-text-dark)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {prevPost.title}
                      </span>
                    </Link>
                  ) : (
                    <div style={{ background: 'var(--bg-white)' }} />
                  )}

                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group flex flex-col items-end gap-2 p-6 text-right transition-colors hover:bg-(--bg-light)"
                      style={{ background: 'var(--bg-white)' }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em]"
                        style={{ color: 'var(--color-grey-400)' }}
                      >
                        Next
                        <ArrowRight size={10} aria-hidden="true" />
                      </span>
                      <span
                        className="text-sm leading-snug line-clamp-2 transition-colors group-hover:text-(--color-accent)"
                        style={{
                          fontFamily: "'Libre Baskerville', Georgia, serif",
                          color: 'var(--color-text-dark)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {nextPost.title}
                      </span>
                    </Link>
                  ) : (
                    <div style={{ background: 'var(--bg-white)' }} />
                  )}
                </nav>
              )}
            </article>

            {/* Sidebar */}
            <div className="lg:pt-14">
              <BlogSidebar recentPosts={allPosts} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
