<template>
  <MainLayout>
    <section class="flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Start Your Adventure Today
      </h1>

      <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        Learn languages while conquering quests.
      </p>

      <RouterLink to="/register">
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-xl transition">
          Get Started
        </button>
      </RouterLink>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
</script>
