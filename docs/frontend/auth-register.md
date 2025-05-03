Here’s the **generated documentation** covering everything we built and updated in this chat, formatted using your provided template.

---

````markdown
/**
 * Registration Page and Supporting Auth Components
 * 
 * Related Documentation:
 * /docs/frontend/auth-registration.md
 * 
 * Purpose:
 * - Sets up the ultimate registration page with expanded user data (gender identity, pronouns)
 * - Integrates cleanly with authStore and authService for consistent global state management
 * - Removes deprecated legacy files (useRegisterStore) to streamline the auth system
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# RegisterView Component

## Overview
> Full-page registration view that displays the registration form alongside fantasy-themed hero text and background art. This component serves as the main entry point for user account creation.

## Location
> `/src/features/auth/views/RegisterView.vue`

## Features
- [x] Two-column responsive layout with RPG hero call-to-action
- [x] Dynamic background image matching the login page style
- [x] Imports and displays the RegisterForm component

## Props (if applicable)
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| *None*    |      |         | This component receives no props |

## Emits (if applicable)
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| *None*     |         | Emits no events; delegates to child components |

## Dependencies
- RegisterForm.vue — Main form component handling input and submission
- Tailwind CSS — For layout, responsiveness, and styling

## Usage
```vue
<RegisterView />
````

---

# RegisterForm Component

## Overview

> Handles all user input for registration, including username, email, password, confirm password, optional gender identity, and optional pronouns. Submits data to the authStore, manages loading and error states, and redirects on success.

## Location

> `/src/features/auth/components/RegisterForm.vue`

## Features

* [x] Input fields with v-model binding and inline error clearing
* [x] Global error banner and loading spinner integration
* [x] Optional gender identity and pronouns fields

## Props (if applicable)

| Prop Name | Type | Default | Description                                     |
| :-------- | :--- | :------ | :---------------------------------------------- |
| *None*    |      |         | State is managed internally and via Pinia store |

## Emits (if applicable)

| Event Name | Payload | Description                                           |
| :--------- | :------ | :---------------------------------------------------- |
| *None*     |         | Emits no events; communicates directly with the store |

## Dependencies

* InputField.vue (atom) — Reusable input component with label and error support
* ErrorBanner.vue (molecule) — Displays global errors with dismiss option
* LoadingSpinner.vue (atom) — Shows animated spinner during form submission
* authStore.ts — Pinia store managing authentication state
* authService.ts — Axios service forwarding register payload to backend

## Usage

```vue
<RegisterForm />
```

---

# Related Service & Store Updates

## Updated authService.ts

## Location

> `/src/features/auth/services/authService.ts`

## Features

* [x] Extended register() method to accept genderIdentity and pronouns in payload
* [x] Forwarded payload to backend API cleanly

---

## Updated authStore.ts

## Location

> `/src/features/auth/stores/authStore.ts`

## Features

* [x] Updated register action payload type to support expanded fields
* [x] Ensures consistent state management for loading, errors, and success

---

# Removed Legacy File

## Deprecated

> `/src/features/auth/stores/useRegisterStore.ts`

## Reason

* [x] Legacy standalone store for registration, now fully replaced by authStore
* [x] Removed to reduce redundancy and avoid confusion

---
