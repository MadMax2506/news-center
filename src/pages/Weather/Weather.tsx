import { Container } from '@mui/material';
import { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { WeatherContent, WeatherContentSkeletons } from './WeatherContent';

export const Weather: FC = () => {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="md">
      <Helmet>
        <title>{t('meta.pageTitle', { page: t('menu.weather') })}</title>
      </Helmet>

      <Suspense fallback={<WeatherContentSkeletons />}>
        <WeatherContent />
      </Suspense>
    </Container>
  );
};
