import { IconButton, Skeleton, Stack } from '@mui/material';
import { FC } from 'react';
import { IMAGE_SIZE } from './ArticleCard';
import { BaseStructure } from './BaseStructure';

const IconButtonSkeleton: FC = () => (
  <IconButton>
    <Skeleton variant="circular" width={24} height={24} />
  </IconButton>
);

export const ArticleCardSkeleton: FC = () => {
  return (
    <BaseStructure>
      <Skeleton variant="rectangular" width="100%" height={IMAGE_SIZE} />
      <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
      <Stack direction="row">
        <IconButtonSkeleton />
        <IconButtonSkeleton />
      </Stack>
    </BaseStructure>
  );
};
