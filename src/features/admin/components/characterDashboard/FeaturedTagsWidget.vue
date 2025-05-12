<template>
  <div class="relative group rounded-xl border bg-white p-4 shadow transition hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
        Featured Tags
      </h2>
      <button
        class="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-600 hover:underline"
        @click="modalOpen = true"
      >
        🛠 Explore
      </button>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
      Most frequently used tags in character design.
    </p>

    <!-- Tag List (Preview) -->
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in placeholderTags"
        :key="tag"
        class="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Modal -->
    <AdminModal :visible="modalOpen" @close="modalOpen = false" size="xl" title="Character Tag Overview">
      <div class="space-y-3 text-gray-800 dark:text-gray-100">
        <p>This modal will eventually include full tag frequency charts, definitions, and editing tools.</p>
        <ul class="list-disc pl-6">
          <li>Support for tagging both classes and species</li>
          <li>Admin-controlled tag glossary</li>
          <li>Integration with lore entries and stat modifiers</li>
        </ul>
      </div>
    </AdminModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

const modalOpen = ref(false)

const placeholderTags = [
  'Mage',
  'Tank',
  'Beastfolk',
  'Undead',
  'Nature',
  'Fire',
  'Shadow',
  'Support',
]
</script>
