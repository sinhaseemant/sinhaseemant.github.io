import i18n from 'i18next';
import en from './en/common.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        load: 'languageOnly',
        debug: false,
        resources: {
            en: {
                translation: en,
            },
        },
        detection : {
            // order and from where user language should be detected
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
            // keys or params to lookup language from
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupSessionStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,
            // cache user language on
            caches: ['localStorage', 'cookie'],
            excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
            // optional htmlTag with lang attribute, the default is:
            htmlTag: document.documentElement,
        }
    });

export default i18n;