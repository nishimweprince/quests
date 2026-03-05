import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'News, updates, and perspectives from YYUSSA Group on real estate, logistics, and commercial excellence in East Africa.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        title="Insights"
        subtitle="News, updates, and perspectives from YYUSSA Group."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section
        className="py-24 md:py-28"
        style={{ background: 'var(--bg-light)' }}
        aria-labelledby="blog-heading"
      >
        <div className="container-xl">

          {/* Section label row */}
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span
                className="h-px w-8 shrink-0"
                style={{ background: 'var(--color-accent)' }}
                aria-hidden="true"
              />
              <h2
                id="blog-heading"
                className="text-[11px] uppercase tracking-[0.18em]"
                style={{ color: 'var(--color-grey-500)' }}
              >
                {posts.length > 0
                  ? `${posts.length} Article${posts.length !== 1 ? 's' : ''}`
                  : 'No posts yet'}
              </h2>
            </div>
            {posts.length > 1 && (
              <span
                className="hidden text-[10px] uppercase tracking-[0.14em] md:block"
                style={{ color: 'var(--color-grey-400)' }}
              >
                Latest first
              </span>
            )}
          </div>

          {posts.length === 0 ? (
            <p className="text-sm" style={{ color: 'var(--color-grey-500)' }}>
              No posts yet. Check back soon for insights from the YYUSSA team.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">

              {/* Left column: featured + grid */}
              <div>
                {/* Featured post */}
                {featured && (
                  <div className="mb-px">
                    <BlogCard post={featured} index={0} featured={true} />
                  </div>
                )}

                {/* Divider with label */}
                {rest.length > 0 && (
                  <div
                    className="my-8 flex items-center gap-4"
                    aria-hidden="true"
                  >
                    <div
                      className="h-px flex-1"
                      style={{ background: 'var(--color-secondary-dark)' }}
                    />
                    <span
                      className="text-[9px] uppercase tracking-[0.2em]"
                      style={{ color: 'var(--color-grey-400)' }}
                    >
                      More Articles
                    </span>
                    <div
                      className="h-px flex-1"
                      style={{ background: 'var(--color-secondary-dark)' }}
                    />
                  </div>
                )}

                {/* Remaining posts grid */}
                {rest.length > 0 && (
                  <div
                    className="grid grid-cols-1 gap-px sm:grid-cols-2"
                    style={{ background: 'var(--color-secondary-dark)' }}
                  >
                    {rest.map((post, i) => (
                      <BlogCard key={post.slug} post={post} index={i + 1} />
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <BlogSidebar recentPosts={posts} />
            </div>
          )}

        </div>
      </section>
    </>
  );
}
