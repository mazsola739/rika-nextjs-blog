import type { Metadata } from 'next';
import { PORTFOLIO_URL } from '@/constants/site';

export const metadata: Metadata = { title: 'Projects' };

/** Projects page (`/projects`). Points to the portfolio, where the projects are collected. */
export default function ProjectsPage() {
  return (
    <section>
      <h2>Projects</h2>
      <p>
        My projects, from the first small ones to complex systems, are collected in my <a href={PORTFOLIO_URL}>portfolio</a>.
      </p>
    </section>
  );
}
