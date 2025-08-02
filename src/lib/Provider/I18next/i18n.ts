import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './data';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        supportedLngs: ['en'],
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            bindI18n: 'languageChanged',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
            useSuspense: true,
        },
        debug: process.env.NODE_ENV === 'development',
    });

export default i18n;
