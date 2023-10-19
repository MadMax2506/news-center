import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import qs from 'qs';
import { Simplify } from 'type-fest';
import { request } from '../../request';
import { Article, Regions, Type } from './tagesschau.types';

type TagesschauNewsQueryParams = {
  region: Regions;
};

type TagesschauNewsResponse = {
  news: Article[];
  newStoriesCountLink: string;
  type: Type.NEWS_PAGE;
  nextPage: string;
};

type UseTagesschauNewsProps = Simplify<
  Pick<UseQueryOptions, 'suspense' | 'enabled' | 'retry'> & {
    queryParams: TagesschauNewsQueryParams;
  }
>;

export const tagesschauNewsCacheKey = (queryParams: TagesschauNewsQueryParams) => ['tagesschau-news', queryParams];

export const useTagesschauNews = (
  props: UseTagesschauNewsProps
): UseQueryResult<TagesschauNewsResponse, TagesschauNewsQueryParams> => {
  const { queryParams, ...options } = props;

  return useQuery<TagesschauNewsResponse, TagesschauNewsQueryParams>({
    queryKey: tagesschauNewsCacheKey(queryParams),
    queryFn: async ({ signal }) => {
      return await request<TagesschauNewsResponse>(`https://www.tagesschau.de/api2/news`, {
        method: 'GET',
        params: { ...queryParams },
        paramsSerializer: {
          serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true }),
        },
        signal,
      });
    },
    ...options,
  });
};
