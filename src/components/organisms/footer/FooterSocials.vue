<template>
  <div class="flex space-x-4">
    <a
      v-for="social in socials"
      :key="social.name"
      :href="social.url"
      class="hover:text-primary-500 transition duration-200"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="social.name"
    >
      <!-- <component :is="`icon-${social.icon}`" class="w-6 h-6" /> -->
    </a>
  </div>
</template>

<script setup>
// const socials = [
//   { name: 'GitHub', url: 'https://github.com/', icon: 'github' },
//   { name: 'Twitter', url: 'https://twitter.com/', icon: 'twitter' }
//   // Add more socials as needed
// ]
</script>