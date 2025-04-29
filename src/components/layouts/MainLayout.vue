<!-- src/components/layouts/MainLayout.vue -->
<template>
    <div class="min-h-screen flex flex-col bg-cover bg-center" :style="backgroundStyle">
      <NavbarPlaceholder />
      
      <main class="flex-1">
        <slot />
      </main>
  
      <FooterPlaceholder />
    </div>
  </template>
  
  <script setup>
  import NavbarPlaceholder from '@/components/organisms/NavbarPlaceholder.vue';
  import FooterPlaceholder from '@/components/organisms/FooterPlaceholder.vue';
  
  const backgroundStyle = {
    backgroundImage: "url('/assets/backgrounds/landing-page-bg.jpg')",
  };
  </script>
  