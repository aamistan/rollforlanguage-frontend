/**
 * Frontend Authentication System Setup
 * 
 * Related Documentation:
 * /docs/frontend/auth-system.md
 * 
 * Purpose:
 * - Sets up the full frontend authentication system architecture (Pinia store, services, Axios, guards, types)
 * - Integrates error handling, loading states, multi-tab sync, and future-ready token refresh scaffolding
 * - Provides a modular, scalable foundation for Login, Register, Logout, and protected route handling
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# Frontend Authentication System

## Overview
> This system provides the global frontend structure for handling user authentication, including:
> - Auth state management (user, token, error, loading) with Pinia
> - Typed Axios service integration for login, register, logout, and future token refresh
> - Vue Router guards for protecting authenticated routes
> - TypeScript-strong architecture for modular, reusable, and future-proof development

## Location
> Core files:
> - `/src/features/auth/stores/authStore.ts` → Manages auth state
> - `/src/features/auth/services/authService.ts` → Wraps all auth-related API calls
> - `/src/features/auth/services/axiosInstance.ts` → Sets up Axios with interceptors
> - `/src/router/guards/authGuard.ts` → Protects routes based on auth state
> - `/src/router/routes.ts` → Centralizes route names and paths

## Features
- [x] Global auth state tracking (user, token, isAuthenticated)
- [x] Centralized error and loading state management
- [x] Axios instance with token injection and 401 handling
- [x] Multi-tab logout synchronization using localStorage events
- [x] Future-ready token refresh scaffolding
- [x] Centralized route name/path constants for type-safe navigation

## Props (if applicable)
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| *N/A* | — | — | This system provides global state/services, not Vue props |

## Emits (if applicable)
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| *N/A* | — | Components can listen to store changes but no direct emits |

## Dependencies
- [pinia] — Manages global reactive auth state
- [axios] — Makes API calls with typed responses
- [vue-router] — Protects authenticated routes with guards
- [TypeScript] — Provides type safety across stores, services, and components

## Usage
```ts
// In components or pages
import { useAuthStore } from '@/features/auth/stores/authStore'
import { authService } from '@/features/auth/services/authService'

const authStore = useAuthStore()

// Login example
await authService.login(authStore, email, password)

// Register example
await authService.register(authStore, username, email, password)

// Check auth state
if (authStore.isAuthenticated) {
  // show protected content
}
