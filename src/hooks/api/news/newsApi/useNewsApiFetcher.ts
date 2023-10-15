import qs from 'qs';
import { FetcherProps, request } from '../../request';

export const useNewsApiFetcher = <TRes, TParams = void>() => {
  const fetcher = async ({ url, params, config }: FetcherProps<TParams>) => {
    return await request<TRes>(`https://newsapi.org/v2/${url}`, {
      ...config,
      method: 'GET',
      params: {
        ...params,
        apiKey: import.meta.env.VITE_NEWS_API_KEY,
      },
      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true }),
      },
    });
  };

  return { fetcher };
};
