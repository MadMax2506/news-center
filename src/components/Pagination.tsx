import { usePaginationContext } from '@context/PaginationContext';
import { Pagination as MuiPagination } from '@mui/material';
import { FC } from 'react';

export const Pagination: FC = <TData,>() => {
  const { handlePageChange, page, numberOfPages } = usePaginationContext<TData>();

  return <MuiPagination count={numberOfPages} page={page} onChange={handlePageChange} />;
};
