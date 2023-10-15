import { AxiosRequestConfig } from 'axios';

export type FetcherProps<TParams> = {
  url: string;
  params?: TParams;
  config?: AxiosRequestConfig;
};
