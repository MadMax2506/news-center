import { PaletteOptions } from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { Theme, ThemeOptions } from '@mui/material/styles/createTheme';

export const generalSettings: Omit<ThemeOptions, 'palette' | 'components'> = {};

export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      fullWidth: true,
    },
  },
};

export const palette: Omit<PaletteOptions, 'mode'> = {};

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions {}
}
