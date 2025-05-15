<!-- /src/features/admin/components/characterDashboard/ManageTagsModal.vue -->
<template>
  <AdminModal
    title="Manage Tags"
    :visible="visible"
    @close="emit('close')"
    size="3xl"
  >
    <div class="space-y-4">

      <!-- Create New Tag -->
      <div class="flex items-center gap-2">
        <input
          v-model="newTagName"
          placeholder="New tag name"
          class="input w-1/3"
        />
        <input
          v-model="newTagDescription"
          placeholder="Description (optional)"
          class="input w-1/2"
        />
        <button class="btn btn-primary" disabled>Add Tag</button>
      </div>

      <!-- Inactive Toggle -->
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" v-model="showInactive" />
        Show inactive tags
      </label>

      <!-- Tag List -->
      <ul class="divide-y divide-gray-300 dark:divide-gray-700">
        <li
          v-for="tag in visibleTags"
          :key="tag.id"
          class="flex items-center justify-between py-2"
        >
          <div>
            <div class="font-medium" :class="{ 'text-gray-400': !tag.isActive }">{{ tag.name }}</div>
            <div class="text-xs text-gray-500" v-if="tag.description">{{ tag.description }}</div>
          </div>
          <div class="flex items-center gap-2">
            <button class="btn btn-secondary" disabled>Edit</button>
            <button
              class="btn"
              :class="tag.isActive ? 'btn-danger' : 'btn-success'"
              disabled
            >
              {{ tag.isActive ? 'Delete' : 'Restore' }}
            </button>
          </div>
        </li>
      </ul>

    </div>
  </AdminModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// Temporary static tag data
const tags = ref([
  { id: '1', name: 'Tank', description: 'High HP, front-line defense', isActive: true },
  { id: '2', name: 'Mage', description: 'Spellcaster class', isActive: true },
  { id: '3', name: 'Stealth', description: 'Infiltration / scouting', isActive: false }
])

const newTagName = ref('')
const newTagDescription = ref('')
const showInactive = ref(false)

const visibleTags = computed(() =>
  tags.value.filter(tag => showInactive.value || tag.isActive)
)
</script>

<style scoped>
.input {
  @apply border px-2 py-1 rounded w-full;
}
.btn {
  @apply px-3 py-1 rounded text-sm transition;
}
.btn-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}
.btn-secondary {
  @apply bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600;
}
.btn-danger {
  @apply bg-red-500 text-white hover:bg-red-600;
}
.btn-success {
  @apply bg-green-500 text-white hover:bg-green-600;
}
</style>
