<template>
  <aside class="w-64 bg-black bg-opacity-60 h-full p-4 flex flex-col gap-6">
    <!-- Context-specific tools injected here -->
    <slot name="tools" />
  </aside>
</template>

<script setup lang="ts">
// No logic → pure presentational container
</script>

<style scoped>
/* Optional: you can keep/remove styles depending on need */
</style>
