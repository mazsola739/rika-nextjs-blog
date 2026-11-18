import { API_URL, PIC_BASE_URL } from '@/constants/api';
import { allTags } from '@/constants/tags';
import { BlogPostType } from '@/types/blog';
import { createRandom } from '@/utils/helpers';

/** Shape of a post returned by the JSONPlaceholder `/posts` endpoint. */
interface ApiPost {
  id: number;
  title: string;
  body: string;
}

/** Date of the newest post; every following post is a few days older. */
const NEWEST_POST_DATE = Date.UTC(2026, 10, 18);
const DAY_MS = 24 * 60 * 60 * 1000;
const WORDS_PER_MINUTE = 200;

/** Estimates the reading time of a text at 200 words per minute. */
const calculateReadingTime = (text: string) => `${Math.ceil(text.split(/\s+/).length / WORDS_PER_MINUTE)} min read`;

/**
 * Maps an API post to the UI model.
 *
 * The API only provides the id, title and body. The date, view count and tags
 * are simulated with a random generator seeded by the post id, so they are the
 * same on every render, on the server and on the client.
 */
const mapPost = (post: ApiPost): BlogPostType => {
  const random = createRandom(post.id);
  const tagCount = 2 + Math.floor(random() * 2);
  const tags = [...allTags].sort(() => random() - 0.5).slice(0, tagCount);

  return {
    id: post.id,
    title: post.title,
    description: post.body,
    image: `${PIC_BASE_URL}/seed/${post.id}/800/400`,
    date: new Date(NEWEST_POST_DATE - (post.id - 1) * 3 * DAY_MS).toISOString(),
    views: 100 + Math.floor(random() * 4900),
    readingTime: calculateReadingTime(post.body),
    tags,
  };
};

/**
 * Fetches all posts, newest first.
 *
 * Runs at build time only: the site is a static export, so the posts are
 * baked into the HTML. The response is cached, so pre-rendering all pages
 * needs a single API request.
 * @throws If the API request fails; the build stops with the error.
 */
export const getPosts = async (): Promise<BlogPostType[]> => {
  const res = await fetch(API_URL, { cache: 'force-cache' });
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);

  const data: ApiPost[] = await res.json();
  return data.map(mapPost).sort((a, b) => b.date.localeCompare(a.date));
};

/**
 * Returns a single post, or `null` if there is no post with this id.
 *
 * It reads from the cached post list instead of calling `/posts/:id`, so
 * building all post pages needs only one API request.
 */
export const getPost = async (id: number): Promise<BlogPostType | null> => {
  const posts = await getPosts();
  return posts.find((post) => post.id === id) ?? null;
};
