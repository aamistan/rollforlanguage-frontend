<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
      Tags
    </label>

    <Combobox v-model="selected">
      <div class="relative">
        <ComboboxInput
          class="w-full rounded border px-3 py-2 dark:bg-neutral-800 dark:text-white"
          :display-value="() => ''"
          @input="query = $event.target.value"
          placeholder="Type or select tags"
        />
        <ComboboxOptions
          v-if="filteredTags.length > 0"
          class="absolute z-10 mt-1 w-full rounded bg-white shadow-lg dark:bg-neutral-900"
        >
          <ComboboxOption
            v-for="tag in filteredTags"
            :key="tag"
            :value="tag"
            class="cursor-pointer px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-800"
          >
            {{ tag }}
          </ComboboxOption>
        </ComboboxOptions>
      </div>
    </Combobox>

    <div class="mt-2 flex flex-wrap gap-2">
      <span
        v-for="tag in selected"
        :key="tag"
        class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      >
        {{ tag }}
        <button
          type="button"
          class="ml-2 text-blue-600 hover:text-blue-800 dark:hover:text-white"
          @click="removeTag(tag)"
        >
          ×
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/vue'
import { onMounted, ref, watch, computed } from 'vue'
import { characterService } from '@/features/admin/services/characterService'

// Props
const props = defineProps<{
  modelValue: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

// State
const selected = ref<string[]>([...props.modelValue])
const query = ref('')
const allTags = ref<string[]>([])

onMounted(async () => {
  const result = await characterService.getTags()
  allTags.value = result.map((tag: { name: string }) => tag.name)
})

// Filtered for combobox
const filteredTags = computed(() => {
  const q = query.value.toLowerCase()
  return allTags.value
    .filter((tag) => tag.toLowerCase().includes(q) && !selected.value.includes(tag))
    .sort()
})

// Emit changes to parent
watch(selected, () => {
  emit('update:modelValue', selected.value)
})

// Remove tag
function removeTag(tag: string) {
  selected.value = selected.value.filter((t) => t !== tag)
}
</script>
