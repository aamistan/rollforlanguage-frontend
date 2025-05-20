<template>
  <WidgetWrapper title="Featured Tags" icon="Tag">
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
      Most frequently used tags in playable design.
    </p>

    <!-- Tag List (Preview) -->
    <div class="mt-4 flex flex-wrap gap-2 min-h-[40px]">
      <span v-if="isLoading" class="text-xs text-gray-500">Loading tags...</span>
      <span v-else-if="error" class="text-xs text-red-500">{{ error }}</span>
      <span v-else-if="tags.length === 0" class="text-xs text-gray-400">No tags found.</span>

      <span
        v-else
        v-for="tag in tags"
        :key="tag.id"
        class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
        :style="{
          backgroundColor: tag.colorHex || '#888888',
          color: getTextColor(tag.colorHex || '#888888')
        }"
      >
        {{ tag.name }}
      </span>
    </div>
  </WidgetWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WidgetWrapper from '@/components/molecules/WidgetWrapper.vue'
import { getPlayableTags, type PlayableTag } from '@/features/admin/services/playableTagService'

const tags = ref<PlayableTag[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)

async function loadTags() {
  isLoading.value = true
  error.value = null
  try {
    const result = await getPlayableTags(false)
    tags.value = result.sort((a, b) => a.sortOrder - b.sortOrder)
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load tags'
  } finally {
    isLoading.value = false
  }
}

// ⚙️ Light vs dark text heuristic (based on hex brightness)
function getTextColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? '#111827' : '#ffffff'
}

onMounted(loadTags)
defineExpose({ refetch: loadTags })
</script>
