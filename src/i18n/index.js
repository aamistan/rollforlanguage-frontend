// /src/i18n/index.js
import { createI18n } from 'vue-i18n';

const getUserLocale = () => {
  const saved = localStorage.getItem('locale');
  if (saved) return saved;

  const browser = navigator.language.split('-')[0];
  return ['en', 'de'].includes(browser) ? browser : 'en';
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
