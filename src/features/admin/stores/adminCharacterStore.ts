import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CharacterClass } from '@/features/admin/types/characterTypes'

export const useAdminCharacterStore = defineStore('adminCharacterStore', () => {
  // 🔄 Widget refresh key
  const lastClassRefresh = ref(Date.now())

  // 📦 Selected character (for edit mode)
  const selectedCharacter = ref<CharacterClass | null>(null)

  // 🔘 Modal visibility
  const showCreateModal = ref(false)
  const showEditModal = ref(false)

  // 🚨 Error and loading states
  const isSubmitting = ref(false)
  const submitError = ref<string | null>(null)

  // 🔁 Trigger class list reload
  function refreshClassList() {
    lastClassRefresh.value = Date.now()
  }

  // 🆕 Open modal to create new class
  function openCreateModal() {
    selectedCharacter.value = null
    showCreateModal.value = true
  }

  // ✏️ Open modal to edit existing class
  function openEditModal(character: CharacterClass) {
    selectedCharacter.value = character
    showEditModal.value = true
  }

  return {
    // State
    lastClassRefresh,
    selectedCharacter,
    showCreateModal,
    showEditModal,
    isSubmitting,
    submitError,

    // Actions
    refreshClassList,
    openCreateModal,
    openEditModal,
  }
})
