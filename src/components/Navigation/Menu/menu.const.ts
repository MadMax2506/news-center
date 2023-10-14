import { Dashboard as DashboardIcon, Newspaper as NewspaperIcon, WbSunny as WeatherIcon } from '@mui/icons-material';
import { paths } from '@routes';
import { MenuItem } from './menu.types';

export const MENU_ITEMS: MenuItem[] = [
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
