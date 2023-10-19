import { IconButton, Skeleton, Stack } from '@mui/material';
import { IMAGE_SIZE } from './ArticleCard';
import { BaseStructure } from './BaseStructure';

const IconButtonSkeleton = (): JSX.Element => (
  <IconButton>
    <Skeleton variant="circular" width={24} height={24} />
  </IconButton>
);

export const ArticleCardSkeleton = (): JSX.Element => {
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
