import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import fr from '../locales/fr';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      resources: {
        fr,
      },
      fallbackLng: 'fr',
      ns: ['messages'],
      defaultNS: 'messages',
      debug: true,
      interpolation: {
        escapeValue: false, // not needed for react!
      },
    },
    undefined
  );

export * from 'react-i18next';

export default i18n;
