<template>
  <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <!-- Topbar Component -->
    <Topbar />

    <!-- Sidebar + Main Content -->
    <div class="flex">
      <!-- Sidebar Component -->
      <Sidebar />

      <!-- Main content area -->
      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Sidebar from './Sidebar.vue'
import Topbar from './Topbar.vue'

const backgroundStyle = computed(() => ({
  backgroundImage: "url('/backgrounds/bg-admin.webp')", // Ensure this matches your /public or /assets setup
}))
</script>

<style scoped>
/* Optional: Additional layout-specific styles here */
</style>
