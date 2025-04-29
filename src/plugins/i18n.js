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

// Map of static imports
const localeImports = {
  en: () => import('@/i18n/locales/en.json'),
  de: () => import('@/i18n/locales/de.json')
};

const loadLocaleMessages = async (locale) => {
  try {
    const loader = localeImports[locale];
    if (!loader) throw new Error(`No loader found for locale: ${locale}`);
    const messagesModule = await loader();
    
    // Defend against weird wrapping
    const messages = messagesModule.default || messagesModule;
    if (typeof messages !== 'object' || messages === null) {
      throw new Error(`Invalid message format loaded for locale: ${locale}`);
    }

    return messages;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {};
  }
};

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
