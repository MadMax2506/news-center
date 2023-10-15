import { UseBaseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Simplify } from 'type-fest';
import { newsQueryKeyFactory } from './news-api.query-key-factory';
import { Article, BaseResponse, Languages } from './news-api.types';
import { useNewsApiFetcher } from './useNewsApiFetcher';

export type EverythingQueryParams = {
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

type Response = BaseResponse<{ totalResults: number; articles: Article[] }>;

export type UseNewsApiEverythingProps = Simplify<
  Pick<UseBaseQueryOptions, 'suspense' | 'enabled' | 'initialData'> & {
    queryParams: EverythingQueryParams;
  }
>;

export const useNewsApiEverything = (props: UseNewsApiEverythingProps): UseQueryResult<Article[]> => {
  const { queryParams, ...options } = props;

  const { fetcher } = useNewsApiFetcher<Response, EverythingQueryParams>();

  return useQuery({
    ...options,
    queryKey: newsQueryKeyFactory.everything(queryParams),
    queryFn: async ({ signal }) => {
      const response = await fetcher({ url: 'everything', params: queryParams, config: { signal } });

      if (response.status === 'error') throw new Error(response.message);
      return response.articles;
    },
  });
};
