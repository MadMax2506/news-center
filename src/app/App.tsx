import { ErrorFallbackPageProps } from '@components/ErrorFallbackPage';
import { LanguageProvider } from '@context/LanguageContext';
import { ThemeProvider } from '@context/ThemeContext';
import { Routes } from '@routes';
import { CookiesProvider } from 'react-cookie';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const App = () => {
  return (
    <CookiesProvider>
      <LanguageProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackPageProps}>
          <ThemeProvider>
            <MetaData />
            <Routes />
          </ThemeProvider>
        </ErrorBoundary>
      </LanguageProvider>
    </CookiesProvider>
  );
};

export const MetaData = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{t('meta.title')}</title>
    </Helmet>
  );
};
