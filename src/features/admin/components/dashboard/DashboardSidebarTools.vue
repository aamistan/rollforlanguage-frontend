<template>
    <div class="flex flex-col gap-4">
      <button
        v-for="tool in filteredTools"
        :key="tool.name"
        class="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-left"
        @click="handleToolClick(tool.action)"
      >
        <AppIcon :name="tool.icon" :library="tool.library" />
        <span>{{ tool.name }}</span>
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { defineProps } from 'vue'
  import AppIcon from '@/components/atoms/AppIcon.vue'
  import { adminDashboardTools, AdminDashboardTool } from '@/features/admin/utils/adminDashboardTools'
  
  const props = defineProps<{
    userRole: 'admin' | 'super-admin'
  }>()

  
  // Filter tools by role
  const filteredTools = computed(() =>
    adminDashboardTools.filter(tool =>
      !tool.roles || tool.roles.includes(props.userRole)
    )
  )
  
  // Placeholder → log tool action for now
  function handleToolClick(action: string) {
    console.log(`Tool clicked: ${action}`)
    // future: emit event, inject handler, etc.
  }
  </script>
  
  <style scoped>
  /* Optional: style tweaks here */
  </style>
  