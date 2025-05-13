<template>
  <div :class="wrapperClasses">
    <!-- Header (optional icon + title) -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <AppIcon v-if="icon" :name="icon" class="text-xl" />
        <h2 class="text-lg font-semibold">{{ title }}</h2>
      </div>
      <!-- Future slot: header actions, buttons, dropdowns -->
      <slot name="header-actions" />
    </div>

    <!-- Main content slot -->
    <div class="text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { ComputedRef } from 'vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import type { DashboardTheme } from '@/features/admin/utils/dashboardThemes'

const props = defineProps<{
  title: string
  icon?: string
}>()

const dashboardTheme = inject<ComputedRef<DashboardTheme | undefined>>('dashboardTheme')

const wrapperClasses = computed(() => {
  return [
    'rounded-xl shadow p-4 transition-shadow hover:shadow-md group',
    dashboardTheme?.value?.widgetColor || 'bg-white',
    dashboardTheme?.value?.widgetTextColor || 'text-black'
  ]
})
</script>
