import { DEFAULT_NS } from 'src/app/i18n';
import type common from '../../public/locales/de/common.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: {
      common: typeof common;
    };
  }
}
