import { PaginationProvider } from '@context/PaginationContext';
import { Article, Regions, useTagesschauNews } from '@hooks/api/news';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { NewsList } from './NewsList';

const PAGE_SIZE = 20;

export const News = (): JSX.Element => {
  const { t } = useTranslation();

  const { data, isError } = useTagesschauNews({
    // TODO https://github.com/MadMax2506/news-center/issues/17
    queryParams: { region: Regions.NORTHRHINE_WESTPHALIA },
  });
  const { news = [] } = { ...data };
  const filteredNews = news.filter(({ shareURL, detailsweb }) => shareURL || detailsweb);

  return (
    <Container component="main" maxWidth="xl" sx={{ py: 2 }}>
      <Helmet>
        <title>{t('meta.pageTitle', { page: t('menu.news') })}</title>
      </Helmet>

      <PaginationProvider<Article> data={filteredNews} isError={isError} pageSize={PAGE_SIZE}>
        <NewsList pageSize={PAGE_SIZE} />
      </PaginationProvider>
    </Container>
  );
};
