<template>
  <aside :class="sidebarClasses">
    <!-- Context-specific tools injected here -->
    <slot name="tools" />
  </aside>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DashboardTheme } from '@/features/admin/utils/dashboardThemes'

// Pull the current theme from AdminLayout
const dashboardTheme = inject<ComputedRef<DashboardTheme | undefined>>('dashboardTheme')

// Sidebar class with theme-aware styling and fallbacks
const sidebarClasses = computed(() => {
  return [
    'w-64 h-full p-4 flex flex-col gap-6 shadow-md transition-colors',
    dashboardTheme?.value?.sidebarColor || 'bg-white',
    dashboardTheme?.value?.sidebarTextColor || 'text-black'
  ]
})
</script>

<style scoped>
/* Optional scoped styles for internal layout or future tweaks */
</style>
