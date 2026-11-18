'use client';

import styles from './status-page.module.scss';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Error boundary for all pages, e.g. when the next page cannot be loaded
 * during client-side navigation (offline). The header and footer stay
 * visible, and the user can try again.
 */
export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <section className={styles['status-page']}>
      <h2>Something went wrong</h2>
      <p>The page could not be loaded. Please try again.</p>
      <button type="button" className={styles.button} onClick={reset}>
        Try again
      </button>
    </section>
  );
}
