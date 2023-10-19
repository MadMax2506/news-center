import { DEFAULT_NS } from 'src/app/i18n';
import type articleDe from '../../public/locales/de/article.json';
import type commonDe from '../../public/locales/de/common.json';
import type articleEn from '../../public/locales/en/article.json';
import type commonEn from '../../public/locales/en/common.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: {
      common: typeof commonDe & typeof commonEn;
      article: typeof articleDe & typeof articleEn;
    };
  }
}
