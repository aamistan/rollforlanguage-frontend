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
        <input type="color" v-model="newTagColor" class="h-10 w-10 rounded border" title="Choose tag color" />
        <button class="btn btn-primary" @click="handleCreateTag" :disabled="!newTagName">Add Tag</button>
      </div>

      <!-- Inactive Toggle -->
      <div class="mt-2 flex items-center gap-2">
        <input
          id="showInactive"
          type="checkbox"
          v-model="showInactive"
          class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label for="showInactive" class="text-sm text-white">Show inactive tags</label>
      </div>

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
            <div v-if="editingTagId === tag.id" class="flex gap-2 items-center">
              <input v-model="editName" class="input w-1/3" />
              <input v-model="editDescription" class="input w-1/2" />
              <input
                type="color"
                v-model="editColor"
                class="h-10 w-10 rounded border"
                title="Edit tag color"
              />
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
              :class="editingTagId === tag.id
                ? 'btn-danger'
                : (tag.isActive ? 'btn-warning' : 'btn-success')"
              @click="editingTagId === tag.id ? deleteTag(tag.id) : toggleActive(tag)"
            >
              {{ editingTagId === tag.id
                ? 'Delete'
                : (tag.isActive ? 'Archive' : 'Restore') }}
            </button>
          </div>
        </li>
      </ul>
    </div>
  </AdminModal>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import {
  getPlayableTags,
  createPlayableTag,
  updatePlayableTag,
  togglePlayableTagActive,
  type PlayableTag
} from '@/features/admin/services/playableTagService'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'refresh'): void
}>()

const tags = ref<PlayableTag[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const showInactive = ref(false)

const newTagName = ref('')
const newTagDescription = ref('')

const editingTagId = ref<string | null>(null)
const editName = ref('')
const editDescription = ref('')

const newTagColor = ref('#888888') // default neutral gray
const editColor = ref('#888888')

async function fetchTags() {
  isLoading.value = true
  error.value = null
  try {
    tags.value = await getPlayableTags(true)
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load tags'
  } finally {
    isLoading.value = false
  }
}

watch(() => props.visible, (isVisible) => {
  if (isVisible) {
    fetchTags()
  }
})

const visibleTags = computed(() =>
  tags.value.filter(tag => showInactive.value || tag.isActive)
)

async function handleCreateTag() {
  try {
    const newTag = await createPlayableTag({
      name: newTagName.value,
      description: newTagDescription.value || undefined,
      colorHex: newTagColor.value || '#888888',
    })

    if (!newTag.isActive) {
      newTag.isActive = true
    }

    tags.value.push(newTag)
    newTagName.value = ''
    newTagDescription.value = ''
    newTagColor.value = '#888888'

    console.log('🔁 Emitting refresh from modal')
    emit('refresh')
  } catch (err) {
    console.error(err)
    error.value = 'Failed to create tag'
  }
}


function startEdit(tag: PlayableTag) {
  editingTagId.value = tag.id
  editName.value = tag.name
  editDescription.value = tag.description || ''
  editColor.value = tag.colorHex || '#888888'
}


function cancelEdit() {
  editingTagId.value = null
  editName.value = ''
  editDescription.value = ''
}

async function saveEdit(id: string) {
  try {
    const updated = await updatePlayableTag(id, {
      name: editName.value,
      description: editDescription.value || undefined
    })

    const index = tags.value.findIndex(t => t.id === id)
    if (index !== -1) tags.value[index] = updated

    cancelEdit()
    console.log('🔁 Emitting refresh from modal')
    emit('refresh')

  } catch (err) {
    console.error(err)
    error.value = 'Failed to update tag'
  }
}

async function toggleActive(tag: PlayableTag) {
  try {
    const updated = await togglePlayableTagActive(tag.id, !tag.isActive)
    const index = tags.value.findIndex(t => t.id === tag.id)
    if (index !== -1) tags.value[index] = updated

    emit('refresh')
  } catch (err) {
    console.error(err)
    error.value = `Failed to ${tag.isActive ? 'archive' : 'restore'} tag`
  }
}

async function deleteTag(id: string) {
  try {
    // Replace with hard-delete call when implemented
    await togglePlayableTagActive(id, false)
    tags.value = tags.value.filter(t => t.id !== id)
    cancelEdit()
    emit('refresh')
  } catch (err) {
    console.error(err)
    error.value = 'Failed to delete tag permanently'
  }
}

</script>

<style scoped>
.input {
  @apply border px-2 py-1 rounded w-full text-black dark:text-white;
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
.btn-success {
  @apply bg-green-500 text-white hover:bg-green-600;
}
.btn-warning {
  @apply bg-yellow-500 text-black hover:bg-yellow-600;
}

.btn-danger {
  @apply bg-red-600 text-white hover:bg-red-700;
}

</style>