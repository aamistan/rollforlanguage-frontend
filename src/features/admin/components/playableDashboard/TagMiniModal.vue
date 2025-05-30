<!-- TagMiniModal.vue -->
<template>
  <AdminModal
    :title="isEditMode ? 'Edit Tag' : 'Create New Tag'"
    :visible="visible"
    @close="emit('close')"
  >
    <div class="space-y-4">
      <!-- Will add inputs and logic in future steps -->
      <p class="text-sm text-gray-500">Tag editor coming soon...</p>
    </div>
  </AdminModal>
</template>

<script setup lang="ts">
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

const props = defineProps<{
  visible: boolean
  tagId?: string | null // null = create mode
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'refresh'): void
}>()

const isEditMode = computed(() => !!props.tagId)
</script>
