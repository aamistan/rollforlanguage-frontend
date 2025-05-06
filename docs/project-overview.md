✅ Here’s your **clean, fully updated Project Overview document**
with all recent authentication system and frontend improvements integrated.

---

````md
# 🏰 **Roll for Language Frontend: Project Overview**

> *“We build not for today, but for tomorrow and beyond.”*

---

## 🌟 **Project Purpose & Vision**

The Roll for Language frontend is a modular, scalable Vue 3 application designed to deliver an immersive, gamified language-learning experience.  
Built for global deployment, it integrates responsive layouts, internationalization, real-time features, and continuous deployment pipelines — all guided by a forward-thinking clean architecture philosophy.

---

## 🏹 **Guiding Mantra**

> Every component, script, and deployment decision is made to support long-term growth, modularity, and maintainability.  
> We don’t just code for today’s needs; we architect for tomorrow’s expansions — scalable, international, and game-ready.

1. We build clean code.  
2. We build optimized code.  
3. We build using best practices.  
4. We build modernly.  
5. We write our wish list of tools/components/features…then make it so!

We ask the questions:  
What are the must-haves? What are the should-haves? What are the would-be-nice-to-haves?  
After we answer those questions, we include all of them!  
We build not for today, but for tomorrow and beyond.

---

## 💻 **Tech Stack**

| Layer                | Technology                                        |
|----------------------|--------------------------------------------------|
| Frontend Framework   | Vue 3 + Vite + Tailwind CSS                       |
| Frontend Hosting     | Vercel                                            |
| Backend Language     | Node.js                                           |
| Backend Hosting      | Railway                                           |
| API Structure        | Fastify                                           |
| Real-Time Layer      | Socket.IO                                         |
| Database            | PlanetScale                                        |
| Authentication       | JWT                                               |
| Static Asset Hosting | Vercel + GitHub                                   |
| i18n Support         | Vue I18n + JSON + Strapi (future)                 |
| Audio Features       | Web MediaRecorder + Backblaze B2                  |
| Monitoring           | Sentry + Vercel logs                              |
| Analytics           | PostHog                                            |

---

## 📁 **Folder & File Structure**

Located under `/src`, the project uses a **domain-driven design**:

- `components/` → Atomic design (atoms, molecules, organisms, layouts)
- `features/` → Domain-specific modules (auth, dashboard, inventory, campaigns)
- `i18n/` → Internationalization files
- `router/` → Vue Router configs
- `services/`, `stores/`, `utils/`, `plugins/`, `sockets/` → Supporting logic
- Core files: `App.vue`, `main.ts`, `tailwind.config.ts`

Scaffold with:

```bash
mkdir -p src/{assets,components/{atoms,molecules,organisms,layouts},features/{auth,dashboard,inventory,campaigns}/{components,stores,services,views,types},i18n,router,stores,services,utils,plugins,sockets,views}
````

---

## ⚙ **Key Components & Systems**

* **Navbar**: Responsive, locale-switching, auth-aware navigation (`Navbar.vue`)
* **Footer**: Modular, multilingual, responsive footer (`Footer.vue`)
* **Landing Page**: Hero CTAs, feature highlights, onboarding previews, playable RPG teasers (`LandingPage.vue`)
* **Layouts**: `ThreeColumnShell.vue` (responsive slot-based layout), `MainLayout.vue` (page wrapper)

---

### 🛡 **Authentication System**

* **`authStore.ts`**: Manages global auth state (user, token, error, loading) using Pinia; decodes JWT to extract roles and user info
* **`authService.ts`**: Provides strongly typed login, register, logout, forgot password, and token refresh API calls; handles role-based redirects (admin + superadmin unified)
* **`axiosInstance.ts`**: Centralized Axios instance with token injection, `Accept` headers, and SPA-friendly 401 handling
* **`authGuard.ts`**: Vue Router guard protecting authenticated routes
* **`routes.ts`**: Centralized route names and paths using enums for type-safe navigation
* **`setupAuthListeners.ts`**: Syncs multi-tab logout using localStorage event listeners

---

### 🏰 **Authentication Views**

* **Login Page (`LoginView.vue` + `LoginForm.vue`)**:

  * Responsive, animated two-column layout with fantasy background and hero text
  * Reusable `LoginForm` organism with integrated `InputField`, `LoadingSpinner`, `ErrorBanner`, and `Toast`
  * Role-based redirects: admin + superadmin → `/admin-dashboard`, teacher → `/teacher-dashboard`, student → `/dashboard`
  * Polished button interactions, success notifications, and dark mode support

* **Forgot Password Page (`ForgotPasswordView.vue` + `ForgotPasswordForm.vue`)**:

  * Two-column layout with RPG-themed reset instructions and visuals
  * Integrated form using global auth store actions and service calls
  * Animated success toast with **3-second auto-redirect to Login**
  * Error handling and loading states wired through Pinia

* **Registration Page (`RegisterView.vue` + `RegisterForm.vue`)**:

  * Two-column fantasy-themed layout with hero text and background
  * Form integrates username, email, password, confirm password, **optional gender identity**, and **optional pronouns**
  * Uses reusable `InputField`, `LoadingSpinner`, and `ErrorBanner` components
  * Fully wired into `authStore` and `authService`, forwarding expanded user data to backend
  * On success, redirects to dashboard; handles loading states and error messages cleanly

---

### ✨ **Global Styles**

* `global.css` integrates custom font (`MedReg`), accessibility helpers, and Tailwind resets

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

| Category  | Packages                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------- |
| Core      | `vue`, `vue-router`, `pinia`, `vue-i18n`, `axios`                                                       |
| Dev Tools | `vite`, `vitest`, `eslint`, `prettier`, `stylelint`, `@vitejs/plugin-vue`, `@intlify/unplugin-vue-i18n` |
| Styling   | `tailwindcss`, `autoprefixer`, `tailwind-merge`, `class-variance-authority`                             |
| Utilities | `unplugin-auto-import`, `unplugin-vue-components`, `puppeteer` (for automated tasks/testing)            |

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
