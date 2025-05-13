<!-- /src/components/molecules/WidgetWrapper.vue -->
<template>
  <div :class="wrapperClasses" class="relative group overflow-hidden">
    <!-- Accent Edge Bar -->
    <div
      class="absolute right-0 top-0 h-full w-1 rounded-r-xl"
      :class="accentBarClass"
    />

    <!-- Header -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <AppIcon v-if="icon" :name="icon" class="text-xl" />
        <h2 :class="['text-lg font-semibold', textColor]">{{ title }}</h2>
      </div>

      <!-- Optional hover tool slot -->
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

const accentBarClass = computed(() =>
  `bg-${dashboardTheme?.value?.accentColor || 'blue-500'}`
)
</script>
