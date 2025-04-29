Here’s the **fully polished**, **no-duplicate**, and **logically organized** version of your README.md content.  
I preserved every important detail you shared, but **removed redundancies** and **streamlined** the sections into a clear progression:

---

# 📚 Roll for Language — Frontend Environment Setup

## ⚡ Overview

This setup establishes a **clean**, **optimized**, and **Codespaces-optimized** frontend development environment for the **Fantasy RPG Language Platform**.  
It follows our Development Mantra:

- ✨ Clean Code
- ✨ Optimized Code
- ✨ Best Practices First
- ✨ Modern and Scalable Architecture
- ✨ Vision-Driven Development

All tools have been fully audited, installed, and configured for seamless development.

---

## 📦 Tech Stack Overview

| Layer                  | Technology                           |
|:------------------------|:-------------------------------------|
| Frontend Framework      | Vue 3 + Vite + Tailwind CSS          |
| Frontend Hosting        | Vercel                               |
| Backend Language        | Node.js                              |
| Backend Hosting         | Railway                              |
| API Structure           | Fastify                              |
| Real-Time Layer         | Socket.IO                            |
| Database                | PlanetScale                          |
| Authentication          | JWT (JSON Web Tokens)                |
| Static Asset Hosting    | Vercel + GitHub                      |
| Internationalization    | Vue I18n + JSON (future: Strapi)      |
| Audio Features          | Web MediaRecorder + Backblaze B2     |
| Monitoring              | Sentry + Vercel Logs                 |
| Analytics               | PostHog                              |

---

## 🛠️ Codespaces DevContainer Setup

**Environment Details**:
- Base Image: `mcr.microsoft.com/devcontainers/universal:2`
- Node.js 20 installed via DevContainer Feature
- pnpm installed globally for fast dependency management
- Ports auto-forwarded:
  - 5173 — Vite Dev Server

**Post-Creation Command**:
- `npm install`

**Location**:
- `.devcontainer/devcontainer.json`

---

## 📦 Installed Extensions

| Extension | Purpose |
|:---|:---|
| Vue Language Features (Volar) | Vue 3 syntax and type checking |
| Tailwind CSS IntelliSense | Class autocomplete and linting |
| Vite Extension Pack | Helpers for Vite development |
| Vue VSCode Snippets | Quick Vue template scaffolding |
| i18n Ally | Localization management |
| ESLint | Code linting |
| Prettier | Code formatting |
| Stylelint | CSS and Tailwind linting |
| Path IntelliSense | Autocomplete for file paths |
| Import Cost | Visualize bundle size impact |
| GitLens | Git history and blame insights |
| GitHub Copilot | AI-assisted coding (licensed) |
| Error Lens | Inline error highlighting |
| REST Client | Lightweight HTTP request testing |
| Code Spell Checker | Typo prevention |
| Material Icon Theme | Visual polish for file explorer |

**Audit Notes**:
- Replaced **Thunder Client** with **REST Client** (due to paywall).
- Skipped **Dracula Theme** (native dark themes already active).
- All extensions are Codespaces-compatible and actively maintained.

---

## 📜 Dependency Management

- Created a clean `package.json` including:
  - Core: `vue`, `vue-router`, `pinia`, `vue-i18n`, `axios`
  - Build: `vite`, `@vitejs/plugin-vue`, `@vitejs/plugin-vue-jsx`
  - Styling: `tailwindcss`, `postcss`, `autoprefixer`, `tailwind-merge`
  - Developer Experience: `unplugin-auto-import`, `unplugin-vue-components`
  - Linting: `eslint`, `eslint-plugin-vue`, `eslint-config-prettier`, `stylelint`
  - Testing: `vitest`, `@vue/test-utils`

**Cleanup Actions**:
- Removed deprecated `@vitejs/plugin-vue-inspector`.
- Updated `unplugin-vue-components` to the latest stable release.

---

## 🎨 Tailwind CSS Setup

- Initialized Tailwind and PostCSS config:
  ```bash
  npx tailwindcss init -p
  ```
- Configured `tailwind.config.js` with:
  - ESM syntax (`export default`)
  - `content` array targeting:
    - `./index.html`
    - `./src/**/*.{vue,js,ts,jsx,tsx}`

---

## 🛡️ ESLint + Prettier Integration

- Set up ESLint with Flat Config (`eslint.config.mjs`).
- Configured ESLint for:
  - Vue Essentials (`eslint-plugin-vue`)
  - Browser environment globals
  - Integration with Prettier via `eslint-config-prettier`
- Created `.prettierrc` with formatting rules:
  ```json
  {
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "printWidth": 100,
    "trailingComma": "es5"
  }
  ```

---

## 🧹 Git Repository Hygiene

- Added `.gitignore` excluding:
  - `node_modules/`
  - `dist/`
  - `.vscode/`
  - `.env`
- Removed cached tracking of `node_modules/`.

---

## 📁 Frontend Project Structure

```plaintext
/src
├── assets/               # Static assets (images, fonts, sounds, icons)
├── components/           # Shared UI components (atoms, molecules, organisms, layouts)
├── features/             # Domain-driven feature areas
│   ├── auth/             # Authentication features
│   ├── dashboard/        # Student/Teacher dashboards
│   ├── inventory/        # Inventory and item management
│   └── campaigns/        # Quests, sessions, campaigns
├── i18n/                 # Localization setup
├── router/               # Vue Router setup
├── stores/               # Global Pinia stores
├── services/             # Global API clients
├── utils/                # Helper utilities
├── plugins/              # 3rd-party integrations (e.g., Sentry, PostHog)
├── sockets/              # Real-time communication (Socket.IO)
├── views/                # Global views (Landing Page, 404)
├── App.vue               # Main application component
├── main.js               # Vite entry file
└── tailwind.config.js    # Tailwind configuration
```

**Setup Script**:
```bash
mkdir -p src/{assets,components/{atoms,molecules,organisms,layouts},features/{auth/{components,stores,services,views},dashboard/{components,stores,services,views},inventory/{components,stores,services,views},campaigns/{components,stores,services,views}},i18n,router,stores,services,utils,plugins,sockets,views}

touch src/{App.vue,main.js,tailwind.config.js}
find src -type d -exec touch {}/.gitkeep \;
```

---

## 📜 Initial Commit Messages

```plaintext
feat: initialize frontend devcontainer and package.json
fix: remove deprecated @vitejs/plugin-vue-inspector from package.json
fix: update unplugin-vue-components version
chore: add node_modules to .gitignore and clean Git tracking
feat: initialize Tailwind CSS with ESM configuration
chore: integrate Prettier with ESLint
chore: add Prettier configuration
chore: scaffold domain-driven frontend folder structure
```

---

## ✅ Current Status

- Fully Codespaces-optimized
- Clean, modern, scalable architecture
- Proper linting, formatting, and structure
- Ready for `/src` feature development

---

# 🎯 Conclusion

This structure delivers a **future-proof**, **scalable**, and **developer-first** frontend foundation.  
We are building **not just for today, but for tomorrow and beyond**. 🚀

---
## 🎨 Global Styles Setup — `global.css`

This update introduces a complete, scalable, best-practices-driven `global.css` to complement the Tailwind-based design system.

### ✅ What We Accomplished

- **Created** `global.css` at `/src/assets/styles/global.css`
- **Integrated** custom font `MedReg.woff2` in `/src/assets/fonts/`
- **Updated** `main.js` to globally import the stylesheet

### 🧱 File Architecture Breakdown

The global stylesheet is structured in 7 clean, well-commented sections:

1. **@font-face declarations**
   - Registers and loads `MedReg` using `font-display: swap` for performance.
2. **CSS Reset / Normalize Layer**
   - Applies a modern, Tailwind-compatible reset with normalized margins, box model, form font inheritance, and media elements.
3. **Base Typography Defaults**
   - Styles `body`, headings, links, paragraphs, and emphasis elements with scalable, readable defaults.
4. **Structural HTML Element Defaults**
   - Sets default display for semantic blocks and resets form element styles.
5. **Accessibility Helpers**
   - Adds motion reduction support, `:focus-visible` outlines, and screen reader `.sr-only` class.
6. **Utility Enhancements**
   - Improves rendering, scroll behavior, and mobile interaction defaults.
7. **Global Utility Classes**
   - Includes `.hidden-scrollbar`, `.no-scroll`, `.truncate-1`, and `.center-absolute` for layout control and cross-component utility.

### 🧩 Tailwind Compatibility

- All styles respect and extend Tailwind Preflight rather than overwrite it.
- Classes like `.sr-only` and `.truncate-1` match utility conventions already familiar to Tailwind users.

---

## 🏰 Landing Page Setup — Full Implementation Summary

This section outlines the complete setup of the initial **LandingPage.vue**, its layout structure, and routing integration. Built with Vue 3, Vite, and Tailwind CSS, the structure follows the Roll for Language development mantra: clean, optimized, scalable, and future-proof.

### ✅ What We Completed:

1. **`index.html` Setup** (in project root)
   - Added SEO meta tags, responsive viewport settings, and custom `<title>`
   - Applied Tailwind defaults to `<body>` (dark background, white text)
   - Vite-compatible, minimal and scalable

2. **Vue Router Initialization**
   - Created `src/router/index.js`
   - Configured route: `'/' → LandingPage.vue'`
   - Used `createWebHistory()` for clean URLs

3. **MainLayout Component Architecture**
   - Created `src/components/layouts/MainLayout.vue`
   - Used `<NavbarPlaceholder />` and `<FooterPlaceholder />` to structure layout
   - Integrated dynamic background image (`backgroundImage` inline style)

4. **Landing Page Component**
   - Created `src/views/LandingPage.vue`
   - Wrapped in `MainLayout.vue`
   - Includes:
     - Hero headline (`$t('landing.heroTitle')`)
     - Subheadline (`$t('landing.heroSubtitle')`)
     - Call to Action button linking to `/register`
   - Fully responsive and mobile-first using Tailwind utility classes
   - i18n-ready text placeholders

5. **Placeholder Components**
   - Created `NavbarPlaceholder.vue` and `FooterPlaceholder.vue` in `src/components/organisms`
   - Styled to represent future components in the layout

6. **App Mounting**
   - Cleaned `src/App.vue` to use `<RouterView />` only
   - Configured `src/main.js` to initialize:
     - Vue app
     - Router integration
     - Tailwind base styles via `src/assets/main.css`

7. **Tailwind CSS Setup**
   - Confirmed Tailwind base CSS applied via `main.css`

---

This completes the structural foundation of the platform’s Landing Page, ensuring long-term scalability, layout consistency, and readiness for real-world user onboarding.
