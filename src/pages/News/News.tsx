import { Container } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { NewsList } from './NewsList';

export const News = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xl" sx={{ py: 2 }}>
      <Helmet>
        <title>{t('meta.pageTitle', { page: t('menu.news') })}</title>
      </Helmet>

      <NewsList newsArticles={newsArticles} />
    </Container>
  );
};
