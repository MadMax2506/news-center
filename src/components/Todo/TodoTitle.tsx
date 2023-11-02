import { Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const TodoTitle: FC<PropsWithChildren> = ({ children }) => (
  <Typography letterSpacing={0.5} fontWeight={800} textTransform="capitalize">
    {children}
  </Typography>
);
