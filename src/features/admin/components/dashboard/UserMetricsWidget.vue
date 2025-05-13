<!-- /src/features/admin/components/dashboard/UserMetricsWidget.vue -->

<template>
  <WidgetWrapper title="User Metrics" icon="Users">
    <template #hover-tools>
      <button
        @click="isModalOpen = true"
        class="text-sm text-blue-600 hover:underline"
      >
        🛠 Manage
      </button>
    </template>

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
