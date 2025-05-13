<!-- /src/features/admin/components/dashboard/ContentSummaryWidget.vue -->

<template>
  <WidgetWrapper title="Content Summary" icon="BookOpen">
    <template #hover-tools>
      <button
        @click="isModalOpen = true"
        class="text-sm text-blue-600 hover:underline"
      >
        🛠 Manage
      </button>
    </template>

    <p>This is placeholder content for the Content Summary widget modal.</p>

    <AdminModal
      :visible="isModalOpen"
      @close="isModalOpen = false"
      title="Content Summary Details"
    >
      <p>This is placeholder content for the Content Summary widget modal.</p>
    </AdminModal>
  </WidgetWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WidgetWrapper from '@/components/molecules/WidgetWrapper.vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'

const isModalOpen = ref(false)
</script>
