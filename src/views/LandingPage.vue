<template>
  <MainLayout>
    <ThreeColumnShell>
      <!-- LEFT COLUMN -->
      <template #left>
        <LandingValueShowcase />
        <!-- Future: PlayablePreviewCarousel can go here -->
      </template>

      <!-- CENTER COLUMN -->
      <template #center>
        <LandingHeroSection />
      </template>

      <!-- RIGHT COLUMN -->
      <template #right>
        <LandingExperienceCarousel />
      </template>
    </ThreeColumnShell>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
import ThreeColumnShell from '@/components/layouts/ThreeColumnShell.vue';
import LandingValueShowcase from '@/components/organisms/landing-page/LandingValueShowcase.vue';
import LandingExperienceCarousel from '@/components/organisms/landing-page/LandingExperienceCarousel.vue';
import LandingHeroSection from '@/components/organisms/landing-page/LandingHeroSection.vue';
// Future: import PlayablePreviewCarousel from '@/components/organisms/landing-page/PlayablePreviewCarousel.vue';
</script>
