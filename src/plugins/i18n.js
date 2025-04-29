import { createI18n } from 'vue-i18n';

// Static map of available languages
const SUPPORTED_LOCALES = ['en', 'de'];

const getUserLocale = () => {
  const saved = localStorage.getItem('locale');
  if (saved && SUPPORTED_LOCALES.includes(saved)) return saved;

  const browser = navigator.language.split('-')[0];
  return SUPPORTED_LOCALES.includes(browser) ? browser : 'en';
};

// Static imports — no risky wildcard
import en from '@/i18n/locales/en.json';
import de from '@/i18n/locales/de.json';

// Static message map
const MESSAGES = { en, de };

export const i18n = createI18n({
  legacy: false,
  locale: getUserLocale(),
  fallbackLocale: 'en',
  messages: MESSAGES,
  globalInjection: true,
  warnHtmlMessage: false,
  missingWarn: import.meta.env.DEV,
  fallbackWarn: import.meta.env.DEV
});
