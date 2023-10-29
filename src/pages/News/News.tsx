import { Container } from '@mui/material';
import { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { NewsList, NewsListSkeletions } from './NewsList';

export const PAGE_SIZE = 20;

export const News: FC = () => {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xl" sx={{ py: 2 }}>
      <Helmet>
        <title>{t('meta.pageTitle', { page: t('menu.news') })}</title>
      </Helmet>

      <Suspense fallback={<NewsListSkeletions pageSize={PAGE_SIZE} />}>
        <NewsList />
      </Suspense>
    </Container>
  );
};
