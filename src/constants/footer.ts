import type { Route } from 'next';
import type { ComponentType, SVGProps } from 'react';
import { GitHub, Globe, Home, LinkedIn, Mail, Rss, Twitter } from '@/components/Icons/Icons';
import { BASE_PATH, PORTFOLIO_URL, REPO_URL } from './site';

/** Decorative icon shown before the name of a footer link. */
type FooterIcon = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * A footer link. External links leave the blog and open in a new tab (an email
 * link opens the mail app); internal ones are pages of the blog, opened with
 * client-side navigation.
 */
export type FooterLink = { name: string; icon: FooterIcon } & ({ url: string; external: true } | { url: Route; external: false });

/** Copyright line under the footer links. The blog was built in 2023 and renovated in 2026. */
export const copyrightText = '© 2023 Rika · Fully renovated in 2026, original lorem ipsum preserved.';

/** Links of the footer, in display order. Twitter, LinkedIn and Email are placeholders from the design. */
export const footerList: FooterLink[] = [
  { name: 'Portfolio', icon: Globe, url: PORTFOLIO_URL, external: true },
  { name: 'GitHub', icon: GitHub, url: REPO_URL, external: true },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', external: true },
  { name: 'LinkedIn', icon: LinkedIn, url: 'https://linkedin.com', external: true },
  { name: 'Email', icon: Mail, url: 'mailto:your-email@example.com', external: true },
  // A static file, not a page: a plain link, so the base path is added by hand.
  { name: 'RSS feed', icon: Rss, url: `${BASE_PATH}/rss.xml`, external: true },
  { name: 'Blog', icon: Home, url: '/', external: false },
];
