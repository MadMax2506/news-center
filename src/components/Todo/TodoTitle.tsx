import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export function TodoTitle(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return (
    <Typography letterSpacing={0.5} fontWeight={800} textTransform="capitalize">
      {children}
    </Typography>
  );
}
