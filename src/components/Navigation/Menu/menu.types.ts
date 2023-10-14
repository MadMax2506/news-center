import { SvgIconComponent } from '@mui/icons-material';
import { KeyboardEvent, MouseEvent } from 'react';

export type ToggleDrawerFunction = (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;

export type BaseMenuProps = {
  openDrawer: boolean;
  toggleDrawer: ToggleDrawerFunction;
};

export type MenuItem = {
  textKey: 'menu.dashboard' | 'menu.news' | 'menu.weather';
  icon: SvgIconComponent;
  path: string;
};
