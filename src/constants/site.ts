/**
 * Site-wide settings. The values that depend on where the site is hosted come
 * from environment variables at build time (set by the GitHub Pages workflow).
 */

/**
 * Path prefix of the site: empty locally, `/rika-nextjs-blog` on GitHub Pages,
 * where the site is served from a sub-path of `mazsola739.github.io`.
 *
 * `next/link` and the router add it automatically; plain `<a href>` links and
 * `next/image` sources from `public/` need it added by hand.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Public URL of the site (including the base path), used for the absolute links in the RSS feed. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:1111${BASE_PATH}`;

/** The author's portfolio, which links back to this blog. */
export const PORTFOLIO_URL = 'https://mazsola739.github.io/mazsola739/';

/** Source code of this blog on GitHub. */
export const REPO_URL = 'https://github.com/mazsola739/rika-nextjs-blog';
