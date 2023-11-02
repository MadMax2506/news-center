import { Box, Drawer } from '@mui/material';
import { FC } from 'react';
import { MenuBody } from './MenuBody';
import { BaseMenuProps } from './menu.types';

export const MobileMenu: FC<BaseMenuProps> = ({ openDrawer, toggleDrawer }) => {
  return (
    <Drawer
      anchor={'bottom'}
      open={openDrawer}
      onClose={toggleDrawer(false)}
      sx={{ display: { xs: 'block', sm: 'none' } }}
    >
      <Box sx={{ width: 'auto' }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <MenuBody isMobile={true} />
      </Box>
    </Drawer>
  );
};
