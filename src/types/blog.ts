/** A blog post as used by the UI, mapped from the JSONPlaceholder API response. */
export type BlogPostType = {
  /** Post id from the API, also used in the `/post/[id]` route. */
  id: number;
  title: string;
  /** Post body text. */
  description: string;
  /** Cover image URL (seeded by post id, so it is stable across reloads). */
  image: string;
  /** Publication date as an ISO 8601 string. */
  date: string;
  /** Simulated view count. */
  views: number;
  /** Human readable reading time, e.g. `"1 min read"`. */
  readingTime: string;
  /** Simulated tags, picked from `allTags`. */
  tags: string[];
};
