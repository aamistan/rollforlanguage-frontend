<template>
  <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <!-- Topbar -->
    <header class="w-full flex items-center justify-between px-6 py-4 bg-black bg-opacity-70">
      <h1 class="text-xl font-bold text-white">Admin Dashboard</h1>
      <button @click="handleLogout" class="text-white hover:underline">
        Logout
      </button>
    </header>

    <!-- Main content slot -->
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '@/features/auth/hooks/useAuth'

const { logout } = useAuth()

function handleLogout() {
  logout()
}

// Example: pull background from props or hardcode it here
const backgroundStyle = computed(() => ({
  backgroundImage: "url('backgrounds/bg-admin.webp')",
}))
</script>
