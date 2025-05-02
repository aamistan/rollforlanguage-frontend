/**
 * AuthView and LoginForm Components
 * 
 * Related Documentation:
 * /docs/frontend/authentication-flow.md
 * 
 * Purpose:
 * - Sets up the main login page layout and form for user authentication
 * - Integrates reusable components: InputField, LoadingSpinner, ErrorBanner, Toast
 * - Prepares routing and scaffolding for future Forgot Password and Register flows
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# AuthView and LoginForm Components

## Overview
> These components together deliver the login experience:  
> **AuthView.vue** provides the page layout, background, and structure,  
> while **LoginForm.vue** handles the form logic, error handling, loading state, and success feedback.

## Location
> AuthView: `/src/features/auth/views/AuthView.vue`  
> LoginForm: `/src/components/organisms/login-form/LoginForm.vue`

## Features
- [x] Responsive, animated two-column login page layout with background
- [x] Reusable login form component with inputs, loading, errors, and success toast
- [x] Integrated routing for future Forgot Password and Register pages

## Props (if applicable)
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| (none for AuthView) | — | — | — |
| LoginForm props come from internal usage of child components | — | — | — |

## Emits (if applicable)
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| dismiss (ErrorBanner) | — | Emitted when the error banner is dismissed |
| dismiss (Toast) | — | Emitted when the toast is dismissed |

## Dependencies
- [Pinia (authStore)] — Manages global authentication state
- [Axios (authService)] — Handles API communication for login
- [InputField.vue] — Atom component for form inputs
- [LoadingSpinner.vue] — Atom component for button loading feedback
- [ErrorBanner.vue] — Molecule component for displaying error messages
- [Toast.vue] — Molecule component for success notifications

## Usage
```vue
<!-- Import and use in router -->
import AuthView from '@/features/auth/views/AuthView.vue'

<RouterView />
