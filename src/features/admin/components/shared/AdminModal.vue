<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      @click.self="close"
    >
      <div
        class="relative bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-lg p-6"
        role="dialog"
        aria-modal="true"
      >
        <!-- Close Button -->
        <button
          @click="close"
          class="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Close"
        >
          ✕
        </button>

        <!-- Modal Title -->
        <h2 v-if="title" class="text-xl font-semibold mb-4">
          {{ title }}
        </h2>

        <!-- Slot for modal content -->
        <div>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  visible: boolean
  title?: string
}>()

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
