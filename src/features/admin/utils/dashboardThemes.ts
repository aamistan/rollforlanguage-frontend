import { AppRouteNames } from '@/router/routes'

export interface DashboardTheme {
  routeName: AppRouteNames
  widgetColor: string
  widgetTextColor: string
  sidebarColor: string
  sidebarTextColor: string
}

export const dashboardThemes: DashboardTheme[] = [
  {
    routeName: AppRouteNames.AdminDashboard,
    widgetColor: 'bg-white dark:bg-neutral-900',
    widgetTextColor: 'text-black dark:text-white',
    sidebarColor: 'bg-white dark:bg-neutral-900',
    sidebarTextColor: 'text-black dark:text-white',
  },
  {
    routeName: AppRouteNames.AdminUsers,
    widgetColor: 'bg-rose-50 dark:bg-neutral-800',
    widgetTextColor: 'text-rose-600 dark:text-rose-200',
    sidebarColor: 'bg-rose-50 dark:bg-neutral-800',
    sidebarTextColor: 'text-rose-600 dark:text-rose-200',
  },
  {
    routeName: AppRouteNames.AdminCharacters,
    widgetColor: 'bg-neutral-900',
    widgetTextColor: 'text-white',
    sidebarColor: 'bg-neutral-900',
    sidebarTextColor: 'text-white',
  },
  // You can add Content, Campaigns, System later
]
