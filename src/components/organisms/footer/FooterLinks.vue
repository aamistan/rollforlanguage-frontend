<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const links = [
  { label: t('footer.links.home'), href: '/' },
  { label: t('footer.links.about'), href: '/about' },
  { label: t('footer.links.contact'), href: '/contact' }
  // Add more links as needed
]
</script>

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
