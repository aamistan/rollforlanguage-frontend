import { AppRouteNames, AppRoutePaths } from '@/router/routes'

export interface AdminNavLink {
  name: string       // Display label
  routeName: string  // From AppRouteNames
  path: string       // From AppRoutePaths
  icon: string       // Icon name
  library?: 'lucide' | 'heroicons' | 'iconify'  // Optional: icon library (default to lucide)
}

export const adminNavLinks: AdminNavLink[] = [
  {
    name: 'Dashboard',
    routeName: AppRouteNames.AdminDashboard,
    path: AppRoutePaths.Admin,
    icon: 'LayoutDashboard',   // Lucide icon
    library: 'lucide',
  },
  {
    name: 'Users',
    routeName: AppRouteNames.AdminUsers,
    path: AppRoutePaths.AdminUsers,
    icon: 'Users',             // Lucide icon
    library: 'lucide',
  },
  {
    name: 'Campaigns',
    routeName: AppRouteNames.AdminCampaigns,
    path: AppRoutePaths.AdminCampaigns,
    icon: 'mdi:sword-cross',   // Iconify fantasy icon (Material Design Icons)
    library: 'iconify',
  },
  {
    name: 'Content',
    routeName: AppRouteNames.AdminContent,
    path: AppRoutePaths.AdminContent,
    icon: 'BookOpenIcon',      // Heroicons icon
    library: 'heroicons',
  },
  {
    name: 'System',
    routeName: AppRouteNames.AdminSystem,
    path: AppRoutePaths.AdminSystem,
    icon: 'ServerCog',         // Lucide icon
    library: 'lucide',
  },
]
