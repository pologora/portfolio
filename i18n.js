import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './languages/en.json';
import plTranslation from './languages/pl.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: enTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  },
});

export default i18next;
