<template>
  <div class="relative bg-white rounded-lg shadow p-4 group">
    <!-- Hover tools overlay -->
    <button
      @click="isModalOpen = true"
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 hover:bg-gray-900 rounded p-1"
      aria-label="Widget Tools"
    >
      🛠
    </button>

    <h2 class="text-lg font-semibold">Flagged Users Widget (Placeholder)</h2>
    <p class="text-gray-500">A list of flagged users for review will appear here.</p>

    <!-- Modal -->
    <AdminModal :visible="isModalOpen" @close="isModalOpen = false" title="Flagged Users Details">
      <p>This is placeholder content for the Flagged Users widget modal.</p>
    </AdminModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

const isModalOpen = ref(false)
</script>
