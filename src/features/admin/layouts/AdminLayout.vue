<template>
  <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <!-- Topbar -->
    <Topbar />

    <div class="flex flex-1">
      <!-- Sidebar with injected tools -->
      <Sidebar>
        <template #tools>
          <DashboardSidebarTools
            v-if="currentRouteName === 'AdminDashboard'"
            :user-role="userRole"
          />

          <UserDashboardSidebarTools
            v-else-if="currentRouteName === 'AdminUsers'"
            :user-role="userRole"
          />

          <CharacterDashboardSidebarTools
            v-else-if="currentRouteName === 'AdminCharacters'"
            :user-role="userRole"
          />
        </template>
      </Sidebar>

      <!-- Main content -->
      <main class="flex-1 p-6 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DashboardSidebarTools from '@/features/admin/components/dashboard/DashboardSidebarTools.vue'
import UserDashboardSidebarTools from '@/features/admin/components/userDashboard/UserDashboardSidebarTools.vue'
import CharacterDashboardSidebarTools from '@/features/admin/components/characterDashboard/CharacterDashboardSidebarTools.vue'
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'

// Current route name → used to determine which tools to render
const route = useRoute()
const currentRouteName = computed(() => route.name)

// Placeholder userRole → later pull from auth store
const userRole = 'superadmin'

const backgroundStyle = {
  backgroundImage: "url('/backgrounds/bg-admin.webp')"
}
</script>

<style scoped>
/* Optional: Add layout-specific styles here */
</style>
