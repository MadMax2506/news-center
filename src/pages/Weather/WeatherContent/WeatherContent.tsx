import { WeatherCard } from '@components/WeatherCard/WeatherCard';
import { useCurrentWeather } from '@hooks/api/weather';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WeatherContentSkeletons } from './WeatherContentSkeletons';

export const WeatherContent = (): JSX.Element => {
  const { t } = useTranslation(['weather']);

  const { data, isError, isLoading } = useCurrentWeather({
    // TODO https://github.com/MadMax2506/news-center/issues/17
    queryParams: {
      lat: 50.88072427159693,
      lon: 6.098109855214391,
    },
  });

  if (isLoading) return <WeatherContentSkeletons />;
  if (isError) {
    return (
      <Alert severity="error" sx={{ width: '100%' }}>
        {t('message.error')}
      </Alert>
    );
  }

  const { weather, ...restWeatherData } = data;
  return <WeatherCard weather={weather[0]} {...restWeatherData} />;
};
