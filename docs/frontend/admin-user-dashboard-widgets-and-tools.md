✨ **Fantastic—love this documentation template!** Thanks for sharing it. I’ve filled it out for everything we accomplished so far in this chat, covering:

1. `UserManagementView.vue`
2. `UserTableWidget.vue`
3. `UserMetricsWidget.vue`
4. `FlaggedUsersWidget.vue`

---

## 📝 **Documentation → `/docs/frontend/userManagementView.md`**

````markdown
/**
 * User Management Dashboard View
 * 
 * Related Documentation:
 * /docs/frontend/userManagementView.md
 * 
 * Purpose:
 * - Sets up the main user management dashboard view inside the admin system
 * - Mirrors AdminDashboardView.vue structure for architectural consistency
 * - Hosts user management-specific widgets inside DashboardWidgetGrid
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# UserManagementView.vue Component

## Overview
> The landing view shown when an admin clicks "Users" in the admin topbar. Mirrors the structure of AdminDashboardView.vue but swaps in widgets related to user management. Provides a modular grid container for user-focused widgets.

## Location
> `/src/features/admin/views/UserManagementView.vue`

## Features
- [x] Renders DashboardWidgetGrid to manage widget layout
- [x] Loads user management widgets: UserTableWidget, UserMetricsWidget, FlaggedUsersWidget
- [x] Future support for superadmin-only widgets via `v-if`

## Props
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| _none_ | - | - | - |

## Emits
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| _none_ | - | - |

## Dependencies
- `DashboardWidgetGrid` — shared grid container from admin dashboard
- `UserTableWidget` — user listing widget
- `UserMetricsWidget` — summary metrics widget
- `FlaggedUsersWidget` — flagged user list widget

## Usage
```vue
<UserManagementView />
````

````

---

## 📝 **Documentation → `/docs/frontend/userTableWidget.md`**

```markdown
/**
 * User Table Widget
 * 
 * Related Documentation:
 * /docs/frontend/userTableWidget.md
 * 
 * Purpose:
 * - Displays a table of users inside the user management dashboard
 * - Includes hoverable 🛠 tool button to open widget modal
 * - Placeholder scaffold following admin widget interaction pattern
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# UserTableWidget.vue Component

## Overview
> A placeholder widget component that will eventually display a paginated/searchable user table. Currently provides a modal interaction with future extensibility.

## Location
> `/src/features/admin/components/userDashboard/UserTableWidget.vue`

## Features
- [x] Card-style widget with title + placeholder text
- [x] Hover 🛠 tool button with opacity transition
- [x] Modal opens on button click with placeholder content

## Props
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| _none_ | - | - | - |

## Emits
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| _none_ | - | - |

## Dependencies
- `AdminModal` — shared modal component for displaying widget details

## Usage
```vue
<UserTableWidget />
````

````

---

## 📝 **Documentation → `/docs/frontend/userMetricsWidget.md`**

```markdown
/**
 * User Metrics Widget
 * 
 * Related Documentation:
 * /docs/frontend/userMetricsWidget.md
 * 
 * Purpose:
 * - Displays high-level user metrics (total users, active users) inside user dashboard
 * - Includes hoverable 🛠 tool button to open modal for details
 * - Placeholder scaffold following admin widget interaction pattern
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# UserMetricsWidget.vue Component

## Overview
> A placeholder widget component intended to show user summary metrics inside the admin user management dashboard. Currently includes a modal interaction with placeholder content.

## Location
> `/src/features/admin/components/userDashboard/UserMetricsWidget.vue`

## Features
- [x] Card-style widget with title + placeholder text
- [x] Hover 🛠 tool button with opacity transition
- [x] Modal opens on button click with placeholder content

## Props
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| _none_ | - | - | - |

## Emits
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| _none_ | - | - |

## Dependencies
- `AdminModal` — shared modal component for displaying widget details

## Usage
```vue
<UserMetricsWidget />
````

````

---

## 📝 **Documentation → `/docs/frontend/flaggedUsersWidget.md`**

```markdown
/**
 * Flagged Users Widget
 * 
 * Related Documentation:
 * /docs/frontend/flaggedUsersWidget.md
 * 
 * Purpose:
 * - Displays a list of flagged users requiring review
 * - Includes hoverable 🛠 tool button to open modal with details
 * - Placeholder scaffold following admin widget interaction pattern
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# FlaggedUsersWidget.vue Component

## Overview
> A placeholder widget component intended to show users flagged for review/moderation inside the admin user management dashboard. Includes modal interaction for future details.

## Location
> `/src/features/admin/components/userDashboard/FlaggedUsersWidget.vue`

## Features
- [x] Card-style widget with title + placeholder text
- [x] Hover 🛠 tool button with opacity transition
- [x] Modal opens on button click with placeholder content

## Props
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| _none_ | - | - | - |

## Emits
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| _none_ | - | - |

## Dependencies
- `AdminModal` — shared modal component for displaying widget details

## Usage
```vue
<FlaggedUsersWidget />
````

```

/**
 * Admin User Service (API Integration)
 * 
 * Related Documentation:
 * /docs/frontend/userService.md
 * 
 * Purpose:
 * - Provides frontend API methods to manage users via /admin/users endpoints
 * - Supports paginated search, filtered queries, and user creation
 * - Includes input sanitization and type-safe payloads
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# userService.ts Module

## Overview
> This module contains all user-related backend API functions for the admin dashboard.  
> It ensures consistent communication with the backend `/admin/users` endpoints, with built-in query cleanup and type safety.

## Location
> `/src/features/admin/services/userService.ts`

## Features
- [x] `getUsers()` → fetch paginated, filtered user data
- [x] `createUser()` → securely post a new user to the backend
- [x] Query parameter sanitization (strips empty/undefined/null)
- [x] Strong typing for inputs/outputs
- [x] Compatible with future expansions (edit, delete, suspend)

## Exports
| Name | Type | Description |
|:-----|:-----|:------------|
| `getUsers()` | `(params?: UserQueryParams) => Promise<PaginatedUserResponse>` | Get paginated list of users |
| `createUser()` | `(payload: CreateUserPayload) => Promise<{ message: string }>` | Create a new user |
| `userService` | Object | Unified service export for tree-shaking and consistency |
| `User` | Interface | Shape of user data returned from backend |
| `CreateUserPayload` | Type | Required fields for user creation |
| `UserQueryParams` | Interface | Accepted query parameters |
| `PaginatedUserResponse` | Interface | Standard paginated API response format |

## Example Usage
```ts
import { userService } from '@/features/admin/services/userService'

const { data, pagination } = await userService.getUsers({
  search: 'knight',
  roles: ['student'],
  page: 1,
  limit: 25,
})

await userService.createUser({
  email: 'test@example.com',
  username: 'newstudent',
  password: 'StrongPass!123',
  role: 'student',
})
```

## Dependencies
- `axiosInstance` from `/src/services/axiosInstance.ts`
- `Pinia` store → `userDashboardStore.ts` for reactive actions

## Notes
- Uses auto-cleaning of query params to avoid 400 errors
- Works with any role authorized to call the API (`manage_users` permission)



✅ **All four documented with full consistency, matching the template!**

