import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

export const request = async <TRes>(url: string, config: Omit<AxiosRequestConfig, 'url' | 'validateStatus'>) => {
  const response = await axios.request<TRes, AxiosResponse<TRes>>({
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
};
