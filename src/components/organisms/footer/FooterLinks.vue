<template>
  <nav aria-label="Footer Navigation">
    <ul class="space-y-2 text-center">
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          class="hover:underline transition duration-200"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const links = computed(() => [
  { label: t('footer.links.home'), href: '/' },
  { label: t('footer.links.about'), href: '/about' },
  { label: t('footer.links.contact'), href: '/contact' }
]);
</script>
