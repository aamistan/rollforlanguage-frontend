<template>
  <AdminModal
    title="Manage Tags"
    :visible="visible"
    @close="emit('close')"
    size="3xl"
  >
    <div class="space-y-4">
      <!-- Category Toggle -->
      <div class="flex justify-center gap-4 text-white">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-1 rounded',
            activeCategory === cat ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          ]"
        >
          {{ cat === 'class' ? 'Class Tags' : 'Species Tags' }}
        </button>
      </div>

      <!-- Toggle inactive tags switch -->
      <div class="mt-2 flex items-center gap-3">
        <label for="toggleInactive" class="text-sm text-white whitespace-nowrap">
          {{ hideInactive ? 'Show all tags' : 'Hide inactive tags' }}
        </label>
        <button
          id="toggleInactive"
          @click="hideInactive = !hideInactive"
          class="relative w-10 h-6 rounded-full transition-colors duration-300 focus:outline-none"
          :class="hideInactive ? 'bg-blue-600' : 'bg-gray-300'"
        >
          <span
            class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300"
            :class="hideInactive ? 'translate-x-4' : 'translate-x-0'"
          />
        </button>
      </div>

      <!-- Create New Tag Button -->
      <div class="flex justify-center">
        <button class="btn btn-primary mt-2" @click="openCreateModal">
          + Create New Tag
        </button>
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
            <div>
              <div class="font-medium" :class="{ 'text-gray-400': !tag.isActive }">{{ tag.name }}</div>
              <div class="text-xs text-gray-500" v-if="tag.description">{{ tag.description }}</div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2">
            <button class="btn btn-secondary" @click="startEdit(tag)">Edit</button>
            <button
              class="btn"
              :class="tag.isActive ? 'btn-warning' : 'btn-success'"
              @click="toggleActive(tag)"
            >
              {{ tag.isActive ? 'Archive' : 'Restore' }}
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Mini Modal for Create/Edit -->
    <TagMiniModal
      :visible="isMiniModalOpen"
      :mode="miniModalMode"
      :existingTag="miniModalMode === 'edit' ? editingTagInMiniModal ?? undefined : undefined"
      @close="closeMiniModal"
      @saved="handleMiniModalSave"
    />
  </AdminModal>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

import {
  getPlayableTags,
  togglePlayableTagActive,
  type PlayableTag,
} from '@/features/admin/services/playableTagService'

import TagMiniModal from './TagMiniModal.vue'

const props = defineProps<{
  visible: boolean
  defaultCategory?: 'class' | 'species'
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'refresh'): void
}>()

// 🔀 Categories
const categories: ('class' | 'species')[] = ['class', 'species']
const activeCategory = ref<'class' | 'species'>(props.defaultCategory ?? 'class')

// 📦 Data
const tags = ref<PlayableTag[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const hideInactive = ref(false)

// 🔍 Filtering
const visibleTags = computed(() =>
  tags.value
    .filter(tag => tag.category === activeCategory.value)
    .filter(tag => (hideInactive.value ? tag.isActive : true))
)

// 🧩 Mini-Modal
const isMiniModalOpen = ref(false)
const miniModalMode = ref<'create' | 'edit'>('create')
const editingTagInMiniModal = ref<PlayableTag | null>(null)

function openCreateModal() {
  miniModalMode.value = 'create'
  editingTagInMiniModal.value = null
  isMiniModalOpen.value = true
}

function startEdit(tag: PlayableTag) {
  miniModalMode.value = 'edit'
  editingTagInMiniModal.value = tag
  isMiniModalOpen.value = true
}

function closeMiniModal() {
  isMiniModalOpen.value = false
  editingTagInMiniModal.value = null
}

function handleMiniModalSave() {
  closeMiniModal()
  fetchTags()
  emit('refresh')
}

// 🔄 Fetch Tags
async function fetchTags() {
  isLoading.value = true
  error.value = null
  try {
    tags.value = await getPlayableTags(true, activeCategory.value)
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load tags'
  } finally {
    isLoading.value = false
  }
}

// 📡 Watchers
watch(() => props.visible, (isVisible) => {
  if (isVisible) fetchTags()
})

watch(activeCategory, () => {
  fetchTags()
})

// ✅ Toggle Archive/Restore
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
</style>
