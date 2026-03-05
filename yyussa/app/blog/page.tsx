import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import SectionLabel from '@/components/ui/SectionLabel';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Latest News',
  description:
    'Insights, updates, and expertise from YYUSSA Group on real estate, logistics, and commercial excellence in East Africa.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        title="Corporate Insights"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-labelledby="blog-heading"
      >
        <div className="container-xl">
          <div className="mb-12 md:mb-14">
            <SectionLabel>Publications</SectionLabel>
            <h2
              id="blog-heading"
              className="text-3xl md:text-4xl mt-2"
              style={{ letterSpacing: '-0.015em', color: 'var(--color-text-primary)' }}
            >
              Market Analysis & Strategic Updates
            </h2>
            <p className="mt-4 max-w-3xl text-[var(--color-text-secondary)]">
              Explore commentary and practical insights across logistics, real estate, and regional
              trade from YYUSSA leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-9 lg:gap-12">
            <div>
              {posts.length === 0 ? (
                <p className="text-[var(--color-text-secondary)]">No posts yet. Check back soon.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>

            <div>
              <BlogSidebar recentPosts={posts} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
