// START: DONT REMOVE THE FOLLOWING IMPORTS
import 'dayjs/locale/de';
import 'dayjs/locale/en';
// END: DONT REMOVE THE FOLLOWING IMPORTS
import { Localization, deDE as muiMaterialDE, enUS as muiMaterialEN } from '@mui/material/locale';
import {
  LocalizationProvider,
  PickersLocaleText,
  deDE as muiDatePickersDE,
  enUS as muiDatePickersEN,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LanguageConfiguration, LanguageTag } from '@types';
import dayjs, { Dayjs } from 'dayjs';
import { PropsWithChildren, createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

type Language = {
  languageTag: LanguageTag;
  muiLocale: Localization;
};

const LanguageContext = createContext<Language | undefined>(undefined);

export const LanguageProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const {
    i18n: { language },
  } = useTranslation();

  const currentLanguage = language as LanguageConfiguration;

  const currentLanguageTag = (): LanguageTag => {
    switch (currentLanguage) {
      case LanguageConfiguration.DE:
        return LanguageTag.DE_DE;
      default:
        return LanguageTag.EN_US;
    }
  };

  const currentMuiLocale = (): Localization => {
    switch (currentLanguage) {
      case LanguageConfiguration.DE:
        return muiMaterialDE;
      default:
        return muiMaterialEN;
    }
  };

  const currentDayJsLocale = (): string => {
    switch (currentLanguage) {
      case LanguageConfiguration.DE:
        return dayjs.locale('de');
      default:
        return dayjs.locale('en');
    }
  };

  const currentMuiDatePickerLocaleTexts = (): Partial<PickersLocaleText<Dayjs>> => {
    switch (currentLanguage) {
      case LanguageConfiguration.DE:
        return muiDatePickersDE.components.MuiLocalizationProvider.defaultProps.localeText;
      default:
        return muiDatePickersEN.components.MuiLocalizationProvider.defaultProps.localeText;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        languageTag: currentLanguageTag(),
        muiLocale: currentMuiLocale(),
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={currentDayJsLocale()}
        localeText={currentMuiDatePickerLocaleTexts()}
      >
        {children}
      </LocalizationProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): Language => {
  const context = useContext<Language | undefined>(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
