<template>
    <div>
      <!-- Compact Widget Card -->
      <AdminCard @click="showModal = true" class="cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center space-x-4">
          <Icon name="Users" library="lucide" class="w-8 h-8 text-indigo-400" />
          <div>
            <h3 class="text-lg font-semibold">Users</h3>
            <p class="text-2xl font-bold">{{ totalUsers }}</p>
            <p class="text-sm text-gray-300">Click for details</p>
          </div>
        </div>
      </AdminCard>
  
      <!-- Expanded Modal -->
      <AdminModal v-model:visible="showModal" title="User Metrics">
        <div class="space-y-2">
          <p>Total Users: <strong>{{ totalUsers }}</strong></p>
          <p>Admins: <strong>{{ totalAdmins }}</strong></p>
          <p>Superadmins: <strong>{{ totalSuperadmins }}</strong></p>
  
          <!-- Example placeholder: could swap with chart/table later -->
          <div class="mt-4 p-4 bg-black bg-opacity-30 rounded text-sm">
            Placeholder for future chart or detailed user breakdown
          </div>
        </div>
      </AdminModal>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import Icon from '@/components/atoms/AppIcon.vue'
  import AdminCard from '@/features/admin/components/shared/AdminCard.vue'
  import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
  
 
  
  // Static example data
  const totalUsers = 527
  const totalAdmins = 23
  const totalSuperadmins = 4
  
  const showModal = ref(false)
  </script>
  
  <style scoped>
  /* Optional: extra hover/active styles */
  </style>
  