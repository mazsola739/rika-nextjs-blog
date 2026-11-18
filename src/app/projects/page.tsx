import type { Metadata } from 'next';
import ExternalLink from '@/components/ExternalLink/ExternalLink';
import { PORTFOLIO_URL } from '@/constants/site';

export const metadata: Metadata = { title: 'Projects' };

/** Projects page (`/projects`). Points to the portfolio, where the projects are collected. */
export default function ProjectsPage() {
  return (
    <section>
      <h2>Projects</h2>
      <p>
        My projects, from the first small ones to complex systems, are collected in my <ExternalLink href={PORTFOLIO_URL}>portfolio</ExternalLink>.
      </p>
    </section>
  );
}
