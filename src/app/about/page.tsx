import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

/** About page (`/about`). Placeholder content. */
export default function AboutPage() {
  return (
    <section>
      <h2>About</h2>
      <p>This is the about page of our blog.</p>
    </section>
  );
}
