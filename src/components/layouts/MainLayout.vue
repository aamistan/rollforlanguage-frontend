<template>
  <div class="min-h-screen flex flex-col">
    <NavbarPlaceholder />

    <main class="flex-1">
      <slot />
    </main>

    <FooterPlaceholder />
  </div>
</template>

<script setup>
import NavbarPlaceholder from '@/components/organisms/Navbar.vue';
import FooterPlaceholder from '@/components/organisms/Footer.vue';
</script>
