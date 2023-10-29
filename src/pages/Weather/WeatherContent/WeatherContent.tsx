import { WeatherCard } from '@components/WeatherCard/WeatherCard';
import { useCurrentWeather } from '@hooks/api/weather';
import { useCurrentAirPollution } from '@hooks/api/weather/current/useCurrentAirPollution';
import { Alert } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { WeatherContentSkeletons } from './WeatherContentSkeletons';

export const WeatherContent: FC = () => {
  const { t } = useTranslation(['weather']);

  const {
    data: currentWeather,
    isError: isErrorCurrentWeather,
    isLoading: isLoadingCurrentWeather,
  } = useCurrentWeather({
    // TODO https://github.com/MadMax2506/news-center/issues/17
    queryParams: {
      lat: 50.88072427159693,
      lon: 6.098109855214391,
    },
  });
  const {
    data: currentAirPollution,
    isError: isErrorCurrentAirPollution,
    isLoading: isLoadingCurrentAirPollution,
  } = useCurrentAirPollution({
    // TODO https://github.com/MadMax2506/news-center/issues/17
    queryParams: {
      lat: 50.88072427159693,
      lon: 6.098109855214391,
    },
  });

  if (isLoadingCurrentWeather || isLoadingCurrentAirPollution) return <WeatherContentSkeletons />;
  if (isErrorCurrentWeather || isErrorCurrentAirPollution) {
    return (
      <Alert severity="error" sx={{ width: '100%' }}>
        {t('message.error')}
      </Alert>
    );
  }

  const { weather, ...restCurrentWeatherData } = currentWeather;

  return (
    <WeatherCard>
      <WeatherCard.CurrentWeather
        weather={weather[0]}
        airPollution={currentAirPollution.list[0]}
        {...restCurrentWeatherData}
      />
    </WeatherCard>
  );
};
