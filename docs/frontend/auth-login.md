/**
 * Frontend Authentication System Setup
 * 
 * Related Documentation:
 * /docs/frontend/auth-system.md
 * 
 * Purpose:
 * - Sets up the full frontend authentication system architecture (Pinia store, services, Axios, guards, types)
 * - Integrates JWT decoding, error handling, loading states, multi-tab sync, and token refresh scaffolding
 * - Provides a modular, scalable foundation for Login, Register, Logout, role-based redirects, and protected route handling
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# Frontend Authentication System

## Overview
> This system provides the global frontend structure for handling user authentication, including:
> - Auth state management (user, token, error, loading) with Pinia
> - Typed Axios service integration for login, register, logout, forgot password, and token refresh
> - Vue Router guards for protecting authenticated routes and handling role-based access
> - JWT decoding on the frontend to extract user details and roles from tokens
> - TypeScript-strong architecture for modular, reusable, and future-proof development

## Location
> Core files:
> - `/src/features/auth/stores/authStore.ts` → Manages auth state, decodes JWT, syncs local storage
> - `/src/features/auth/services/authService.ts` → Wraps all auth-related API calls and post-login redirects
> - `/src/features/auth/services/axiosInstance.ts` → Sets up Axios with interceptors for token injection and 401 handling
> - `/src/router/guards/authGuard.ts` → Protects routes based on auth state
> - `/src/router/routes.ts` → Centralizes route names and paths

## Features
- [x] Global auth state tracking (user, token, isAuthenticated)
- [x] JWT decoding to extract user info and roles from token
- [x] Centralized error and loading state management
- [x] Axios instance with token injection and SPA-friendly 401 handling
- [x] Multi-tab logout synchronization using localStorage events
- [x] Role-based dashboard redirects after login/register (admin + superadmin unified)
- [x] Future-ready token refresh scaffolding
- [x] Centralized route name/path constants for type-safe navigation

## Props (if applicable)
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| *N/A*     | —    | —       | This system provides global state/services, not Vue props |

## Emits (if applicable)
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| *N/A*      | —       | Components can listen to store changes but no direct emits |

## Dependencies
- [pinia] — Manages global reactive auth state
- [axios] — Makes API calls with typed responses and interceptors
- [vue-router] — Handles routing, guards, and role-based redirects
- [jwt-decode] — Decodes JWT tokens on the frontend
- [TypeScript] — Provides type safety across stores, services, and components

## Usage
```ts
// In components or pages
import { useAuthStore } from '@/features/auth/stores/authStore'
import { authService } from '@/features/auth/services/authService'

const authStore = useAuthStore()

// Login example
await authStore.login({ email, password })

// Register example
await authStore.register({ username, email, password })

// Check auth state
if (authStore.isAuthenticated) {
  // show protected content
}

// Logout example
await authStore.logout()
