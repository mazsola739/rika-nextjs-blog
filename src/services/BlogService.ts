import { API_URL, PIC_BASE_URL } from '@/constants/api';
import { BlogPostType } from '@/types/blog';
import { getRandomTags } from '@/utils/helpers';

/** Shape of a post returned by the JSONPlaceholder `/posts` endpoint. */
interface ApiPost {
  id: number;
  title: string;
  body: string;
}

/**
 * Fetches blog posts from the mock API and maps them to {@link BlogPostType}.
 *
 * The API only provides `id`, `title` and `body`; the image, date, view count
 * and tags are generated here to simulate a real blog backend.
 */
class BlogService {
  /**
   * Fetches all posts.
   * @returns The mapped posts, or an empty array if the request fails.
   */
  static async fetchPosts(): Promise<BlogPostType[]> {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch all posts');
      const data: ApiPost[] = await res.json();
      return data.map((post) => BlogService.mapPost(post));
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }

  /**
   * Fetches a single post by id.
   * @param id - The post id.
   * @returns The mapped post, or `null` if it does not exist or the request fails.
   */
  static async fetchPost(id: number): Promise<BlogPostType | null> {
    try {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) throw new Error(`Failed to fetch post with id ${id}`);
      const post: ApiPost = await res.json();
      return BlogService.mapPost(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }

  /** Maps an API post to the UI model, filling in the simulated fields. */
  private static mapPost(post: ApiPost): BlogPostType {
    return {
      id: post.id,
      title: post.title,
      description: post.body,
      image: `${PIC_BASE_URL}/seed/${post.id}/800/400`,
      // ISO string, so formatDate() can parse it regardless of the user's locale
      date: new Date().toISOString(),
      views: Math.floor(Math.random() * 1000),
      readingTime: BlogService.calculateReadingTime(post.body),
      tags: getRandomTags(),
    };
  }

  /** Estimates the reading time of a text at 200 words per minute. */
  private static calculateReadingTime(text: string): string {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }
}

export default BlogService;
