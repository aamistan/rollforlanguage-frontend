<template>
  <DashboardWidgetGrid>
    <!-- Character Table Widget -->
    <CharacterTableWidget />

    <!-- Character Metrics Widget -->
    <CharacterMetricsWidget />

    <!-- Featured Tags Widget -->
    <FeaturedTagsWidget />
  </DashboardWidgetGrid>
</template>

<script setup lang="ts">
// Admin dashboard widgets for managing character classes & species
import CharacterMetricsWidget from '@/features/admin/components/characterDashboard/CharacterMetricsWidget.vue'
import CharacterTableWidget from '@/features/admin/components/characterDashboard/CharacterTableWidget.vue'
import FeaturedTagsWidget from '@/features/admin/components/characterDashboard/FeaturedTagsWidget.vue'
import DashboardWidgetGrid from '@/features/admin/components/dashboard/DashboardWidgetGrid.vue'
</script>