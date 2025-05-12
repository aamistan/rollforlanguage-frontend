<template>
  <AdminModal
    :visible="store.showCreateModal || store.showEditModal"
    :title="modalTitle"
    size="5xl"
    @close="closeModal"
  >
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Basic Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Name
          </label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full rounded border px-3 py-2 dark:bg-neutral-800 dark:text-white"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Playable?
          </label>
          <select
            v-model="form.isPlayable"
            class="w-full rounded border px-3 py-2 dark:bg-neutral-800 dark:text-white"
          >
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>
      </div>

      <!-- Description & Lore -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Description
        </label>
        <textarea
          v-model="form.description"
          rows="2"
          class="w-full rounded border px-3 py-2 dark:bg-neutral-800 dark:text-white"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Lore (optional)
        </label>
        <textarea
          v-model="form.lore"
          rows="3"
          class="w-full rounded border px-3 py-2 dark:bg-neutral-800 dark:text-white"
        />
      </div>

      <!-- Modular Inputs -->
      <TagSelector v-model="form.tags" />
      <StatEditor v-model="form.statBonuses" />
      <PassiveListEditor v-model="form.passiveAbilities" />
      <IconUpload v-model="form.iconUrl" />

      <!-- Submit Button -->
      <div class="flex justify-end gap-4">
        <button
          type="button"
          @click="closeModal"
          class="rounded border px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        >
          Cancel
        </button>

        <button
          type="submit"
          :disabled="store.isSubmitting"
          class="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {{ store.showEditModal ? 'Save Changes' : 'Create Class' }}
        </button>
      </div>

      <!-- Error -->
      <p v-if="store.submitError" class="text-sm text-red-600">
        {{ store.submitError }}
      </p>
    </form>
  </AdminModal>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue'
import { characterService } from '@/features/admin/services/characterService'
import { useAdminCharacterStore } from '@/features/admin/stores/adminCharacterStore'
import TagSelector from './form/TagSelector.vue'
import StatEditor from './form/StatEditor.vue'
import PassiveListEditor from './form/PassiveListEditor.vue'
import IconUpload from './form/IconUpload.vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

const store = useAdminCharacterStore()

// Local form state
const form = reactive({
  name: '',
  description: '',
  lore: '',
  iconUrl: '',
  isPlayable: true,
  tags: [] as string[],
  statBonuses: {} as Record<string, number>,
  passiveAbilities: [] as string[],
})

// Sync store.selectedCharacter → form
watch(
  () => store.selectedCharacter,
  (char) => {
    if (char) {
      Object.assign(form, {
        name: char.name,
        description: char.description || '',
        lore: char.lore || '',
        iconUrl: char.iconUrl || '',
        isPlayable: char.isPlayable,
        tags: [...char.tags],
        statBonuses: { ...char.statBonuses },
        passiveAbilities: [...char.passiveAbilities],
      })
    } else {
      Object.assign(form, {
        name: '',
        description: '',
        lore: '',
        iconUrl: '',
        isPlayable: true,
        tags: [],
        statBonuses: {},
        passiveAbilities: [],
      })
    }
  },
  { immediate: true }
)

const modalTitle = computed(() =>
  store.showEditModal ? 'Edit Character Class' : 'Create New Character Class'
)

function closeModal() {
  store.showCreateModal = false
  store.showEditModal = false
  store.selectedCharacter = null
  store.submitError = null
}

async function handleSubmit() {
  store.isSubmitting = true
  store.submitError = null
  try {
    if (store.showEditModal && store.selectedCharacter?.id) {
      await characterService.updateCharacterClass(store.selectedCharacter.id, { ...form })
    } else {
      await characterService.createCharacterClass({ ...form })
    }

    closeModal()
    store.refreshClassList()
  } catch (err: any) {
    console.error(err)
    store.submitError = err.response?.data?.message || 'Something went wrong.'
  } finally {
    store.isSubmitting = false
  }
}
</script>
