<template>
    <div class="bg-white/5 p-4 rounded-lg shadow text-center hover:shadow-md transition duration-300">
      <div class="text-3xl mb-2">{{ icon }}</div>
      <h4 class="text-lg font-semibold mb-1">{{ title }}</h4>
      <p class="text-sm text-gray-300">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  });
  </script>
  