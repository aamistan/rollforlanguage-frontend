// /src/features/admin/utils/dashboardThemes.ts

import { AppRouteNames } from '@/router/routes'

export interface DashboardTheme {
  routeName: AppRouteNames
  widgetColor: string
  widgetTextColor: string
  sidebarColor: string
  sidebarTextColor: string
  accentColor: string          // e.g., 'blue-500'
  accentRing: string           // Derived utility: hover:ring-blue-500
}

export const dashboardThemes: DashboardTheme[] = [
  {
    routeName: AppRouteNames.AdminDashboard,
    widgetColor: 'bg-white dark:bg-neutral-900',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-neutral-900',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'blue-500',
    accentRing: 'hover:ring-blue-500',
  },
  {
    routeName: AppRouteNames.AdminUsers,
    widgetColor: 'bg-white dark:bg-black',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-black',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'rose-500',
    accentRing: 'hover:ring-rose-500',
  },
  {
    routeName: AppRouteNames.AdminCharacters,
    widgetColor: 'bg-white dark:bg-black',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-black',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'purple-500',
    accentRing: 'hover:ring-purple-500',
  },
  // Future: Content, Campaigns, System dashboards
]
