import { UseBaseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Simplify } from 'type-fest';
import { useFetcher } from '../../useFetcher';
import { newsQueryKeyFactory } from './news-api.query-key-factory';
import { Article, Error, Languages, Status } from './news-api.types';

export type QueryParams = {
  q: string;
  searchIn?: ('title' | 'description' | 'content')[];
  sources?: string;
  domains?: string[];
  excludeDomains?: string[];
  from?: Date;
  to?: Date;
  language?: Languages;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  pageSize?: number;
  page?: number;
};

type Response =
  | {
      status: Status.OK;
      totalResults: number;
      articles: Article[];
    }
  | Error;

export type UseNewsApiEverythingProps = Simplify<
  Pick<UseBaseQueryOptions, 'suspense' | 'enabled' | 'initialData'> & {
    queryParams: QueryParams;
  }
>;

export const useNewsApiEverything = (props: UseNewsApiEverythingProps): UseQueryResult<Response> => {
  const { queryParams } = props;

  const fetcher = useFetcher<Response, QueryParams>({ type: 'newsApi' });

  return useQuery({
    queryKey: newsQueryKeyFactory.everything(queryParams),
    queryFn: async ({ signal }) => {
      // TODO: Implement the API call
    },
  });
};
