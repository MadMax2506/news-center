import { UseBaseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Simplify } from 'type-fest';
import { useFetcher } from '../../useFetcher';
import { newsQueryKeyFactory } from './news-api.query-key-factory';
import { Categories, Countries, Languages, Source, Status } from './news-api.types';

export type QueryParams = {
  category?: Categories;
  language?: Languages;
  country?: Countries;
};

type Response =
  | {
      status: Status;
      sources: Source[];
    }
  | Error;

type UseNewsApiSourcesProps = Simplify<
  Pick<UseBaseQueryOptions, 'suspense' | 'enabled' | 'initialData'> & {
    queryParams: QueryParams;
  }
>;

export const useNewsApiSources = (props: UseNewsApiSourcesProps): UseQueryResult<Response> => {
  const { queryParams } = props;

  const fetcher = useFetcher<Response, QueryParams>({ type: 'newsApi' });

  return useQuery({
    queryKey: newsQueryKeyFactory.sources(queryParams),
    queryFn: async ({ signal }) => {
      // TODO: Implement the API call
    },
  });
};
