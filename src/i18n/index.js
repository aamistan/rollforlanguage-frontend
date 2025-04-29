import { createI18n } from 'vue-i18n';

const SUPPORTED_LOCALES = ['en', 'de'];

const getUserLocale = () => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = navigator.language.split('-')[0];
  if (SUPPORTED_LOCALES.includes(browserLocale)) {
    return browserLocale;
  }

  return 'en';
};

// Lazy-load only the active locale file
const loadLocaleMessages = async (locale) => {
  try {
    const messages = await import(`./${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {};
  }
};

// Create and initialize i18n instance
const createI18nInstance = async () => {
  const locale = getUserLocale();
  const messages = {
    [locale]: await loadLocaleMessages(locale)
  };

  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages,
    globalInjection: true,
    warnHtmlMessage: false,
    missingWarn: import.meta.env.DEV,
    fallbackWarn: import.meta.env.DEV
  });  
};

export { createI18nInstance };
