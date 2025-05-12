<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
      Icon Upload
    </label>

    <div class="flex items-center gap-4">
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.webp,.svg"
        @change="handleFileChange"
        class="text-sm text-gray-800 dark:text-white"
      />

      <div
        v-if="uploading"
        class="text-sm text-blue-600 dark:text-blue-400"
      >
        Uploading...
      </div>
    </div>

    <!-- Preview -->
    <div v-if="modelValue" class="mt-3">
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-1">Preview:</p>
      <img
        :src="modelValue"
        alt="Uploaded Icon"
        class="h-20 w-20 rounded border shadow dark:border-neutral-700"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { characterService } from '@/features/admin/services/characterService'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const uploading = ref(false)

async function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  uploading.value = true
  try {
    const { url } = await characterService.uploadIcon(file)
    emit('update:modelValue', url)
  } catch (err) {
    console.error('Upload failed:', err)
    alert('Upload failed. Please try again.')
  } finally {
    uploading.value = false
  }
}
</script>
