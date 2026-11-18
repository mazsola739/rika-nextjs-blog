import { BlogPostType } from '@/types/blog';

export interface BlogPostListProps {
  /** All posts, newest first. */
  posts: BlogPostType[];
  /** The shown page of "All Blog Posts", 1-based. */
  currentPage: number;
}
