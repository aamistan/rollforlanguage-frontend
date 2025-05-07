<template>
    <div class="w-full bg-black bg-opacity-60 text-white rounded-lg p-4 shadow">
      <h2 class="text-2xl font-bold">Welcome back, {{ username }}!</h2>
      <p class="text-sm">You are logged in as <span class="font-semibold capitalize">{{ role }}</span>.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    username: string
    role: string
  }>()
  </script>
  
  <style scoped>
  /* Optional: add hover/transition styles later */
  </style>
  