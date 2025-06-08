<!-- /components/molecules/TagSelector.vue -->
<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
      Tags
    </label>

    <Combobox v-model="selectedIds">
      <div class="relative">
        <ComboboxInput
          class="w-full rounded border px-3 py-2 dark:bg-neutral-800 dark:text-white"
          :display-value="() => ''"
          @input="query = $event.target.value"
          placeholder="Type or select tags"
        />
        <ComboboxOptions
          v-if="filteredTags.length > 0"
          class="absolute z-10 mt-1 w-full rounded bg-white shadow-lg dark:bg-neutral-900 max-h-60 overflow-auto"
        >
          <ComboboxOption
            v-for="tag in filteredTags"
            :key="tag.id"
            :value="tag.id"
            class="cursor-pointer px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-800 flex items-center gap-2"
          >
            <span
              v-if="tag.colorHex"
              class="inline-block w-3 h-3 rounded-full"
              :style="{ backgroundColor: tag.colorHex }"
            />
            {{ tag.name }}
          </ComboboxOption>
        </ComboboxOptions>
      </div>
    </Combobox>

    <!-- Selected tag badges -->
    <div class="mt-2 flex flex-wrap gap-2">
      <span
        v-for="tag in selectedTagObjects"
        :key="tag.id"
        class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
        :style="{ backgroundColor: tag.colorHex || '#888888', color: 'white' }"
      >
        {{ tag.name }}
        <button
          type="button"
          class="ml-2 text-white hover:text-gray-200"
          @click="removeTag(tag.id)"
        >
          ×
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/vue'
import { computed, ref, watch } from 'vue'
import type { PlayableTag } from '@/features/admin/services/playableTagService'

const props = defineProps<{
  modelValue: string[]
  tags: PlayableTag[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const query = ref('')
const selectedIds = ref([...props.modelValue])

// Keep local selection in sync with prop
watch(() => props.modelValue, (newVal) => {
  selectedIds.value = [...newVal]
})

// Emit to parent
watch(selectedIds, (newVal) => {
  emit('update:modelValue', newVal)
})

// Filter based on query and exclude already selected
const filteredTags = computed(() =>
  props.tags.filter(
    (tag) =>
      tag.name.toLowerCase().includes(query.value.toLowerCase()) &&
      !selectedIds.value.includes(tag.id)
  )
)

// Full tag objects for selectedIds
const selectedTagObjects = computed(() =>
  props.tags.filter(tag => selectedIds.value.includes(tag.id))
)

function removeTag(id: string) {
  selectedIds.value = selectedIds.value.filter(tid => tid !== id)
}
</script>
