<template>
  <DashboardWidgetGrid>
    <!-- Playable Table Widget -->
    <PlayableTableWidget />

    <!-- Playable Metrics Widget -->
    <PlayableMetricsWidget />

    <!-- Featured Tags Widget -->
    <FeaturedTagsWidget />
  </DashboardWidgetGrid>
</template>

<script setup lang="ts">
// Admin dashboard widgets for managing playable classes character classes & species species
import PlayableMetricsWidget from '@/features/admin/components/playableDashboard/PlayableMetricsWidget.vue'
import PlayableTableWidget from '@/features/admin/components/playableDashboard/PlayableTableWidget.vue'
import FeaturedTagsWidget from '@/features/admin/components/playableDashboard/FeaturedTagsWidget.vue'
import DashboardWidgetGrid from '@/features/admin/components/dashboard/DashboardWidgetGrid.vue'
</script>