'use client';

import type { Route } from 'next';
import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import { BASE_PATH } from '@/constants/site';
import { getPageRoute } from '@/utils/pagination';
import styles from './Pagination.module.scss';
import { PaginationProps } from './Pagination.props';
import { ArrowLeft, ArrowRight } from '../Icons/Icons';

/** Route of a page of "All Blog Posts". The hash scrolls back to the top of the section. */
const pageRoute = (page: number) => `${getPageRoute(page)}#all-posts` as Route;

/**
 * Pagination for "All Blog Posts", built on `react-paginate`.
 *
 * Every page has its own static URL (`/`, `/page/2`, ...): every control is a
 * real link (so it also works without JavaScript and can be opened in a new
 * tab), and a click navigates on the client with the Next.js router.
 * Pages are 1-based in the props and URLs; `react-paginate` is 0-based.
 */
const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const router = useRouter();

  if (totalPages <= 1) return null;

  return (
    <nav className={styles['pagination-container']} aria-label="Pagination">
      <ReactPaginate
        previousLabel={
          <span className={styles['page-button']}>
            <ArrowLeft aria-hidden="true" /> Previous
          </span>
        }
        nextLabel={
          <span className={styles['page-button']}>
            Next <ArrowRight aria-hidden="true" />
          </span>
        }
        breakLabel="..."
        pageCount={totalPages}
        forcePage={currentPage - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        // Plain <a> links, not next/link, so the base path is added by hand.
        // Previous/Next ask for page 0 and totalPages + 1 when disabled; keep their links in range.
        hrefBuilder={(page, pageCount) => `${BASE_PATH}${pageRoute(Math.min(Math.max(page, 1), pageCount))}`}
        hrefAllControls
        onPageChange={({ selected }) => router.push(pageRoute(selected + 1))}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </nav>
  );
};

export default Pagination;
