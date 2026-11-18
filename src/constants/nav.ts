import type { Route } from 'next';

/** Main navigation links, shown in the header and in the mobile menu. */
export const navLinks: { name: string; url: Route }[] = [
  { name: 'Blog', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'About', url: '/about' },
  { name: 'Newsletter', url: '/newsletter' },
];
