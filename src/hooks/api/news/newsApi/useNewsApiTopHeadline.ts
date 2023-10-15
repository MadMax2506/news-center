import { UseBaseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Simplify } from 'type-fest';
import { newsQueryKeyFactory } from './news-api.query-key-factory';
import { Article, BaseResponse, Categories, Countries } from './news-api.types';
import { useNewsApiFetcher } from './useNewsApiFetcher';

export type QueryParams = Simplify<
  {
    q?: string;
    pageSize?: number;
    page?: number;
  } & (
    | {
        country: Countries;
        category?: Categories;
        sources?: never;
      }
    | {
        country?: never;
        category?: never;
        sources: string[];
      }
  )
>;

type Response = BaseResponse<{ totalResults: number; articles: Article[] }>;

export type UseNewsApiTopHeadlineProps = Simplify<
  Pick<UseBaseQueryOptions, 'suspense' | 'enabled' | 'initialData'> & {
    queryParams: QueryParams;
  }
>;

export const useNewsApiTopHeadline = (props: UseNewsApiTopHeadlineProps): UseQueryResult<Article[]> => {
  const { queryParams, ...options } = props;

  const { fetcher } = useNewsApiFetcher<Response, QueryParams>();

  return useQuery({
    ...options,
    queryKey: newsQueryKeyFactory.topHeadline(queryParams),
    queryFn: async ({ signal }) => {
      const response = await fetcher({ url: 'top-headlines', params: queryParams, config: { signal } });

      if (response.status === 'error') throw new Error(response.message);
      return response.articles;
    },
  });
};
