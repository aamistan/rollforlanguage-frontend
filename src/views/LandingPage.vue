<template>
  <div
    class="min-h-screen flex flex-col bg-cover bg-center"
    style="background-image: url('src/assets/backgrounds/bg-landing.webp')"
  >
    <MainLayout>
      <section class="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Master a Language, Forge Your Adventure!
        </h1>

        <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Join a story-driven RPG where every quest helps you learn German.
        </p>

        <RouterLink to="/register">
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-xl transition">
            Start Your Journey
          </button>
        </RouterLink>
      </section>
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
</script>
