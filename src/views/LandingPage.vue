<template>
  <div
    class="min-h-screen flex flex-col bg-cover bg-center"
    style="background-image: url('/backgrounds/bg-landing.webp')"
  >
    <MainLayout>
      <section class="flex flex-col items-center justify-center text-center px-6 py-20">
        <!-- Headline -->
        <div class="bg-white/80 text-gray-900 text-4xl md:text-6xl font-extrabold px-6 py-4 rounded-xl shadow-md mb-6 leading-tight max-w-2xl mx-auto text-center">
          Master a Language, Forge Your Adventure!
        </div>

        <!-- Subheadline -->
        <div class="bg-slate-800/70 text-gray-100 text-lg md:text-xl px-6 py-4 rounded-xl shadow-md max-w-2xl mx-auto text-center mb-8">
          Join a story-driven RPG where every quest helps you learn German.
        </div>

        <!-- CTA Button Section -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <!-- Register Button -->
          <RouterLink to="/register">
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-xl transition shadow-md">
              Start Your Journey
            </button>
          </RouterLink>

          <!-- Login Button -->
          <RouterLink to="/login">
            <button class="bg-gray-100 hover:bg-gray-200 text-gray-900 text-lg font-semibold px-6 py-3 rounded-xl transition shadow-md">
              Already Enlisted?
            </button>
          </RouterLink>
        </div>

      </section>
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
</script>
