import { DEFAULT_NS } from 'src/app/i18n';
import type articleDe from '../../public/locales/de/article.json';
import type commonDe from '../../public/locales/de/common.json';
import type weatherDe from '../../public/locales/de/weather.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: {
      common: typeof commonDe;
      article: typeof articleDe;
      weather: typeof weatherDe;
    };
  }
}
