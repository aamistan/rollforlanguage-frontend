<template>
  <AdminModal
    title="Manage Stats"
    :visible="visible"
    @close="emit('close')"
    size="3xl"
  >
    <div class="space-y-4">

      <!-- Create New Stat -->
      <div class="flex flex-col gap-2 md:flex-row md:items-center">
        <input
          v-model="newName"
          placeholder="Stat key (e.g. strength)"
          class="input md:w-1/4"
        />
        <input
          v-model="newDisplayName"
          placeholder="Display name (e.g. Strength)"
          class="input md:w-1/4"
        />
        <input
          v-model="newDescription"
          placeholder="Description (optional)"
          class="input md:w-1/2"
        />
        <button
          class="btn btn-primary"
          :disabled="!newName || !newDisplayName"
          @click="handleCreate"
        >
          Add Stat
        </button>
      </div>

      <!-- Inactive Toggle -->
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" v-model="showInactive" />
        Show inactive stats
      </label>

      <!-- Loading/Error -->
      <div v-if="isLoading" class="text-sm text-gray-500">Loading stats...</div>
      <div v-if="error" class="text-sm text-red-500">{{ error }}</div>

      <!-- Stat List -->
      <ul v-if="!isLoading && !error" class="divide-y divide-gray-300 dark:divide-gray-700">
        <li
          v-for="stat in visibleStats"
          :key="stat.id"
          class="flex items-center justify-between py-2"
        >
          <div class="flex-1">
            <div v-if="editingStatId === stat.id" class="flex gap-2">
              <input v-model="editName" class="input w-1/4" />
              <input v-model="editDisplayName" class="input w-1/4" />
              <input v-model="editDescription" class="input w-1/2" />
              <button class="btn btn-success" @click="saveEdit(stat.id)">Save</button>
              <button class="btn btn-secondary" @click="cancelEdit">Cancel</button>
            </div>
            <div v-else>
              <div class="font-medium" :class="{ 'text-gray-400': !stat.isActive }">
                {{ stat.displayName }} <span class="text-xs text-gray-400">({{ stat.name }})</span>
              </div>
              <div class="text-xs text-gray-500" v-if="stat.description">{{ stat.description }}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button class="btn btn-secondary" @click="startEdit(stat)" v-if="editingStatId !== stat.id">Edit</button>
            <button
              class="btn"
              :class="stat.isActive ? 'btn-danger' : 'btn-success'"
              @click="toggleActive(stat)"
            >
              {{ stat.isActive ? 'Delete' : 'Restore' }}
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
  getPlayableStats,
  createPlayableStat,
  updatePlayableStat,
  togglePlayableStatActive,
  type PlayableStat
} from '@/features/admin/services/playableStatService'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const stats = ref<PlayableStat[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const showInactive = ref(false)

const newName = ref('')
const newDisplayName = ref('')
const newDescription = ref('')

const editingStatId = ref<string | null>(null)
const editName = ref('')
const editDisplayName = ref('')
const editDescription = ref('')

async function fetchStats() {
  isLoading.value = true
  error.value = null
  try {
    stats.value = await getPlayableStats(true)
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load stat definitions.'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchStats)

const visibleStats = computed(() =>
  stats.value.filter(stat => showInactive.value || stat.isActive)
)

async function handleCreate() {
  try {
    const created = await createPlayableStat({
      name: newName.value,
      displayName: newDisplayName.value,
      description: newDescription.value || undefined,
    })
    stats.value.push(created)
    newName.value = ''
    newDisplayName.value = ''
    newDescription.value = ''
  } catch (err) {
    console.error(err)
    error.value = 'Failed to create stat. Make sure name is unique.'
  }
}

function startEdit(stat: PlayableStat) {
  editingStatId.value = stat.id
  editName.value = stat.name
  editDisplayName.value = stat.displayName
  editDescription.value = stat.description || ''
}

function cancelEdit() {
  editingStatId.value = null
  editName.value = ''
  editDisplayName.value = ''
  editDescription.value = ''
}

async function saveEdit(id: string) {
  try {
    const updated = await updatePlayableStat(id, {
      name: editName.value,
      displayName: editDisplayName.value,
      description: editDescription.value || undefined
    })
    const index = stats.value.findIndex(s => s.id === id)
    if (index !== -1) stats.value[index] = updated
    cancelEdit()
  } catch (err) {
    console.error(err)
    error.value = 'Failed to update stat'
  }
}

async function toggleActive(stat: PlayableStat) {
  try {
    const updated = await togglePlayableStatActive(stat.id, !stat.isActive)
    const index = stats.value.findIndex(s => s.id === stat.id)
    if (index !== -1) stats.value[index] = updated
  } catch (err) {
    console.error(err)
    error.value = `Failed to ${stat.isActive ? 'delete' : 'restore'} stat`
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
