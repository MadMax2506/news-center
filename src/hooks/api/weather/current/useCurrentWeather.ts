import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Simplify } from 'type-fest';
import { BaseApiQueryProps } from '../../api.types';
import { request } from '../../request';
import { OPEN_WEATHER_API_V2 } from '../weather.const';
import {
  BaseWeatherInformation,
  Clouds,
  Coordinates,
  EnvironmentInformation,
  Precipitation,
  Weather,
  Wind,
} from '../weather.types';

type CurrentWeatherQueryParams = {
  lat: number;
  lon: number;
  units?: 'metric' | 'imperial';
  lang?: 'de';
};

export type CurrentWeatherResponse = {
  cod: number;
  coord: Coordinates;
  weather: Weather[];
  main: BaseWeatherInformation;
  visibility: number;
  wind: Wind;
  rain?: Precipitation;
  snow?: Precipitation;
  clouds: Clouds;
  sys: EnvironmentInformation;
};

type UseCurrentWeatherProps = Simplify<
  BaseApiQueryProps & {
    queryParams: CurrentWeatherQueryParams;
  }
>;

export const currentWeatherCacheKey = (queryParams: CurrentWeatherQueryParams) => [
  'openweather',
  'current-weather',
  queryParams,
];

export const useCurrentWeather = (
  props: UseCurrentWeatherProps
): UseQueryResult<CurrentWeatherResponse, CurrentWeatherQueryParams> => {
  const { queryParams, ...options } = props;

  return useQuery<CurrentWeatherResponse, CurrentWeatherQueryParams>({
    queryKey: currentWeatherCacheKey(queryParams),
    queryFn: async ({ signal }) => {
      return await request<CurrentWeatherResponse>(`${OPEN_WEATHER_API_V2}/weather`, {
        method: 'GET',
        params: {
          units: 'metric',
          lang: 'de',
          ...queryParams,
          appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        },
        signal,
      });
    },
    ...options,
  });
};
