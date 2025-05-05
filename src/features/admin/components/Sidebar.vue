<template>
    <aside class="w-64 bg-black bg-opacity-60 h-full p-4">
      <nav class="flex flex-col space-y-2">
        <router-link
          v-for="link in adminNavLinks"
          :key="link.name"
          :to="{ name: link.routeName }"
          class="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700 text-white"
          active-class="bg-gray-800"
        >
          <AppIcon :name="link.icon" :library="link.library" />
          <span>{{ link.name }}</span>
        </router-link>
      </nav>
    </aside>
  </template>
  
  <script setup lang="ts">
  import AppIcon from '@/components/atoms/AppIcon.vue'
  import { adminNavLinks } from '@/features/admin/utils/adminNavLinks'
  </script>
  
  <style scoped>
  /* Optional: add transition for future collapsible behavior */
  </style>
  