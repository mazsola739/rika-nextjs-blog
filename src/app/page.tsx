import BlogPostList from '@/components/BlogPostList/BlogPostList';
import { getPosts } from '@/services/posts';

/**
 * Home page (`/`): the blog post listing with the first page of "All Blog Posts".
 * The other pages are at `/page/[page]`. Pre-rendered at build time.
 */
export default async function HomePage() {
  const posts = await getPosts();

  return <BlogPostList posts={posts} currentPage={1} />;
}
