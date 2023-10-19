import { ArticleCardSkeleton } from '@components/ArticleCard';
import { DelayedComponent } from '@components/DelayedComponent';
import { FC } from 'react';
import { BaseStructure } from './BaseStructure';

export type SkeletonsProps = {
  pageSize: number;
};

export const Skeletons: FC<SkeletonsProps> = ({ pageSize }): JSX.Element => (
  <DelayedComponent delay={800}>
    <BaseStructure>
      {new Array(pageSize).fill(null).map((_, index) => (
        <ArticleCardSkeleton key={index} />
      ))}
    </BaseStructure>
  </DelayedComponent>
);
