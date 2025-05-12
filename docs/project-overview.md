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
- `UserTableWidget.vue`, `UserMetricsWidget.vue`, `FlaggedUsersWidget.vue` → all use AdminModal + 🛠 hover tools

### Sidebar Tools:

- Injected via `UserDashboardSidebarTools.vue`
- Defined in `adminUserDashboardTools.ts` (role-filtered)
- Tools:
  - ➕ Add User (opens modal)
  - 🔍 Search Users (focus/expand input)
  - 📥 Export Users
  - ⚙️ Global Settings
  - 🛡 Manage Roles
  - 📋 Audit Logs
  - 👥 Merge Users
  - ✅ Bulk Actions

### Shared Store:

- `userDashboardStore.ts` (Pinia)
  - Manages tool states, modal flags
  - Tracks `lastUserListRefresh` to allow external refresh triggers
  - Handles `createUser()` via service + `userCreationError` feedback

### Services:

- `userService.ts`
  - `getUsers(query)` → supports search, filter, pagination, sort, role filter
  - `createUser(payload)` → secure role-based user creation
  - Auto-cleans query params to avoid 400 errors

### Integrated Components:

- `UserTable.vue` → table in modal from `UserTableWidget`
  - ✅ Debounced search
  - ✅ Pagination (page, limit)
  - ✅ Role styling
  - ✅ Backend sync via `getUsers()`

---

### ✅ Features Implemented

- UserManagementView.vue scaffolded
- Widget interaction patterns mirrored from admin system
- Hover 🛠 icon opens AdminModal with responsive sizing
- Modal size system (`size="lg"`, etc.) implemented
- Shared store triggers reactive fetches
- Clean API sync (pagination, filtering, search)
- Improved role badge styles and table readability
- Toasts, error handling, loading states added

---

## 📝 **Next Steps**

- Implement role-based action buttons (edit, suspend, etc.)
- Connect audit log and settings modals to APIs
- Add user-specific row dropdown with moderation controls
- Wire metrics widget with real backend stats
- Add bulk action modal + backend sync

---

✅ **Current Frontend Milestone Achieved:**

- Admin + User dashboards architecturally aligned  
- Widget/modal/tool patterns standardized across dashboards  
- User management system fully scaffolded and live-integrated with backend  
- Role-based sidebar tool injection working  
- User CRUD interaction (create, view/paginate) online

---

> *We build not for today, but for tomorrow and beyond.*
