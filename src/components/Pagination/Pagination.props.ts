export interface PaginationProps {
  /** Total number of items across all pages. */
  totalItems: number;
  /** Number of items shown on one page. */
  itemsPerPage: number;
  /** The selected page, 1-based. */
  currentPage: number;
  /** Called with the newly selected page, 1-based. */
  onPageChange: (page: number) => void;
}
