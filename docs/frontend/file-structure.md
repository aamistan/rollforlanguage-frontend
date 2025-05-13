/**
 * Frontend Folder Structure Setup
 * 
 * Related Documentation:
 * /docs/frontend/folder-structure.md
 * 
 * Purpose:
 * - Establishes a scalable, domain-driven folder structure for the Vue 3 frontend
 * - Prepares organization for shared components, features, real-time logic, i18n, and more
 * - Lays groundwork for clean architecture in Codespaces-based development
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# Frontend Folder Structure Setup (Mini Doc)

## Overview
> This structure defines how all frontend files are organized using a domain-driven approach. It enables clean separation of concerns, modular feature development, and smooth scalability for future systems like real-time events, localization, and backend API integration.

## Location  
> Rooted at: `/src`

## Key Features
- Organizes features by domain: each with its own components, stores, services, and views
- Supports shared UI components using atomic design principles (atoms, molecules, organisms, layouts)
- Includes dedicated directories for i18n, plugins, sockets, router, and utilities

## Props  
**None**

## Emits  
**None**

## Usage Example  
Not a component — this is a project-level folder structure.  
To scaffold the structure, use:

```bash
mkdir -p src/{assets,components/{atoms,molecules,organisms,layouts},features/{auth/{components,stores,services,views},dashboard/{components,stores,services,views},inventory/{components,stores,services,views},campaigns/{components,stores,services,views}},i18n,router,stores,services,utils,plugins,sockets,views}

touch src/{App.vue,main.js,tailwind.config.ts}
