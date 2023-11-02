import { Box, Drawer } from '@mui/material';
import { FC } from 'react';
import { MenuBody } from './MenuBody';
import { BaseMenuProps } from './menu.types';

type DesktopMenuProps = BaseMenuProps;

export const DesktopMenu: FC<DesktopMenuProps> = ({ openDrawer, toggleDrawer }) => {
  return (
    <Drawer
      anchor={'left'}
      open={openDrawer}
      onClose={toggleDrawer(false)}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <MenuBody />
      </Box>
    </Drawer>
  );
};
