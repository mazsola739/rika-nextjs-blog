import type { Route } from 'next';
import { BASE_PATH, PORTFOLIO_URL, REPO_URL } from './site';

/**
 * A footer link. External links leave the blog and open in a new tab (an email
 * link opens the mail app); internal ones are pages of the blog, opened with
 * client-side navigation.
 */
export type FooterLink = { name: string; url: string; external: true } | { name: string; url: Route; external: false };

/** Copyright line under the footer links. The blog was built in 2023 and renovated in 2026. */
export const copyrightText = '© 2023 Rika · Fully renovated in 2026, original lorem ipsum preserved.';

/** Links of the footer, in display order. Twitter, LinkedIn and Email are placeholders from the design. */
export const footerList: FooterLink[] = [
  { name: 'Portfolio', url: PORTFOLIO_URL, external: true },
  { name: 'GitHub', url: REPO_URL, external: true },
  { name: 'Twitter', url: 'https://twitter.com', external: true },
  { name: 'LinkedIn', url: 'https://linkedin.com', external: true },
  { name: 'Email', url: 'mailto:your-email@example.com', external: true },
  // A static file, not a page: a plain link, so the base path is added by hand.
  { name: 'RSS feed', url: `${BASE_PATH}/rss.xml`, external: true },
  { name: 'Blog', url: '/', external: false },
];
