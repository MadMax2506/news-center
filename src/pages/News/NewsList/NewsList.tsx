import { PaginationProvider } from '@context/PaginationContext';
import { Article, Regions, useTagesschauNews } from '@hooks/api/news';
import { Alert } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_SIZE } from '../News';
import { Content } from './Content';

export const NewsList: FC = () => {
  const { t } = useTranslation(['article']);

  const { data, isError } = useTagesschauNews({
    // TODO https://github.com/MadMax2506/news-center/issues/17
    queryParams: { region: Regions.NORTHRHINE_WESTPHALIA },
  });

  if (isError) {
    return (
      <Alert severity="error" sx={{ width: '100%' }}>
        {t('message.error')}
      </Alert>
    );
  }

  const { news = [] } = data ?? {};
  const filteredNews = news.filter(({ shareURL, detailsweb }) => Boolean(shareURL) || Boolean(detailsweb));

  return (
    <PaginationProvider<Article> data={filteredNews} isError={isError} pageSize={PAGE_SIZE}>
      <Content />
    </PaginationProvider>
  );
};
