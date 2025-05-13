<!-- /src/components/molecules/WidgetWrapper.vue -->
<template>
  <div :class="wrapperClasses">
    <!-- Header -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <AppIcon v-if="icon" :name="icon" class="text-xl" />
        <h2 :class="['text-lg font-semibold', textColor]">{{ title }}</h2>
      </div>

      <div class="opacity-0 group-hover:opacity-100 transition-opacity">
        <slot name="hover-tools" />
      </div>
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

const wrapperClasses = computed(() => [
  'rounded-xl shadow p-4 transition-shadow hover:shadow-md group',
  dashboardTheme?.value?.widgetColor || 'bg-white',
])

const textColor = computed(() =>
  dashboardTheme?.value?.widgetTextColor || 'text-black'
)
</script>
