<template>
  <div class="min-h-screen flex flex-col bg-cover bg-center" style="background-image: url('backgrounds/bg-landing.webp');">
    <MainLayout>
      <ThreeColumnShell>
        <!-- LEFT COLUMN -->
        <template #left>
          <LandingValueShowcase />
          <PlayablePreviewCarousel />
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
  </div>
</template>

<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
import ThreeColumnShell from '@/components/layouts/ThreeColumnShell.vue';
import LandingValueShowcase from '@/components/organisms/landing-page/LandingValueShowcase.vue';
import LandingExperienceCarousel from '@/components/organisms/landing-page/LandingExperienceCarousel.vue';
import LandingHeroSection from '@/components/organisms/landing-page/LandingHeroSection.vue';
import PlayablePreviewCarousel from '@/components/organisms/landing-page/PlayablePreviewCarousel.vue';
</script>
