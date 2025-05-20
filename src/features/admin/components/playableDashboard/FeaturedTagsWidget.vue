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
        class="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100"
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
    const result = await getPlayableTags(false) // only active tags
    tags.value = result.sort((a, b) => a.sortOrder - b.sortOrder)
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load tags'
  } finally {
    isLoading.value = false
  }
}

onMounted(loadTags)

// Expose for external refresh (e.g. from @refresh event)
defineExpose({ refetch: loadTags })
</script>
