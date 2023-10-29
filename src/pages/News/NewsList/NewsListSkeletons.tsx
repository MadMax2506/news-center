import { ArticleCardSkeleton } from '@components/ArticleCard';
import { DelayedComponent } from '@components/DelayedComponent';
import { FC } from 'react';
import { BaseStructure } from './BaseStructure';

type NewsListSkeletionsProps = {
  pageSize: number;
};

export const NewsListSkeletions: FC<NewsListSkeletionsProps> = ({ pageSize }) => (
  <DelayedComponent delay={0}>
    <BaseStructure>
      {new Array(pageSize).fill(null).map((_, index) => (
        <ArticleCardSkeleton key={index} />
      ))}
    </BaseStructure>
  </DelayedComponent>
);
