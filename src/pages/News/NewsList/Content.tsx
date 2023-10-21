import { ArticleCard } from '@components/ArticleCard';
import { Pagination } from '@components/Pagination';
import { usePaginationContext } from '@context/PaginationContext';
import { Article } from '@hooks/api/news';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { BaseStructure } from './BaseStructure';

export const Content: FC = (): JSX.Element => {
  const { paginatedData } = usePaginationContext<Article>();

  return (
    <Stack spacing={4} alignItems="center" alignContent="center">
      <Pagination />

      <BaseStructure>
        {paginatedData.map((article) => (
          <ArticleCard key={article.sophoraId} article={article} />
        ))}
      </BaseStructure>

      <Pagination />
    </Stack>
  );
};
