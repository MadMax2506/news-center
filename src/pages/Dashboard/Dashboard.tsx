import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const Dashboard = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="lg">
      <Helmet>
        <title>{t('meta.pageTitle', { page: t('menu.dashboard') })}</title>
      </Helmet>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{t('menu.dashboard')}</Box>
    </Container>
  );
};
