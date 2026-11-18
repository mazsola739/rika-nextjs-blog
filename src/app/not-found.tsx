import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './status-page.module.scss';

export const metadata: Metadata = { title: 'Page not found' };

/** 404 page, shown for unknown URLs and for posts that do not exist. */
export default function NotFound() {
  return (
    <section className={styles['status-page']}>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className={styles.button}>
        Back to the blog
      </Link>
    </section>
  );
}
