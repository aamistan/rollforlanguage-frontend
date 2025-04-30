<template>
    <div class="bg-slate-200/20 p-4 rounded-xl shadow hover:shadow-lg transition duration-300 text-left flex flex-col items-start">
      <div class="text-4xl mb-4">{{ icon }}</div>
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-300">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  });
  </script>
  