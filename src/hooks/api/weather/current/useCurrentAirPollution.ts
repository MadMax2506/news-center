import { BaseApiQueryProps } from '@hooks/api/api.types';
import { request } from '@hooks/api/request';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Simplify } from 'type-fest';
import { OPEN_WEATHER_API_V2 } from '../weather.const';
import { BaseAirPollutionInformation, Coordinates, ExtendedAirPollutionInformation } from '../weather.types';

type CurrentAirPollutionQueryParams = {
  lat: number;
  lon: number;
};

export type CurrentAirPollutionResponse = {
  coord: Coordinates;
  list: {
    main: BaseAirPollutionInformation;
    components: ExtendedAirPollutionInformation;
  }[];
};

type UseCurrentAirPollutionProps = Simplify<
  BaseApiQueryProps & {
    queryParams: CurrentAirPollutionQueryParams;
  }
>;

export const currentAirPollutionCacheKey = (queryParams: CurrentAirPollutionQueryParams) => [
  'openweather',
  'current-air-polllution',
  queryParams,
];

export const useCurrentAirPollution = (
  props: UseCurrentAirPollutionProps
): UseQueryResult<CurrentAirPollutionResponse, CurrentAirPollutionQueryParams> => {
  const { queryParams, ...options } = props;

  return useQuery<CurrentAirPollutionResponse, CurrentAirPollutionQueryParams>({
    queryKey: currentAirPollutionCacheKey(queryParams),
    queryFn: async ({ signal }) => {
      return await request<CurrentAirPollutionResponse>(`${OPEN_WEATHER_API_V2}/air_pollution`, {
        method: 'GET',
        params: {
          ...queryParams,
          appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        },
        signal,
      });
    },
    ...options,
  });
};
