// /src/features/admin/utils/dashboardThemes.ts

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@root/tailwind.config'
import { AppRouteNames } from '@/router/routes'

export interface DashboardTheme {
  routeName: AppRouteNames
  widgetColor: string
  widgetTextColor: string
  sidebarColor: string
  sidebarTextColor: string
  accentColor: string        // e.g. 'blue-500'
  accentRing: string         // e.g. 'hover:ring-blue-500 hover:ring-offset-2'
  accentBar: string          // e.g. 'bg-blue-500'
  accentBorder: string       // e.g. 'border-blue-500'
  accentValue: string        // e.g. '#3b82f6' (raw hex) for inline border
}

// 🛠 Resolve Tailwind config at runtime
const fullConfig = resolveConfig(tailwindConfig)

// 🎨 Tailwind-safe helpers
function getColorValue(twKey: string): string {
  const [base, shade] = twKey.split('-')
  const colorGroup = fullConfig.theme?.colors?.[base as keyof typeof fullConfig.theme.colors]

  if (typeof colorGroup === 'object' && shade in colorGroup) {
    return colorGroup[shade]
  }

  if (typeof colorGroup === 'string') {
    return colorGroup
  }

  console.warn(`⚠️ Could not resolve Tailwind color for: ${twKey}`)
  return '#3b82f6' // fallback
}

function getRingClass(accent: string): string {
  return `hover:ring-${accent} hover:ring-offset-2`
}

function getAccentBarClass(accent: string): string {
  return `bg-${accent}`
}

function getBorderClass(accent: string): string {
  return `border-${accent}`
}

// 🎯 Centralized theme definitions
export const dashboardThemes: DashboardTheme[] = [
  {
    routeName: AppRouteNames.AdminDashboard,
    widgetColor: 'bg-white dark:bg-neutral-900',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-neutral-900',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'blue-500',
    accentRing: getRingClass('blue-500'),
    accentBar: getAccentBarClass('blue-500'),
    accentBorder: getBorderClass('blue-500'),
    accentValue: getColorValue('blue-500'),
  },
  {
    routeName: AppRouteNames.AdminUsers,
    widgetColor: 'bg-white dark:bg-black',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-black',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'rose-500',
    accentRing: getRingClass('rose-500'),
    accentBar: getAccentBarClass('rose-500'),
    accentBorder: getBorderClass('rose-500'),
    accentValue: getColorValue('rose-500'),
  },
  {
    routeName: AppRouteNames.AdminCharacters,
    widgetColor: 'bg-white dark:bg-black',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-black',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'purple-500',
    accentRing: getRingClass('purple-500'),
    accentBar: getAccentBarClass('purple-500'),
    accentBorder: getBorderClass('purple-500'),
    accentValue: getColorValue('purple-500'),
  },
  // 📌 Future: Add Content, Campaigns, System...
]
