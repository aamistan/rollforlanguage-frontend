Here is your **fully updated and clean** version of the **Project Overview**, with all the User Management system updates, live data integration, widget patterns, and service/store interactions clearly integrated:

---

````markdown
# 🏰 **Roll for Language Frontend: Project Overview**

> *“We build not for today, but for tomorrow and beyond.”*

---

## 🌟 **Project Purpose & Vision**

The Roll for Language frontend is a modular, scalable Vue 3 application designed to deliver an immersive, gamified language-learning experience.  
Built for global deployment, it integrates responsive layouts, internationalization, real-time features, and continuous deployment pipelines — all guided by a forward-thinking clean architecture philosophy.

---

## 🏹 **Guiding Mantra**

> Every component, script, and deployment decision is made to support long-term growth, modularity, and maintainability.  
> We don’t just code for today’s needs; we architect for tomorrow’s expansions — scalable, international, and game-ready.

1. We build clean code.  
2. We build optimized code.  
3. We build using best practices.  
4. We build modernly.  
5. We write our wish list of tools/components/features… then make it so!

We ask the questions:  
What are the must-haves? What are the should-haves? What are the would-be-nice-to-haves?  
After we answer those questions, we include all of them.  
We build not for today, but for tomorrow and beyond.

---

## 💻 **Tech Stack**

| Layer                | Technology                                        |
|---------------------|--------------------------------------------------|
| Frontend Framework   | Vue 3 + Vite + Tailwind CSS                      |
| Frontend Hosting     | Vercel                                           |
| Backend Language     | Node.js                                          |
| Backend Hosting      | Railway                                          |
| API Structure        | Fastify                                          |
| Real-Time Layer      | Socket.IO                                        |
| Database             | PlanetScale                                      |
| Authentication       | JWT                                              |
| Static Asset Hosting | Vercel + GitHub                                  |
| i18n Support         | Vue I18n + JSON + Strapi (future)                |
| Audio Features       | Web MediaRecorder + Backblaze B2                 |
| Monitoring           | Sentry + Vercel logs                             |
| Analytics            | PostHog                                          |

---

## 📁 **Folder & File Structure**

Located under `/src`, the project uses a **domain-driven design**:

- `components/` → Atomic design (atoms, molecules, organisms, layouts)
- `features/` → Domain-specific modules (auth, dashboard, userDashboard, campaigns, inventory)
- `i18n/` → Internationalization files
- `router/` → Vue Router configs
- `services/`, `stores/`, `utils/`, `plugins/`, `sockets/` → Supporting logic
- Core files: `App.vue`, `main.ts`, `tailwind.config.ts`

Scaffold:

```bash
mkdir -p src/{assets,components/{atoms,molecules,organisms,layouts},features/{auth,dashboard,userDashboard,campaigns,inventory}/{components,stores,services,views},i18n,router,services,stores,utils,plugins,sockets}
```

---

## ⚙ **Key Components & Systems**

- **Navbar** → responsive, i18n, auth-aware navigation
- **Footer** → multilingual, flexible layout
- **Landing Page** → immersive RPG teaser, hero CTAs, feature grid
- **Layouts**:
  - `MainLayout.vue` → standard public layout
  - `AdminLayout.vue` → topbar + sidebar + routed content slot, with context-aware Sidebar injection

---

## 🏰 **Admin Dashboard System**

✅ Modular admin dashboard to manage users, system content, and platform health.

### Core Components:

- `AdminDashboardView.vue` → grid layout of summary widgets
- `DashboardWidgetGrid.vue` → accepts widget slots
- `UserMetricsWidget.vue`, `SystemOverviewWidget.vue`, `ContentSummaryWidget.vue`
- `AdminModal.vue` → reusable modal shell
- `DashboardSidebarTools.vue` → tools injected via config + role
- `adminDashboardTools.ts` → tool definition
- `dashboardStore.ts` → scoped Pinia store for admin view state

---

### ✅ Features Implemented

- Slot-injected sidebar tools based on route + role
- Config-driven tool rendering + filtering (`adminDashboardTools.ts`)
- Widget 🛠 tool → triggers modal
- Shared dashboard store to sync state between view, sidebar, and modals
- Hover styling enhancements for visibility/accessibility

---

## 🗂️ **User Management Dashboard System**

✅ Full user management interface under `/admin/users`, scaffolded for live API interaction and feature growth.

### Core View & Components:

- `UserManagementView.vue` → main dashboard view for user control
- `DashboardWidgetGrid.vue` reused for layout
- `UserTableWidget.vue`, `FlaggedUsersWidget.vue` → widget/modal pattern
- `UserTable.vue` → live user data table w/ pagination & filters

### Sidebar Tools:

- Injected via `UserDashboardSidebarTools.vue`
- Defined in `adminUserDashboardTools.ts` (role-filtered)
- Tools:
  - ➕ Add User
  - 🔍 Search Users
  - 📥 Export Users
  - ⚙️ Global Settings
  - 🛡 Manage Roles
  - 📋 Audit Logs
  - 👥 Merge Users
  - ✅ Bulk Actions

### Shared Store:

- `userDashboardStore.ts` (Pinia)
  - Manages modal visibility and sidebar tool state
  - Tracks `lastUserListRefresh` for reactive triggers
  - `createUser(payload)` with `userCreationError` handling
  - `fetchUserMetrics()` pulls `/admin/users/metrics` API

### Services:

- `userService.ts`
  - `getUsers(query)` → paginated search/sort/filter request
  - `createUser(payload)` → secure user creation
  - `getUserMetrics()` → stats for `UserTableWidget`
  - Auto-cleans query params to prevent 400 errors

---

### ✅ Features Implemented

- UserManagementView fully scaffolded
- DashboardWidgetGrid reused for layout parity
- Widgets with modals, hover tools, and local state
- Metrics integrated from `/admin/users/metrics`
- User table: pagination, search, sorting, loading states
- Modal sizing system implemented (`size="4xl"`, etc.)
- Live data sync via userDashboardStore watchers
- Red squiggle monsters slain ☠️

---

## 📝 **Next Steps**

- Expand widget detail modals (e.g. Flagged Users)
- Implement user action dropdowns (edit, suspend, delete)
- Populate Manage Roles, Audit Logs, Global Settings
- Hook up bulk action tools with backend
- Add toast feedback on actions (create, edit, suspend)

---

✅ **Current Frontend Milestone Achieved**

- ✅ Fully modular user management system
- ✅ Backend API integration with stats + table
- ✅ Shared store + service architecture refined
- ✅ Widget + modal + sidebar pattern validated across views
- ✅ Clean dev hand-off for future expansion

---

> *We build not for today, but for tomorrow and beyond.*
````

Let me know when you'd like to deprecate the placeholder `UserMetricsWidget.vue`, or if you want to repurpose it into something new!
