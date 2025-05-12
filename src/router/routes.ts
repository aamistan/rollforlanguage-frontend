export enum AppRouteNames {
  Landing = 'Landing',
  Login = 'Login',
  Register = 'Register',
  Dashboard = 'Dashboard',
  ForgotPassword = 'ForgotPassword',

  // Admin routes
  Admin = 'Admin',                    // Parent route name
  AdminDashboard = 'AdminDashboard',  // Dashboard child route
  AdminUsers = 'AdminUsers',
  AdminCampaigns = 'AdminCampaigns',
  AdminContent = 'AdminContent',
  AdminSystem = 'AdminSystem',
  AdminCharacters = 'AdminCharacters', // ✅ NEW: Character management route
}

export enum AppRoutePaths {
  Landing = '/',
  Login = '/login',
  Register = '/register',
  Dashboard = '/dashboard',
  ForgotPassword = '/forgot-password',

  // Admin paths
  Admin = '/admin',                   // Parent route path
  AdminDashboard = '/admin/dashboard',
  AdminUsers = '/admin/users',
  AdminCampaigns = '/admin/campaigns',
  AdminContent = '/admin/content',
  AdminSystem = '/admin/system',
  AdminCharacters = '/admin/characters', // ✅ NEW: Character management path
}
