<template>
    <div class="relative inline-block">
      <label for="locale-select" class="sr-only">
        {{ $t('navbar.language') || 'Select Language' }}
      </label>
      <select
        id="locale-select"
        v-model="currentLocale"
        @change="changeLocale"
        class="rounded-md border border-gray-300 bg-white py-1.5 px-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 transition-all"
      >
        <option
          v-for="(localeData, code) in locales"
          :key="code"
          :value="code"
          class="flex items-center"
        >
        {{ localeData.flag }} {{ localeData.label }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import { ref, watch } from 'vue';
  
  const { locale } = useI18n();
  
  // Define available locales
  const locales = {
    en: { label: 'English', flag: '🇺🇸' },
    de: { label: 'Deutsch', flag: '🇩🇪' },
    // Future expansion: simply add more here
    // fr: { label: 'Français', flag: '🇫🇷' },
  };
  
  // Track current locale
  const currentLocale = ref(locale.value);
  
  // Update both i18n and localStorage
  const changeLocale = () => {
    locale.value = currentLocale.value;
    localStorage.setItem('locale', currentLocale.value);
  };
  
  // Watch external changes
  watch(locale, (newLocale) => {
    currentLocale.value = newLocale;
  });
  </script>
  
  <style scoped>
  select:focus {
    outline: none;
  }
  </style>
  