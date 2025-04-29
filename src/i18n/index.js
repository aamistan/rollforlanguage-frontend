import { createI18n } from 'vue-i18n';

const SUPPORTED_LOCALES = ['en', 'de'];

const getUserLocale = () => {
  // 1. Check localStorage first
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale;
  }

  // 2. Then check browser language
  const browserLocale = navigator.language.split('-')[0];
  if (SUPPORTED_LOCALES.includes(browserLocale)) {
    return browserLocale;
  }

  // 3. Default fallback
  return 'en';
};

export const i18n = createI18n({
  legacy: false,
  locale: getUserLocale(),
  fallbackLocale: 'en',
  messages: {
    en: () => import('./en.json'),
    de: () => import('./de.json')
  },
  globalInjection: true,
  warnHtmlMessage: false,
});
