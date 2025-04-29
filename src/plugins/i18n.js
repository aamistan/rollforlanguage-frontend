import { createI18n } from 'vue-i18n';

// Supported languages
const SUPPORTED_LOCALES = ['en', 'de'];

// Utility: get user's preferred locale
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

// Map of dynamic imports (static, known)
const localeImports = {
  en: () => import('@/i18n/locales/en.json'),
  de: () => import('@/i18n/locales/de.json')
};

// Safely load locale messages
const loadLocaleMessages = async (locale) => {
  try {
    const loader = localeImports[locale];
    if (!loader) throw new Error(`No loader function found for locale: ${locale}`);
    const module = await loader();

    const messages = module?.default || module;

    if (typeof messages !== 'object' || messages === null) {
      throw new Error(`Invalid message format for locale: ${locale}`);
    }

    return messages;
  } catch (error) {
    console.error(`[i18n error] Failed to load messages for locale "${locale}":`, error);
    return {};
  }
};

// Initialize i18n instance
const createI18nInstance = async () => {
  const locale = getUserLocale();
  const messages = await loadLocaleMessages(locale);

  if (Object.keys(messages).length === 0) {
    console.error(`[i18n critical] No valid messages loaded for locale: ${locale}`);
    throw new Error('Cannot create i18n instance: messages object invalid.');
  }

  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: {
      [locale]: messages
    },
    globalInjection: true,
    warnHtmlMessage: false,
    missingWarn: import.meta.env.DEV,
    fallbackWarn: import.meta.env.DEV
  });
};

export { createI18nInstance };
