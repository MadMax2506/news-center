import { ArticleCardSkeleton } from '@components/ArticleCard';
import { FC } from 'react';
import { BaseStructure } from './BaseStructure';

type NewsListSkeletionsProps = {
  pageSize: number;
};

export const NewsListSkeletions: FC<NewsListSkeletionsProps> = ({ pageSize }) => (
  <BaseStructure>
    {new Array(pageSize).fill(null).map((_, index) => (
      <ArticleCardSkeleton key={index} />
    ))}
  </BaseStructure>
);
