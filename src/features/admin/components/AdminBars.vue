<template>
  <div class="min-h-screen flex flex-col">
    <!-- Topbar Component -->
    <Topbar />

    <!-- Sidebar + Main Content -->
    <div class="flex flex-1">
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
import Sidebar from './Sidebar.vue'
import Topbar from './Topbar.vue'
</script>

<style scoped>
/* Optional: Additional layout-specific styles here */
</style>
