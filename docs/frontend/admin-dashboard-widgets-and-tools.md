
---

````ts
/**
 * Admin Dashboard View & Supporting Components
 * 
 * Related Documentation:
 * /docs/frontend/admin-dashboard.md
 * 
 * Purpose:
 * - Establishes the core Admin Dashboard view and architecture
 * - Sets up a slot-based Sidebar that dynamically injects tool panels
 * - Wires a shared dashboard-level Pinia store to manage events and state
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# AdminDashboardView Component

## Overview
> Main admin dashboard view displayed at `/admin/dashboard`.  
> Hosts the WelcomeBanner, widget grid, and integrates with shared dashboard store for state management.

## Location
> `/features/admin/views/AdminDashboardView.vue`

## Features
- [x] Renders `WelcomeBanner` with dynamic username + role
- [x] Uses `DashboardWidgetGrid` slot component for widgets
- [x] Injects `DashboardSidebarTools` via `Sidebar` slot from `AdminLayout`
- [x] Reacts to `dashboardStore` state (future reactive banners, etc.)

## Props
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| *none*     | —    | —       | — |

## Emits
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| *none*     | —       | — |

## Dependencies
- `WelcomeBanner.vue` — displays username + role
- `DashboardWidgetGrid.vue` — renders widgets in responsive grid
- `UserMetricsWidget.vue`, `SystemOverviewWidget.vue`, `ContentSummaryWidget.vue`
- `DashboardSidebarTools.vue` (via `Sidebar` slot injection)

## Usage
```vue
<AdminDashboardView />
````

---

# DashboardSidebarTools Component

## Overview

> Renders the list of admin dashboard tools inside the Sidebar.
> Tools are dynamically driven by config and filtered by user role.

## Location

> `/features/admin/components/dashboard/DashboardSidebarTools.vue`

## Features

* [x] Dynamically renders buttons from `adminDashboardTools.ts`
* [x] Filters tools by `userRole` prop
* [x] Wires button clicks to `dashboardStore` actions
* [x] Opens local modal for "View System Logs"

## Props

| Prop Name | Type                    | Default | Description                    |
| :-------- | :---------------------- | :------ | :----------------------------- |
| userRole  | 'admin' \| 'superadmin' | —       | User role used to filter tools |

## Emits

| Event Name | Payload | Description |
| :--------- | :------ | :---------- |
| *none*     | —       | —           |

## Dependencies

* `AppIcon.vue` — displays tool icons
* `AdminModal.vue` — shows system logs modal
* `adminDashboardTools.ts` — centralized tool metadata config
* `useDashboardStore` — shared dashboard store for state + actions

## Usage

```vue
<DashboardSidebarTools :user-role="userRole" />
```

---

# DashboardWidgetGrid Component

## Overview

> Slot-based grid wrapper for dashboard widgets.
> Handles responsive grid layout for widgets.

## Location

> `/features/admin/components/dashboard/DashboardWidgetGrid.vue`

## Features

* [x] Defines grid structure via Tailwind utility classes
* [x] Provides `<slot />` to insert widgets
* [x] Responsive: single-column → 2 → 3 columns

## Props

| Prop Name | Type | Default | Description |
| :-------- | :--- | :------ | :---------- |
| *none*    | —    | —       | —           |

## Emits

| Event Name | Payload | Description |
| :--------- | :------ | :---------- |
| *none*     | —       | —           |

## Dependencies

* *none*

## Usage

```vue
<DashboardWidgetGrid>
  <UserMetricsWidget />
  <SystemOverviewWidget />
  <ContentSummaryWidget />
</DashboardWidgetGrid>
```

---

# dashboardStore (Pinia Store)

## Overview

> Shared reactive store managing dashboard-level state and events.

## Location

> `/features/admin/stores/dashboardStore.ts`

## Features

* [x] Tracks `isCustomizeMode` (editing state)
* [x] Tracks `isAlertsExpanded` (alerts panel visibility)
* [x] Provides `refreshMetrics()` action (widgets can watch timestamp)
* [x] Centralizes all dashboard-level events/state

## State

| Key                  | Type    | Default    | Description                           |
| :------------------- | :------ | :--------- | :------------------------------------ |
| isCustomizeMode      | boolean | false      | Whether dashboard is in edit mode     |
| isAlertsExpanded     | boolean | false      | Whether alerts panel is expanded      |
| lastRefreshTimestamp | number  | Date.now() | Timestamp to trigger widget refreshes |

## Actions

| Action         | Description                       |
| :------------- | :-------------------------------- |
| enterCustomize | Sets `isCustomizeMode` to `true`  |
| exitCustomize  | Sets `isCustomizeMode` to `false` |
| toggleAlerts   | Flips `isAlertsExpanded`          |
| refreshMetrics | Updates `lastRefreshTimestamp`    |

## Usage

```ts
const dashboardStore = useDashboardStore()
dashboardStore.refreshMetrics()
```

---

# adminDashboardTools Config

## Overview

> Centralized metadata for admin dashboard sidebar tools.
> Defines tool labels, icons, roles, and action keys.

## Location

> `/features/admin/utils/adminDashboardTools.ts`

## Features

* [x] Defines tool metadata array
* [x] Supports role-based visibility
* [x] Used by `DashboardSidebarTools.vue` to render tools dynamically

## Example Entry

```ts
{
  name: 'View System Logs',
  icon: 'FileText',
  library: 'lucide',
  action: 'viewSystemLogs',
  roles: ['superadmin'],
}
```

## Usage

```ts
import { adminDashboardTools } from '@/features/admin/utils/adminDashboardTools'
```
