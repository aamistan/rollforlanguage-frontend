<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  size?: string // e.g., 'h-5 w-5'
}>()
</script>

<template>
  <svg
    :class="['animate-spin text-indigo-500', size || 'h-5 w-5']"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    />
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
</template>
