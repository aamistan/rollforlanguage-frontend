<template>
  <AdminModal
    :title="modalTitle"
    :visible="visible"
    @close="emit('close')"
  >
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <input
          v-model="tagName"
          placeholder="Tag name"
          class="input"
        />
        <input
          v-model="tagDescription"
          placeholder="Description (optional)"
          class="input"
        />
        <label class="text-sm text-gray-300">Tag color</label>
        <input
          type="color"
          v-model="tagColor"
          class="h-10 w-10 rounded border"
        />
      </div>

      <div class="flex justify-end gap-2 mt-4">
        <button class="btn btn-secondary" @click="emit('close')">Cancel</button>
        <button class="btn btn-primary" @click="handleSave" :disabled="!tagName">
          {{ mode === 'edit' ? 'Save Changes' : 'Create Tag' }}
        </button>
      </div>
    </div>
  </AdminModal>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import type { PlayableTag } from '@/features/admin/services/playableTagService'

const props = defineProps<{
  visible: boolean
  mode: 'create' | 'edit'
  existingTag?: PlayableTag
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'saved'): void
}>()

const tagName = ref('')
const tagDescription = ref('')
const tagColor = ref('#888888')

watch(() => props.visible, (isOpen) => {
  if (!isOpen) return

  if (props.mode === 'edit' && props.existingTag) {
    tagName.value = props.existingTag.name
    tagDescription.value = props.existingTag.description || ''
    tagColor.value = props.existingTag.colorHex || '#888888'
  } else {
    tagName.value = ''
    tagDescription.value = ''
    tagColor.value = '#888888'
  }
})

const modalTitle = computed(() =>
  props.mode === 'edit' ? 'Edit Tag' : 'Create New Tag'
)

function handleSave() {
  // placeholder – full logic next step
  emit('saved')
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
</style>
