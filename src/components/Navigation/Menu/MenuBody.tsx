import { Dashboard as DashboardIcon, Newspaper as NewspaperIcon, WbSunny as WeatherIcon } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { paths } from '@routes';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from './menu.types';

type MenuBodyProps = {
  isMobile?: boolean;
};

const generateMenuItems = (): MenuItem[] => [
  {
    textKey: 'menu.dashboard',
    icon: DashboardIcon,
    path: paths.root.pattern,
  },
  {
    textKey: 'menu.news',
    icon: NewspaperIcon,
    path: paths.news.pattern,
  },
  {
    textKey: 'menu.weather',
    icon: WeatherIcon,
    path: paths.weather.pattern,
  },
];

export const MenuBody: FC<MenuBodyProps> = ({ isMobile = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <List sx={isMobile ? { my: 6 } : { mt: 2, mx: 3 }}>
      {generateMenuItems().map(({ textKey, icon: Icon, path }) => (
        <ListItem key={textKey} disablePadding onClick={() => navigate(path)}>
          <ListItemButton>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>

            <ListItemText primary={t(textKey)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
