import { Container } from '@mui/material';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Countries, useNewsApiTopHeadline } from 'src/hooks/api';
import { NewsArticle, NewsList } from './NewsList';

export const News = (): JSX.Element => {
  const { t } = useTranslation();

  const { data: topHeadLines = [] } = useNewsApiTopHeadline({ queryParams: { country: Countries.GERMANY } });

  const newsArticles = useMemo<NewsArticle[]>(
    () => [...topHeadLines.map((article) => ({ type: 'newsApi', data: article } as NewsArticle))],
    [topHeadLines]
  );

  return (
    <Container component="main" maxWidth="xl" sx={{ py: 2 }}>
      <Helmet>
        <title>{t('meta.pageTitle', { page: t('menu.news') })}</title>
      </Helmet>

      <NewsList newsArticles={newsArticles} />
    </Container>
  );
};
