import type { Metadata } from 'next';
import BlogPostList from '@/components/BlogPostList/BlogPostList';
import { getPosts } from '@/services/posts';
import { getPageCount } from '@/utils/pagination';

type ListPageProps = {
  params: Promise<{ page: string }>;
};

/** Only the pages returned by `generateStaticParams` exist; any other page number is a 404. */
export const dynamicParams = false;

/** Pre-renders pages 2, 3, ... of "All Blog Posts" at build time. Page 1 is the home page. */
export async function generateStaticParams() {
  const posts = await getPosts();
  return Array.from({ length: getPageCount(posts.length) - 1 }, (_, index) => ({ page: String(index + 2) }));
}

export async function generateMetadata({ params }: ListPageProps): Promise<Metadata> {
  const { page } = await params;
  return { title: `Page ${page}` };
}

/** Blog post listing with page 2, 3, ... of "All Blog Posts" (`/page/[page]`). */
export default async function ListPage({ params }: ListPageProps) {
  const [posts, { page }] = await Promise.all([getPosts(), params]);

  return <BlogPostList posts={posts} currentPage={Number(page)} />;
}
