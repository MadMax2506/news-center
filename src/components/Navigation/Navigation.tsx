import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DesktopMenu, MobileMenu, ToggleDrawerFunction } from './Menu';
import { SearchInput } from './SearchInput';

export const Navigation = (): JSX.Element => {
  const { t } = useTranslation();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer: ToggleDrawerFunction = (open) => (event) => {
    if (event.type === 'keydown' && ['Tab', 'Shift'].includes((event as KeyboardEvent).key)) return;
    setOpenDrawer(open);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} size="large" edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            {t('meta.title')}
          </Typography>

          <SearchInput />
        </Toolbar>

        <DesktopMenu openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
        <MobileMenu openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      </AppBar>
    </Box>
  );
};
