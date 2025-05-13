import { AppRouteNames } from '@/router/routes'

export interface DashboardTheme {
  routeName: AppRouteNames
  widgetColor: string
  widgetTextColor: string
  sidebarColor: string
  sidebarTextColor: string
  accentColor: string // 💡 NEW: for hover outlines and widget edge bars
}

export const dashboardThemes: DashboardTheme[] = [
  {
    routeName: AppRouteNames.AdminDashboard,
    widgetColor: 'bg-white dark:bg-neutral-900',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-neutral-900',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'blue-500', // ✅ Calm, tech-feel
  },
  {
    routeName: AppRouteNames.AdminUsers,
    widgetColor: 'bg-white dark:bg-black',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-black',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'rose-500', // ✅ Soft red, people-oriented
  },
  {
    routeName: AppRouteNames.AdminCharacters,
    widgetColor: 'bg-white dark:bg-black',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-black',
    sidebarTextColor: 'text-black dark:text-white',
    accentColor: 'purple-500', // ✅ Magical and fantasy-aligned
  },
  // You can add Content, Campaigns, System later
]
