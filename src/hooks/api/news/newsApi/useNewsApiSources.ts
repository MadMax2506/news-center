import { UseBaseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Simplify } from 'type-fest';
import { newsQueryKeyFactory } from './news-api.query-key-factory';
import { BaseResponse, Categories, Countries, Languages, Source } from './news-api.types';
import { useNewsApiFetcher } from './useNewsApiFetcher';

export type SourcesQueryParams = {
  category?: Categories;
  language?: Languages;
  country?: Countries;
};

type Response = BaseResponse<{ sources: Source[] }>;

type UseNewsApiSourcesProps = Simplify<
  Pick<UseBaseQueryOptions, 'suspense' | 'enabled' | 'initialData'> & {
    queryParams?: SourcesQueryParams;
  }
>;

export const useNewsApiSources = (props?: UseNewsApiSourcesProps): UseQueryResult<Source[]> => {
  const { queryParams, ...options } = { ...props };

  const { fetcher } = useNewsApiFetcher<Response, SourcesQueryParams>();

  return useQuery({
    ...options,
    queryKey: newsQueryKeyFactory.sourcesByParams(queryParams),
    queryFn: async ({ signal }) => {
      const response = await fetcher({ url: 'sources', params: queryParams, config: { signal } });

      if (response.status === 'error') throw new Error(response.message);
      return response.sources;
    },
  });
};
