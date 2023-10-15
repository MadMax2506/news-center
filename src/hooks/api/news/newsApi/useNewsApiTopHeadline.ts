import { UseBaseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Simplify } from 'type-fest';
import { useFetcher } from '../../useFetcher';
import { newsQueryKeyFactory } from './news-api.query-key-factory';
import { Article, Categories, Countries, Status } from './news-api.types';

export type QueryParams = Simplify<
  {
    q: string;
    pageSize?: number;
    page?: number;
  } & (
    | {
        country: Countries;
        category: Categories;
        sources?: never;
      }
    | {
        country?: never;
        category?: never;
        sources: string[];
      }
  )
>;

type Response =
  | {
      status: Status;
      totalResults: number;
      articles: Article[];
    }
  | Error;

export type useNewsApiTopHeadlineProps = Simplify<
  Pick<UseBaseQueryOptions, 'suspense' | 'enabled' | 'initialData'> & {
    queryParams: QueryParams;
  }
>;

export const useNewsApiTopHeadline = (props: useNewsApiTopHeadlineProps): UseQueryResult<Response> => {
  const { queryParams } = props;

  const fetcher = useFetcher<Response, QueryParams>({ type: 'newsApi' });

  return useQuery({
    queryKey: newsQueryKeyFactory.topHeadline(queryParams),
    queryFn: async ({ signal }) => {
      // TODO: Implement the API call
    },
  });
};
