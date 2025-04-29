/**
 * Navbar System Component Documentation
 * 
 * Related Documentation:
 * /docs/frontend/navbar.md
 * 
 * Purpose:
 * - Sets up the complete, responsive navigation system for the Roll for Language platform
 * - Integrates locale switching and authentication-based rendering
 * - Establishes the foundation for consistent and scalable navigation UI
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# Navbar Component

## Overview
> The Navbar system provides the main navigation UI for the application. It includes responsive layouts for both desktop and mobile, dynamic user profile handling, and a language switcher. This component acts as a central access point for key areas of the app such as Dashboard, Campaigns, and Inventory.

## Location
> `/src/components/organisms/Navbar/Navbar.vue`

## Features
- [x] Responsive layout with Tailwind CSS (desktop & mobile)
- [x] Displays platform branding or user profile menu based on auth state
- [x] Toggles slide-in mobile menu with close overlay
- [x] Integrates LocaleSwitcher with flags and full language names
- [x] Uses `<RouterLink>` for client-side routing

## Props (if applicable)
_No props required for `Navbar.vue` itself._

## Emits (if applicable)
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| `close` (from `NavbarMobile.vue`) | `none` | Triggered when user closes the mobile menu |

## Dependencies
- [`vue-router`] — Enables `<RouterLink>` and route-based active highlighting
- [`tailwindcss`] — Utility-first styling for responsive layout
- **Internal Components**:
  - `NavbarDesktop.vue` — Desktop nav links
  - `NavbarMobile.vue` — Slide-in mobile menu
  - `ProfileDropdown.vue` — Authenticated profile dropdown
  - `LocaleSwitcher.vue` — Language switching menu (from `/components/atoms/`)

## Usage
```vue
<!-- Include inside MainLayout.vue or App.vue -->
<Navbar />
