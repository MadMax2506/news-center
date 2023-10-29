import { Box, Stack, Typography, useTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { TodoLink } from './TodoLink';
import { TodoTitle } from './TodoTitle';

type TodoProps = {
  title?: string;
  ticketId?: number;
};

export const Todo: FC<PropsWithChildren<TodoProps>> = (props) => {
  const theme = useTheme();

  // don't do anything on non-dev or testing environements
  if (import.meta.env.PROD) return null;

  const { ticketId, children, title } = props;

  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        padding: 1,
        border: `1px solid ${theme.palette.grey[400]}`,
        justifyContent: 'center',
      }}
    >
      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        <Typography>🚧</Typography>
        <TodoTitle>{title ?? 'TODO / WIP'}</TodoTitle>
      </Stack>

      <Stack direction="column" alignItems="center" flex={1}>
        {children && <Box>{children}</Box>}
        <Stack direction="row" spacing={2}>
          {ticketId && <TodoLink type="ticket" ticketId={ticketId} />}
        </Stack>
      </Stack>
    </Stack>
  );
};
