import { UseQueryResult } from '@tanstack/react-query';
import { once } from 'lodash';
import { ChangeEvent, createContext, PropsWithChildren, useContext, useState } from 'react';
import { Simplify } from 'type-fest';

const DEFAULT_PAGE_SIZE = 10;

type HandlePageChangeFunction = (_: ChangeEvent<unknown>, value: number) => void;

type Pagination<TData> = Simplify<
  Required<Omit<PaginationProviderProps<TData>, 'data' | 'pageSize'>> & {
    paginatedData: TData[];
    numberOfPages: number;
    page: number;
    handlePageChange: HandlePageChangeFunction;
  }
>;

const createPaginationContext = once(<TData,>() => createContext<Pagination<TData> | undefined>(undefined));

type PaginationProviderProps<TData> = Simplify<
  Pick<UseQueryResult, 'isError'> & {
    data: TData[];
    pageSize?: number;
  }
>;

export const PaginationProvider = <TData,>(props: PropsWithChildren<PaginationProviderProps<TData>>) => {
  const { children, data, pageSize = DEFAULT_PAGE_SIZE, ...rest } = props;

  const totalElements = data.length;
  const numberOfPages = Math.ceil(totalElements / pageSize);

  const [pageIndex, setPageIndex] = useState<number>(0);

  const paginatedData = data.slice(pageIndex * pageSize, Math.min((pageIndex + 1) * pageSize, totalElements));
  const handlePageChange: HandlePageChangeFunction = (_, value) => setPageIndex(value - 1);

  const PaginationContext = createPaginationContext<TData>();
  return (
    <PaginationContext.Provider
      value={{ ...rest, paginatedData, numberOfPages, page: pageIndex + 1, handlePageChange }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = <TData,>(): Pagination<TData> => {
  const PaginationContext = createPaginationContext<TData>();
  const context = useContext<Pagination<TData> | undefined>(PaginationContext);
  if (context === undefined) {
    throw new Error('usePaginationContext must be used within a PaginationProvider');
  }
  return context;
};
