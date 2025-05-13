<!-- /src/components/molecules/WidgetWrapper.vue -->
<template>
  <div :class="wrapperClasses" class="relative">
    <!-- Optional top-right hover tools slot -->
    <div
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <slot name="hover-tools" />
    </div>

    <!-- Header: icon + title -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <AppIcon v-if="icon" :name="icon" class="text-xl" />
        <h2 class="text-lg font-semibold">{{ title }}</h2>
      </div>
      <!-- Future: header actions -->
      <slot name="header-actions" />
    </div>

    <!-- Main content -->
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
