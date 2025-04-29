<template>
  <select
    v-model="currentLocale"
    @change="changeLocale"
    class="rounded-md border px-2 py-1 text-sm"
  >
    <option v-for="(label, code) in locales" :key="code" :value="code">
      {{ label }}
    </option>
  </select>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

const { locale } = useI18n();

const locales = {
  en: 'English',
  de: 'Deutsch'
};

const currentLocale = ref(locale.value);

const changeLocale = () => {
  locale.value = currentLocale.value;
  localStorage.setItem('locale', currentLocale.value);
};

// Watch in case external change occurs
watch(locale, (newLocale) => {
  currentLocale.value = newLocale;
});
</script>
