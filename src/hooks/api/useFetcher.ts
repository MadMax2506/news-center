type FetcherType = 'newsApi';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import qs from 'qs';

const getBaseUrl = (type: FetcherType) => {
  switch (type) {
    case 'newsApi':
      return 'https://newsapi.org/v2';
    default:
      throw new Error(`Unknown fetcher type: ${type}`);
  }
};

const getHeaders = (type: FetcherType) => {
  switch (type) {
    case 'newsApi':
      return {};
    default:
      throw new Error(`Unknown fetcher type: ${type}`);
  }
};

async function request<TResponse>(url: string, config: Omit<AxiosRequestConfig, 'url' | 'validateStatus'>) {
  const response = await axios.request<TResponse, AxiosResponse<TResponse>>({
    ...config,
    url,
    validateStatus: () => true,
    paramsSerializer: {
      serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
    },
  });

  if (response.status === 400) throw new Error('Bad Request');
  if (response.status === 401) throw new Error('Unauthorized');
  if (response.status === 403) throw new Error('Forbidden');
  if (response.status === 404) throw new Error('Not Found');

  if (response.status >= 200 && response.status < 300) return response.data;

  throw new Error('Internal server error');
}

type UseFetcherProps = {
  type: FetcherType;
  handleError?: (error: unknown) => void;
};

export const useFetcher = <TRes, TParams = void>({ type, handleError }: UseFetcherProps) => {
  return async (url: string, params?: TParams, config?: AxiosRequestConfig) => {
    try {
      return await request<TRes>(`${getBaseUrl(type)}/${url}`, {
        ...config,
        method: 'GET',
        params,
        paramsSerializer: {
          serialize: (params) =>
            qs.stringify(params, {
              arrayFormat: 'repeat',
              skipNulls: true,
            }),
        },
        headers: getHeaders(type),
      });
    } catch (e) {
      if (handleError) {
        handleError(e);
      } else {
        throw e;
      }

      return null;
    }
  };
};
