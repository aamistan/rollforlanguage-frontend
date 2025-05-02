/**
 * Forgot Password View Documentation
 * 
 * Related Documentation:
 * /docs/frontend/auth-system.md
 * 
 * Purpose:
 * - Provides the full-page layout and structure for the Forgot Password feature
 * - Wraps the ForgotPasswordForm component inside a responsive two-panel design
 * - Aligns visual styling and RPG-themed copy with the overall auth system
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# ForgotPasswordView Component

## Overview
> The `ForgotPasswordView` component defines the page layout for the Forgot Password flow. It presents a two-column responsive design: a left hero panel with RPG-themed messaging and a right-side card containing the reset form.

## Location
> Path to the component inside the repo.  
Example: `/src/features/auth/views/ForgotPasswordView.vue`

## Features
- [x] Two-column responsive layout with fantasy-themed background image
- [x] Integration of the `ForgotPasswordForm` component inside a styled card container
- [x] Consistent visual style with Login and Register views, including dark mode support

## Props (if applicable)
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| _none_    | —    | —       | This view uses fixed internal layout, no external props |

## Emits (if applicable)
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| _none_     | —       | All child events are handled internally by the form component |

## Dependencies
- **Internal components**:
  - `MainLayout` — Provides overall site layout shell
  - `ForgotPasswordForm` — Handles the password reset form logic and user interaction

## Usage
```vue
<!-- Example route setup -->
{
  path: '/forgot-password',
  name: 'ForgotPassword',
  component: ForgotPasswordView,
}
