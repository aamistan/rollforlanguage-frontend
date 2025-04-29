/**
 * Vite Config Setup for Roll for Language Frontend
 * 
 * Related Documentation:
 * /docs/frontend/vite-vercel-setup.md
 * 
 * Purpose:
 * - Clean Vite 5 configuration with Auto-Import, Vue Components, and i18n integration.
 * - Connected GitHub repo to Vercel for continuous deployment.
 * - Custom domain connected via Cloudflare CNAME.
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */
---

# ⚙️ Vite Config & Vercel Connection Setup (Mini Doc)

## Overview
> Sets up the frontend project for clean Vite build configuration, connects the GitHub repository to Vercel for continuous deployment, and links the custom domain via Cloudflare.

## Location
> `/vite.config.ts`  
> Vercel Project Dashboard → Roll for Language (Frontend)

## Key Features
- Clean `vite.config.ts` using TypeScript with Auto-Import and Components plugins.
- Connected GitHub repo to Vercel with successful production deployment.
- Custom domain linked via Cloudflare CNAME setup and HTTPS enabled.

## Props
None

## Emits
None

## Usage Example
```bash
# Build locally
pnpm run build

# Push to GitHub
git push origin main

# Vercel auto-deploys on push to main branch
# Live at: https://yourcustomdomain.com
```

---

✅ This follows your mini-template structure exactly:  
Short, repo-focused, clean, limited bullet points.

---

# 📦 Final File Name Suggestion
You could save this documentation as:

```plaintext
/docs/frontend/vite-vercel-setup.md
```
