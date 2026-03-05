import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? '',
      date: data.date ?? '',
      author: data.author ?? 'YYUSSA',
      category: data.category ?? 'Business Management',
      tags: data.tags ?? [],
      excerpt: data.excerpt ?? '',
      content,
    } as BlogPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fallbackPath = path.join(BLOG_DIR, `${slug}.md`);

  let raw: string;
  try {
    raw = fs.readFileSync(filePath, 'utf-8');
  } catch {
    try {
      raw = fs.readFileSync(fallbackPath, 'utf-8');
    } catch {
      return null;
    }
  }

  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    author: data.author ?? 'YYUSSA',
    category: data.category ?? 'Business Management',
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? '',
    content,
  };
}
