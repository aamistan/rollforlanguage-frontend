<template>
  <DashboardWidgetGrid>
    <!-- Character Table Widget -->
    <PlayableTableWidget />

    <!-- Character Metrics Widget -->
    <PlayableMetricsWidget />

    <!-- Featured Tags Widget -->
    <FeaturedTagsWidget />
  </DashboardWidgetGrid>
</template>

<script setup lang="ts">
// Admin dashboard widgets for managing character classes & species
import PlayableMetricsWidget from '@/features/admin/components/playableDashboard/PlayableMetricsWidget.vue'
import PlayableTableWidget from '@/features/admin/components/playableDashboard/PlayableTableWidget.vue'
import FeaturedTagsWidget from '@/features/admin/components/characterDashboard/FeaturedTagsWidget.vue'
import DashboardWidgetGrid from '@/features/admin/components/dashboard/DashboardWidgetGrid.vue'
</script>