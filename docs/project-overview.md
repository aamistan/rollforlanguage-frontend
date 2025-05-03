# 🏰 **Roll for Language Frontend: Project Overview**

> *“We build not for today, but for tomorrow and beyond.”*

---

## 🌟 **Project Purpose & Vision**

The Roll for Language frontend is a modular, scalable Vue 3 application designed to deliver an immersive, gamified language-learning experience. Built for global deployment, it integrates responsive layouts, internationalization, real-time features, and continuous deployment pipelines — all guided by a forward-thinking clean architecture philosophy.

---

## 📁 **Folder & File Structure**

Located under `/src`, the project uses a **domain-driven design**:

* `components/` → Atomic design (atoms, molecules, organisms, layouts)
* `features/` → Domain-specific modules (auth, dashboard, inventory, campaigns)
* `i18n/` → Internationalization files
* `router/` → Vue Router configs
* `services/`, `stores/`, `utils/`, `plugins/`, `sockets/` → Supporting logic
* Core files: `App.vue`, `main.ts`, `tailwind.config.ts`

Scaffold with:

```bash
mkdir -p src/{assets,components/{atoms,molecules,organisms,layouts},features/{auth,dashboard,inventory,campaigns}/{components,stores,services,views,types},i18n,router,stores,services,utils,plugins,sockets,views}
```

---

## ⚙ **Key Components & Systems**

* **Navbar**: Responsive, locale-switching, auth-aware navigation (`Navbar.vue`)

* **Footer**: Modular, multilingual, responsive footer (`Footer.vue`)

* **Landing Page**: Hero CTAs, feature highlights, onboarding previews, playable RPG teasers (`LandingPage.vue`)

* **Layouts**: `ThreeColumnShell.vue` (responsive slot-based layout), `MainLayout.vue` (page wrapper)

* **Auth System**:

  * `authStore.ts`: Manages global auth state (user, token, error, loading) using Pinia

  * `authService.ts`: Provides strongly typed login, register, logout, token refresh, and **forgot password** API calls using Axios

  * `axiosInstance.ts`: Centralized Axios instance with token injection and 401 handling

  * `authGuard.ts`: Vue Router guard protecting authenticated routes

  * `routes.ts`: Centralized route names and paths using enums for type-safe navigation

  * `setupAuthListeners.ts`: Syncs multi-tab logout using localStorage event listeners

  * **Login Page (`AuthView.vue` + `LoginForm.vue`)**:

    * Responsive, animated two-column layout with fantasy background and hero text
    * Reusable `LoginForm` organism integrating `InputField`, `LoadingSpinner`, `ErrorBanner`, and `Toast`
    * Navigation links wired for future `Forgot Password` and `Register` flows
    * Polished button interactions, success notifications, and dark mode support

  * **Forgot Password Page (`ForgotPasswordView.vue` + `ForgotPasswordForm.vue`)**:

    * Full-page two-column layout with RPG-themed reset instructions and visuals
    * Integrated `ForgotPasswordForm` using global auth store actions and service calls
    * Displays animated success toast with **3-second auto-redirect to Login**
    * Error handling and loading states wired through Pinia, styled to match auth system

  * **Registration Page (`RegisterView.vue` + `RegisterForm.vue`)**:

    * Two-column layout with fantasy-themed hero text and RPG background image
    * `RegisterForm` integrates username, email, password, confirm password, **optional gender identity**, and **optional pronouns** fields
    * Uses reusable `InputField`, `LoadingSpinner`, and `ErrorBanner` components
    * Fully wired into `authStore` and `authService`, forwarding expanded user data to backend
    * On success, redirects to dashboard; handles loading states and error messages cleanly
    * Deprecated and safely removed old `useRegisterStore` and `registerService` files to reduce redundancy

* **Global Styles**: `global.css` integrates custom font (`MedReg`), accessibility helpers, and Tailwind resets

---

## 🛠 **Development & Build Setup**

* **DevContainer**:

  * Node 20 + pnpm
  * Preinstalled VSCode extensions (Vue, Tailwind, ESLint, Prettier, i18n-ally, GitLens, Copilot, etc.)
  * Chromium dependencies pre-installed
  * Ports: 4001 → Vite Dev Server

* **Vite Config (`vite.config.ts`)**:

  * TypeScript setup
  * Auto-Import + Vue Components plugins
  * Vue i18n integration (Temporarily on hold)
  * `.env` integration with type-safe `import.meta.env` typings
  * Optimized for continuous deployment

* **Deployment**:

  * GitHub → Vercel → Custom domain (via Cloudflare CNAME, HTTPS-enabled)
  * Auto-deploys on push to `main`

---

## 📦 **Dependencies Overview**

* **Core**: `vue`, `vue-router`, `pinia`, `vue-i18n`, `axios`
* **Dev Tools**: `vite`, `vitest`, `eslint`, `prettier`, `stylelint`, `@vitejs/plugin-vue`, `@intlify/unplugin-vue-i18n`
* **Styling**: `tailwindcss`, `autoprefixer`, `tailwind-merge`, `class-variance-authority`
* **Utilities**: `unplugin-auto-import`, `unplugin-vue-components`, `puppeteer` (for automated tasks/testing)

Scripts:

```bash
pnpm dev        # Vite Dev Server
pnpm build      # Build for production
pnpm preview    # Preview built app
pnpm lint       # Lint codebase
pnpm format     # Prettier format
pnpm test       # Run Vitest tests
```

---

## 🏹 **Guiding Mantra**

> Every component, script, and deployment decision is made to support long-term growth, modularity, and maintainability. We don’t just code for today’s needs; we architect for tomorrow’s expansions — scalable, international, and game-ready.

---
