import type { Route } from 'next';
import { BASE_PATH, PORTFOLIO_URL, REPO_URL } from './site';

/** A footer link: external links open in a new tab, internal ones use client-side navigation. */
export type FooterLink = { name: string; url: string; external: true } | { name: string; url: Route; external: false };

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
