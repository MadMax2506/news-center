import { ArticleCard } from '@components/ArticleCard';
import { Pagination } from '@components/Pagination';
import { usePaginationContext } from '@context/PaginationContext';
import { Article } from '@hooks/api/news';
import { Alert, Stack } from '@mui/material';
import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseStructure } from './BaseStructure';
import { Skeletons, SkeletonsProps } from './Skeletons';

type NewsListProps = SkeletonsProps;

export const NewsList: FC<NewsListProps> = ({ pageSize }): JSX.Element => {
  const { paginatedData, isError } = usePaginationContext<Article>();

  const { t } = useTranslation(['article']);

  if (isError) {
    return (
      <Alert severity="error" sx={{ width: '100%' }}>
        {t('message.error')}
      </Alert>
    );
  }

  return (
    <Stack spacing={4} alignItems="center" alignContent="center">
      <Pagination />

      <Suspense fallback={<Skeletons pageSize={pageSize} />}>
        <BaseStructure>
          {paginatedData.map((article) => (
            <ArticleCard key={article.sophoraId} article={article} />
          ))}
        </BaseStructure>
      </Suspense>

      <Pagination />
    </Stack>
  );
};
