import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Newsletter' };

/** Newsletter page (`/newsletter`). Placeholder content. */
export default function NewsletterPage() {
  return (
    <section>
      <h2>Newsletter</h2>
      <p>Subscribe to our newsletter!</p>
    </section>
  );
}
