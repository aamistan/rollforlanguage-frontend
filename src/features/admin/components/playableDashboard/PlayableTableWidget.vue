<!-- /src/features/admin/components/playableDashboard/PlayableTableWidget.vue -->
<template>
  <WidgetWrapper title="Playable Class Table" icon="Table">
    <template #hover-tools>
      <button
        @click="modalOpen = true"
        class="text-sm text-blue-600 hover:underline"
      >
        🛠 Manage
      </button>
    </template>

    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
      View and manage all playable character classes.
    </p>

    <AdminModal
      :visible="modalOpen"
      @close="modalOpen = false"
      size="6xl"
      title="Manage Playable Classes"
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
    <PlayableClassModal />
  </WidgetWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import WidgetWrapper from '@/components/molecules/WidgetWrapper.vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import { playableClassService } from '@/features/admin/services/playableClassService'
import { useAdminPlayableStore } from '@/features/admin/stores/adminPlayableStore'
import type { PlayableClass } from '@/features/admin/types/playableTypes'
import PlayableClassModal from './PlayableClassModal.vue'

const store = useAdminPlayableStore()
const modalOpen = ref(false)
const classes = ref<PlayableClass[]>([])

async function fetchClasses() {
  const res = await playableClassService.getPlayableClasses({ page: 1, limit: 50 })
  classes.value = res.data
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString()
}

onMounted(fetchClasses)
watch(() => store.lastClassRefresh, fetchClasses)
</script>
