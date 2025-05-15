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
        <input v-model="newTagName" placeholder="New tag name" class="input w-1/3" />
        <input v-model="newTagDescription" placeholder="Description (optional)" class="input w-1/2" />
        <button class="btn btn-primary" @click="handleCreateTag" :disabled="!newTagName">Add Tag</button>
      </div>

      <!-- Inactive Toggle -->
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" v-model="showInactive" />
        Show inactive tags
      </label>

      <!-- Loading/Error -->
      <div v-if="isLoading" class="text-sm text-gray-500">Loading tags...</div>
      <div v-if="error" class="text-sm text-red-500">{{ error }}</div>

      <!-- Tag List -->
      <ul v-if="!isLoading && !error" class="divide-y divide-gray-300 dark:divide-gray-700">
        <li
          v-for="tag in visibleTags"
          :key="tag.id"
          class="flex items-center justify-between py-2"
        >
          <div class="flex-1">
            <div v-if="editingTagId === tag.id" class="flex gap-2">
              <input v-model="editName" class="input w-1/3" />
              <input v-model="editDescription" class="input w-1/2" />
              <button class="btn btn-success" @click="saveEdit(tag.id)">Save</button>
              <button class="btn btn-secondary" @click="cancelEdit">Cancel</button>
            </div>
            <div v-else>
              <div class="font-medium" :class="{ 'text-gray-400': !tag.isActive }">{{ tag.name }}</div>
              <div class="text-xs text-gray-500" v-if="tag.description">{{ tag.description }}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button class="btn btn-secondary" @click="startEdit(tag)" v-if="editingTagId !== tag.id">Edit</button>
            <button
              class="btn"
              :class="tag.isActive ? 'btn-danger' : 'btn-success'"
              @click="toggleActive(tag)"
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
import { ref, computed, onMounted } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import {
  getCharacterTags,
  createCharacterTag,
  updateCharacterTag,
  toggleCharacterTagActive,
  type CharacterTag
} from '@/features/admin/services/characterTagService'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const tags = ref<CharacterTag[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const showInactive = ref(false)

const newTagName = ref('')
const newTagDescription = ref('')

const editingTagId = ref<string | null>(null)
const editName = ref('')
const editDescription = ref('')

async function fetchTags() {
  isLoading.value = true
  error.value = null
  try {
    tags.value = await getCharacterTags(true)
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load tags'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchTags)

const visibleTags = computed(() =>
  tags.value.filter(tag => showInactive.value || tag.isActive)
)

async function handleCreateTag() {
  try {
    const newTag = await createCharacterTag({
      name: newTagName.value,
      description: newTagDescription.value || undefined
    })
    tags.value.push(newTag)
    newTagName.value = ''
    newTagDescription.value = ''
  } catch (err) {
    console.error(err)
    error.value = 'Failed to create tag'
  }
}

function startEdit(tag: CharacterTag) {
  editingTagId.value = tag.id
  editName.value = tag.name
  editDescription.value = tag.description || ''
}

function cancelEdit() {
  editingTagId.value = null
  editName.value = ''
  editDescription.value = ''
}

async function saveEdit(id: string) {
  try {
    const updated = await updateCharacterTag(id, {
      name: editName.value,
      description: editDescription.value || undefined
    })
    const index = tags.value.findIndex(t => t.id === id)
    if (index !== -1) tags.value[index] = updated
    cancelEdit()
  } catch (err) {
    console.error(err)
    error.value = 'Failed to update tag'
  }
}

async function toggleActive(tag: CharacterTag) {
  try {
    const updated = await toggleCharacterTagActive(tag.id, !tag.isActive)
    const index = tags.value.findIndex(t => t.id === tag.id)
    if (index !== -1) tags.value[index] = updated
  } catch (err) {
    console.error(err)
    error.value = `Failed to ${tag.isActive ? 'delete' : 'restore'} tag`
  }
}
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
