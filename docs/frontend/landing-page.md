/**
 * Landing Page Component
 * 
 * Related Documentation:
 * /docs/frontend/MainLayout.md  
 * /docs/frontend/ThreeColumnShell.md
 * /docs/frontend/LandingHeroSection.md
 * /docs/frontend/LandingValueShowcase.md
 * /docs/frontend/PlayablePreviewCarousel.md
 * 
 * Purpose:
 * - Sets up the entry point view for the application with headline, subheadline, and CTA
 * - Integrates responsive, slot-driven layout using ThreeColumnShell.vue
 * - Showcases platform value, playable content, and onboarding experience modules
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# LandingPage.vue Component

## Overview
> The Landing Page is the entry point of the application and introduces users to the platform’s purpose.  
It features a bold headline, supporting tagline, CTA buttons, and preview sections highlighting platform strengths and RPG features.  
It is wrapped in `MainLayout.vue` and utilizes `ThreeColumnShell.vue` for layout structure.

## Location  
> `/src/views/LandingPage.vue`

## Features
- [x] Centered hero section with `LandingHeroSection.vue`
- [x] Register/Login CTA buttons
- [x] Left-side `LandingValueShowcase` with Why Choose Us + Features
- [x] Left-side `PlayablePreviewCarousel` showing rotating characters
- [x] Right-side `LandingExperienceCarousel` (planned)
- [x] Fully responsive, mobile-first 3-column layout
- [x] Page-specific background image rendering

## Props (if applicable)
| Prop Name | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| *None*    | —    | —       | Layout is composed of modular, slotted components |

## Emits (if applicable)
| Event Name | Payload | Description |
|:-----------|:--------|:------------|
| *None*     | —       | —          |

## Dependencies
- `MainLayout.vue` — Page frame (Navbar + Footer)
- `ThreeColumnShell.vue` — Responsive 3-column layout wrapper
- `LandingHeroSection.vue` — Center hero headline, subheadline, and CTA buttons
- `LandingValueShowcase.vue` — 2x2 value grid and feature highlights
- `PlayablePreviewCarousel.vue` — Rotating preview of character classes/species
- `Tailwind CSS` — Layout, spacing, responsiveness
- `RouterLink` — For page navigation (CTA buttons)

## Usage
```vue
<!-- Registered via Vue Router -->
<Route path="/" element={<LandingPage />} />
