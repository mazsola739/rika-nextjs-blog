import type { AnchorHTMLAttributes } from 'react';

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Absolute URL, or the path of a static file such as the RSS feed. */
  href: string;
}
