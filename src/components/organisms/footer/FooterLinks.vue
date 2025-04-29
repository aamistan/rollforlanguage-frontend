<template>
  <nav aria-label="Footer Navigation">
    <ul class="space-y-2 text-center">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" class="hover:underline transition duration-200">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
</script>