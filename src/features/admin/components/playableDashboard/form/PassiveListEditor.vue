<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
      Passive Abilities
    </label>

    <div class="flex items-center gap-2">
      <input
        v-model="newPassive"
        @keydown.enter.prevent="addPassive"
        list="passive-suggestions"
        type="text"
        placeholder="Type and press Enter"
        class="w-full rounded border px-3 py-2 dark:bg-neutral-800 dark:text-white"
      />
      <button
        type="button"
        @click="addPassive"
        class="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
      >
        ➕ Add
      </button>
    </div>

    <!-- Autocomplete suggestions -->
    <datalist id="passive-suggestions">
      <option v-for="passive in passiveSuggestions" :key="passive" :value="passive" />
    </datalist>

    <!-- Current list -->
    <ul class="mt-3 space-y-1">
      <li
        v-for="(passive, index) in localPassives"
        :key="index"
        class="flex items-center justify-between rounded bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      >
        {{ passive }}
        <button
          type="button"
          class="text-blue-600 hover:text-red-600 dark:hover:text-red-300"
          @click="removePassive(index)"
        >
          ×
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { playableClassService } from '@/features/admin/services/playableClassService'

const props = defineProps<{
  modelValue: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const localPassives = ref<string[]>([...props.modelValue])
const passiveSuggestions = ref<string[]>([])
const newPassive = ref('')

// Load backend passives for autocomplete
onMounted(async () => {
  const result = await playableClassService.getPassives()
  passiveSuggestions.value = result.map((p: any) => p.name)
})

// Keep modelValue in sync
watch(localPassives, () => {
  emit('update:modelValue', localPassives.value)
}, { deep: true })

function addPassive() {
  const val = newPassive.value.trim()
  if (val && !localPassives.value.includes(val)) {
    localPassives.value.push(val)
  }
  newPassive.value = ''
}

function removePassive(index: number) {
  localPassives.value.splice(index, 1)
}
</script>
