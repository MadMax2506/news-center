import { CssBaseline, ThemeProvider as MuiThemeProvider, PaletteMode, ScopedCssBaseline } from '@mui/material';
import { FC, PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { darkTheme, lightTheme } from './theme';

const defaultMode = (): PaletteMode => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

type Theme = {
  mode: PaletteMode;
  toggleMode: () => void;
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider: FC = (props: PropsWithChildren) => {
  const { children } = props;

  const [cookies, setCookie] = useCookies(['theme-mode']);
  const [mode, setMode] = useState<PaletteMode>(cookies['theme-mode'] ?? defaultMode());

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  const toggleMode = () => setMode((prevState) => (prevState === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    if (cookies['theme-mode'] === mode) return;
    setCookie('theme-mode', mode);
  }, [mode, cookies]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <CssBaseline />
          {children}
        </ScopedCssBaseline>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): Theme => {
  const context = useContext<Theme | undefined>(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
