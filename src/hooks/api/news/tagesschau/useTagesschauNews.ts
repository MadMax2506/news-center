import { BaseApiQueryProps } from '@hooks/api/api.types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
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
  BaseApiQueryProps & {
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
        signal,
      });
    },
    ...options,
  });
};
