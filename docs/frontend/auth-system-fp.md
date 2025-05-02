/**
 * Forgot Password Feature Documentation
 * 
 * Related Documentation:
 * /docs/frontend/auth-system.md
 * 
 * Purpose:
 * - Sets up the Forgot Password flow including frontend form and view
 * - Integrates with authStore and authService for backend password reset handling
 * - Adds automatic redirect to login after successful reset request
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# ForgotPasswordForm Component

## Overview
> The `ForgotPasswordForm` component provides a secure and user-friendly interface for users to request a password reset by submitting their email. It integrates with the global auth store, handles loading and error states, and redirects to the login page after success.

## Location
> Path to the component inside the repo.  
Example: `/src/features/auth/components/ForgotPasswordForm.vue`

## Features
- [x] Email input with validation and accessibility support
- [x] Integration with Pinia authStore and authService for backend API call
- [x] Animated success toast with auto-redirect to login after submission

## Props (if applicable)
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| _none_    | —    | —       | This component uses internal state and global store, no external props |

## Emits (if applicable)
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| _none_     | —       | All behavior is internal or handled via global routing |

## Dependencies
- **Pinia (authStore)** — To manage auth loading and error state
- **authService** — To call the backend password reset endpoint
- **Internal components**:
  - `InputField` — Atom for styled input fields
  - `LoadingSpinner` — Atom for showing loading state
  - `ErrorBanner` — Molecule for displaying error messages
  - `Toast` — Molecule for success feedback

## Usage
```vue
<!-- Example usage inside ForgotPasswordView.vue -->
<ForgotPasswordForm />
