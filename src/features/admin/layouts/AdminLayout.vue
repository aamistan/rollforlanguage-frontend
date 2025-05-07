<template>
    <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
      <!-- Topbar -->
      <Topbar />
  
      <div class="flex flex-1">
        <!-- Sidebar -->
        <Sidebar />
  
        <!-- Main content -->
        <main class="flex-1 p-6 overflow-y-auto">
          <router-view />
        </main>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '../components/Sidebar.vue'
  import Topbar from '../components/Topbar.vue'
   
  const backgroundStyle = { backgroundImage: "url('/backgrounds/bg-admin.webp')" }
  </script>
  
  <style scoped>
  /* Optional: Add layout-specific styles here */
  </style>
  