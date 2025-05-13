<!-- /src/features/admin/components/characterDashboard/FeaturedTagsWidget.vue -->
<template>
  <WidgetWrapper title="Featured Tags" icon="Tag">
    <template #hover-tools>
      <button
        @click="modalOpen = true"
        class="text-sm text-blue-600 hover:underline"
      >
        🛠 Explore
      </button>
    </template>

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
    <AdminModal
      :visible="modalOpen"
      @close="modalOpen = false"
      size="xl"
      title="Character Tag Overview"
    >
      <div class="space-y-3 text-gray-800 dark:text-gray-100">
        <p>This modal will eventually include full tag frequency charts, definitions, and editing tools.</p>
        <ul class="list-disc pl-6">
          <li>Support for tagging both classes and species</li>
          <li>Admin-controlled tag glossary</li>
          <li>Integration with lore entries and stat modifiers</li>
        </ul>
      </div>
    </AdminModal>
  </WidgetWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WidgetWrapper from '@/components/molecules/WidgetWrapper.vue'
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
