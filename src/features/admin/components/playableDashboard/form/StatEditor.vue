<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
      Stat Bonuses
    </label>

    <div class="space-y-2">
      <div
        v-for="(entry, index) in localStats"
        :key="index"
        class="flex items-center gap-2"
      >
        <!-- Stat Name -->
        <select
          v-model="entry.stat"
          class="w-1/2 rounded border px-2 py-1 dark:bg-neutral-800 dark:text-white"
        >
          <option disabled value="">Select stat</option>
          <option
            v-for="stat in statOptions"
            :key="stat.name"
            :value="stat.name"
          >
            {{ stat.displayName || stat.name }}
          </option>
        </select>

        <!-- Stat Value -->
        <input
          type="number"
          v-model.number="entry.value"
          class="w-1/3 rounded border px-2 py-1 dark:bg-neutral-800 dark:text-white"
          placeholder="+1"
          :min="-10"
          :max="10"
        />

        <!-- Remove Button -->
        <button
          type="button"
          @click="removeRow(index)"
          class="text-red-500 hover:text-red-700"
        >
          ×
        </button>
      </div>

      <button
        type="button"
        @click="addRow"
        class="mt-2 rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
      >
        ➕ Add Stat
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { playableClassService } from '@/features/admin/services/playableClassService'

const props = defineProps<{
  modelValue: Record<string, number>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, number>): void
}>()

type StatRow = { stat: string; value: number }

const statOptions = ref<{ name: string; displayName: string }[]>([])
const localStats = ref<StatRow[]>([])

// Load available stat names
onMounted(async () => {
  const result = await playableClassService.getStats()
  statOptions.value = result.map((s: any) => ({
    name: s.name,
    displayName: s.displayName || s.name,
  }))
})

// Initialize local state from modelValue
onMounted(() => {
  localStats.value = Object.entries(props.modelValue || {}).map(([stat, value]) => ({
    stat,
    value,
  }))
})

// Emit when local state changes
watch(localStats, () => {
  const output: Record<string, number> = {}
  for (const { stat, value } of localStats.value) {
    if (stat) output[stat] = value
  }
  emit('update:modelValue', output)
}, { deep: true })

function addRow() {
  localStats.value.push({ stat: '', value: 0 })
}

function removeRow(index: number) {
  localStats.value.splice(index, 1)
}
</script>
