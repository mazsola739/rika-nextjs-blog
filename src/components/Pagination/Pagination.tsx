import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { PaginationProps } from './Pagination.props';
import { ArrowLeft, ArrowRight } from '../Icons/Icons';

/**
 * Controlled pagination built on `react-paginate`.
 *
 * Pages are 1-based in the props; `react-paginate` is 0-based, so the values
 * are converted here. Renders nothing while there are no items.
 */
const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages === 0) return null;

  const handlePageClick = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1);
  };

  return (
    <div className={styles['pagination-container']}>
      <ReactPaginate
        previousLabel={
          <span className={styles['page-button']}>
            <ArrowLeft /> Previous
          </span>
        }
        nextLabel={
          <span className={styles['page-button']}>
            Next <ArrowRight />
          </span>
        }
        breakLabel="..."
        pageCount={totalPages}
        forcePage={currentPage - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </div>
  );
};

export default Pagination;
