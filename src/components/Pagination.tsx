import { usePaginationContext } from '@context/PaginationContext';
import { Pagination as MuiPagination } from '@mui/material';

export const Pagination = <TData,>(): JSX.Element => {
  const { handlePageChange, page, numberOfPages } = usePaginationContext<TData>();

  return <MuiPagination count={numberOfPages} page={page} onChange={handlePageChange} />;
};
