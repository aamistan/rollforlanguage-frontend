# 🏰 **Roll for Language Frontend: Project Overview**  
> *“We build not for today, but for tomorrow and beyond.”*

---

## 🌟 **Project Purpose & Vision**  
The Roll for Language frontend is a modular, scalable Vue 3 application designed to deliver an immersive, gamified language-learning experience. Built for global deployment, it integrates responsive layouts, internationalization, real-time features, and continuous deployment pipelines — all guided by a forward-thinking clean architecture philosophy.

---

## 📁 **Folder & File Structure**  
Located under `/src`, the project uses a **domain-driven design**:  
- `components/` → Atomic design (atoms, molecules, organisms, layouts)  
- `features/` → Domain-specific modules (auth, dashboard, inventory, campaigns)  
- `i18n/` → Internationalization files  
- `router/` → Vue Router configs  
- `services/`, `stores/`, `utils/`, `plugins/`, `sockets/` → Supporting logic  
- Core files: `App.vue`, `main.js`, `tailwind.config.js`

Scaffold with:  
```bash
mkdir -p src/{assets,components/{atoms,molecules,organisms,layouts},features/{auth, dashboard, inventory, campaigns}/{components,stores,services,views},i18n,router,stores,services,utils,plugins,sockets,views}
```

---

## ⚙ **Key Components & Systems**  
- **Navbar**: Responsive, locale-switching, auth-aware navigation (`Navbar.vue`)  
- **Footer**: Modular, multilingual, responsive footer (`Footer.vue`)  
- **Landing Page**: Hero CTAs, feature highlights, onboarding previews, playable RPG teasers (`LandingPage.vue`)  
- **Layouts**: `ThreeColumnShell.vue` (responsive slot-based layout), `MainLayout.vue` (page wrapper)  
- **Global Styles**: `global.css` integrates custom font (`MedReg`), accessibility helpers, and Tailwind resets  

---

## 🛠 **Development & Build Setup**  
- **DevContainer**:  
  - Node 20 + pnpm  
  - Preinstalled VSCode extensions (Vue, Tailwind, ESLint, Prettier, i18n-ally, GitLens, Copilot, etc.)  
  - Chromium dependencies pre-installed  
  - Ports: 4001 → Vite Dev Server  

- **Vite Config (`vite.config.ts`)**:  
  - TypeScript setup  
  - Auto-Import + Vue Components plugins  
  - Vue i18n integration  
  - Optimized for continuous deployment  

- **Deployment**:  
  - GitHub → Vercel → Custom domain (via Cloudflare CNAME, HTTPS-enabled)  
  - Auto-deploys on push to `main`  

---

## 📦 **Dependencies Overview**  
- **Core**: `vue`, `vue-router`, `pinia`, `vue-i18n`, `axios`  
- **Dev Tools**: `vite`, `vitest`, `eslint`, `prettier`, `stylelint`, `@vitejs/plugin-vue`, `@intlify/unplugin-vue-i18n`  
- **Styling**: `tailwindcss`, `autoprefixer`, `tailwind-merge`, `class-variance-authority`  
- **Utilities**: `unplugin-auto-import`, `unplugin-vue-components`, `puppeteer` (for automated tasks/testing)  

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
