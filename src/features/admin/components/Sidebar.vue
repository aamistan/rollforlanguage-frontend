<!-- /src/features/admin/components/Sidebar.vue -->
<template>
  <aside :class="sidebarClasses">
    <slot name="tools" />
  </aside>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DashboardTheme } from '@/features/admin/utils/dashboardThemes'

const dashboardTheme = inject<ComputedRef<DashboardTheme | undefined>>('dashboardTheme')

const sidebarClasses = computed(() => [
  'w-64 h-full p-4 flex flex-col gap-6 shadow-md transition-colors',
  dashboardTheme?.value?.sidebarColor || 'bg-white',
  dashboardTheme?.value?.sidebarTextColor || 'text-black',
])
</script>
