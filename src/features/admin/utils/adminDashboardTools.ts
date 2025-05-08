// /features/admin/utils/adminDashboardTools.ts

export interface AdminDashboardTool {
    name: string               // Display label
    icon: string               // Icon name (Lucide, Heroicons, Iconify)
    library?: 'lucide' | 'heroicons' | 'iconify'  // Optional icon library
    action: string             // Identifier for handler function
    roles?: ('admin' | 'super-admin')[]           // Optional: restrict by role
  }
  
  export const adminDashboardTools: AdminDashboardTool[] = [
    {
      name: 'Refresh Metrics',
      icon: 'RefreshCcw',
      library: 'lucide',
      action: 'refreshMetrics',
      roles: ['admin', 'super-admin'],
    },
    {
      name: 'Customize Dashboard',
      icon: 'Settings',
      library: 'lucide',
      action: 'customizeDashboard',
      roles: ['admin', 'super-admin'],
    },
    {
      name: 'View System Logs',
      icon: 'FileText',
      library: 'lucide',
      action: 'viewSystemLogs',
      roles: ['super-admin'],
    },
    {
      name: 'Expand Alerts Panel',
      icon: 'AlertCircle',
      library: 'lucide',
      action: 'expandAlertsPanel',
      roles: ['admin', 'super-admin'],
    },
  ]
  