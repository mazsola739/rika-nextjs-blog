import type { Route } from 'next';

/** Number of posts on one page of the "All Blog Posts" section. */
export const POSTS_PER_PAGE = 6;

/** Number of pages of "All Blog Posts" for the given number of posts (at least 1). */
export const getPageCount = (postCount: number) => Math.max(1, Math.ceil(postCount / POSTS_PER_PAGE));

/**
 * Route of a page of "All Blog Posts". Page 1 is the home page; the others are
 * static pages pre-rendered at build time: `/page/2/`, `/page/3/`, ...
 * (with a trailing slash, see `trailingSlash` in `next.config.ts`).
 */
export const getPageRoute = (page: number) => (page === 1 ? '/' : `/page/${page}/`) as Route;
