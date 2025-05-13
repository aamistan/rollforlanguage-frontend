// /src/features/admin/utils/dashboardThemes.ts

import { AppRouteNames } from '@/router/routes'

export interface DashboardTheme {
  routeName: AppRouteNames
  widgetColor: string
  widgetTextColor: string
  sidebarColor: string
  sidebarTextColor: string
  accentColor: string // tailwind-compatible string, e.g., 'purple-500'
}

// 🎨 Centralized Theme Config
export const dashboardThemes: DashboardTheme[] = [
  {
    routeName: AppRouteNames.AdminDashboard,
    widgetColor: 'bg-white dark:bg-neutral-900',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-neutral-900',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'blue-500',
  },
  {
    routeName: AppRouteNames.AdminUsers,
    widgetColor: 'bg-white dark:bg-black',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-black',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'rose-500',
  },
  {
    routeName: AppRouteNames.AdminCharacters,
    widgetColor: 'bg-white dark:bg-black',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-black',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'purple-500',
  },
  // Future: content, campaigns, system...
]

/* -------------------------
🎯 Accent Utility Functions
-------------------------- */

// Tailwind-safe class for ring
export function getRingClass(accent: string): string {
  return `hover:ring-${accent} hover:ring-offset-2`
}

// Tailwind-safe class for widget border
export function getBorderClass(accent: string): string {
  return `border-${accent}`
}

// Tailwind-safe background for accent bar
export function getAccentBarClass(accent: string): string {
  return `bg-${accent}`
}
