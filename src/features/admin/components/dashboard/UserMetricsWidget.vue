<!-- /src/features/admin/components/dashboard/UserMetricsWidget.vue -->

<template>
  <WidgetWrapper title="User Metrics" icon="Users">
    <!-- Hover tools overlay -->
    <button
      @click="isModalOpen = true"
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 hover:bg-gray-900 rounded p-1"
      aria-label="Widget Tools"
    >
      🛠
    </button>

    <p>This is placeholder content for the User Metrics widget modal.</p>

    <AdminModal
      :visible="isModalOpen"
      @close="isModalOpen = false"
      title="User Metrics Details"
    >
      <p>This is placeholder content for the User Metrics widget modal.</p>
    </AdminModal>
  </WidgetWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WidgetWrapper from '@/components/molecules/WidgetWrapper.vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

const isModalOpen = ref(false)
</script>
