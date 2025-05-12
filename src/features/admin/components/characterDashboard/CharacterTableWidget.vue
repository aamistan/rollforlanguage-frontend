<template>
  <div class="relative group rounded-xl border bg-white p-4 shadow transition hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
        Character Table
      </h2>
      <button
        class="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-600 hover:underline"
        @click="modalOpen = true"
      >
        🛠 Manage
      </button>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
      View and manage all playable character classes.
    </p>

    <AdminModal
      :visible="modalOpen"
      @close="modalOpen = false"
      size="6xl"
      title="Manage Character Classes"
    >
      <div class="space-y-4 text-gray-800 dark:text-gray-100">
        <!-- Create Button -->
        <div class="flex justify-end">
          <button
            @click="store.openCreateModal()"
            class="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
          >
            ➕ New Class
          </button>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto rounded border dark:border-neutral-700">
          <table class="min-w-full text-sm">
            <thead class="bg-gray-100 dark:bg-neutral-800">
              <tr>
                <th class="px-4 py-2 text-left">Name</th>
                <th class="px-4 py-2 text-left">Tags</th>
                <th class="px-4 py-2 text-left">Playable</th>
                <th class="px-4 py-2 text-left">Last Updated</th>
                <th class="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="char in classes"
                :key="char.id"
                class="border-t dark:border-neutral-700"
              >
                <td class="px-4 py-2 font-medium">{{ char.name }}</td>
                <td class="px-4 py-2">
                  <span
                    v-for="tag in char.tags"
                    :key="tag"
                    class="mr-1 inline-block rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                  >
                    {{ tag }}
                  </span>
                </td>
                <td class="px-4 py-2">
                  {{ char.isPlayable ? 'Yes' : 'No' }}
                </td>
                <td class="px-4 py-2">
                  {{ formatDate(char.updatedAt) }}
                </td>
                <td class="px-4 py-2">
                  <button
                    @click="store.openEditModal(char)"
                    class="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminModal>

    <!-- Modal for Create/Edit -->
    <CharacterClassModal />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import { characterService } from '@/features/admin/services/characterService'
import { useAdminCharacterStore } from '@/features/admin/stores/adminCharacterStore'
import type { CharacterClass } from '@/features/admin/types/characterTypes'
import CharacterClassModal from './CharacterClassModal.vue'

const store = useAdminCharacterStore()

const modalOpen = ref(false)
const classes = ref<CharacterClass[]>([])

async function fetchClasses() {
  const res = await characterService.getCharacterClasses({ page: 1, limit: 50 })
  classes.value = res.data
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString()
}

onMounted(fetchClasses)

watch(() => store.lastClassRefresh, fetchClasses)
</script>
