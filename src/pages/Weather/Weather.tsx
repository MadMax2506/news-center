import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const Weather = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="lg">
      <Helmet>
        <title>{t('meta.pageTitle', { page: t('menu.weather') })}</title>
      </Helmet>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{t('menu.weather')}</Box>
    </Container>
  );
};
