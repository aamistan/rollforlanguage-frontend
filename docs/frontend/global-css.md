/**
 * Global Stylesheet: global.css
 * 
 * Related Documentation:
 * /docs/frontend/global-css.md
 * 
 * Purpose:
 * - Establishes a complete, scalable global CSS baseline
 * - Integrates custom font `MedReg` and prepares for long-term theming
 * - Supplements Tailwind’s utility-first system with necessary global resets and helpers
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# Global Stylesheet System (Mini Doc)

## Overview
> The `global.css` file provides a modern, component-agnostic global styling foundation for the frontend. It works alongside Tailwind CSS to deliver consistent resets, typography, accessibility, and structural refinements across the app.

## Location
> `/src/assets/styles/global.css`

## Key Features
- Registers and loads custom font (`MedReg.woff2`) using `@font-face`
- Implements a clean 7-section layout: resets, typography, HTML defaults, a11y, utilities, and helper classes
- Includes helper classes like `.sr-only`, `.no-scroll`, `.truncate-1`, `.hidden-scrollbar`, and `.center-absolute`

## Props
None

## Emits
None

## Usage Example
```js
// main.js
import './assets/styles/tailwind.css'; // Tailwind entry
import './assets/styles/global.css';   // Custom global overrides
