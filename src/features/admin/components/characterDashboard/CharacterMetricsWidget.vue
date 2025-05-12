<template>
  <div class="relative group rounded-xl border bg-white p-4 shadow transition hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
        Character Metrics
      </h2>
      <button
        class="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-600 hover:underline"
        @click="modalOpen = true"
      >
        🛠 View
      </button>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
      Summary of playable character data.
    </p>

    <AdminModal :visible="modalOpen" @close="modalOpen = false" size="2xl" title="Character Metrics">
      <div class="space-y-4 text-gray-800 dark:text-gray-100">
        <p><strong>Total Classes:</strong> Coming soon</p>
        <p><strong>Total Species:</strong> Coming soon</p>
        <p><strong>Average Stat Bonus:</strong> Placeholder</p>
        <p><strong>Most Common Tags:</strong> Placeholder</p>
      </div>
    </AdminModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

const modalOpen = ref(false)
</script>
