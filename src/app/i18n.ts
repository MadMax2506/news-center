import { DEFAULT_NS, LanguageConfiguration } from '@types';
import i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: LanguageConfiguration.DE,
    supportedLngs: [LanguageConfiguration.DE, LanguageConfiguration.EN],
    defaultNS: DEFAULT_NS,
    // Namespaces are lazy loaded using `useTranslation'.
    ns: ['common'],
    fallbackNS: DEFAULT_NS,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage', 'querystring', 'navigator'],
    },
  });
