/**
 * Landing Page Component
 * 
 * Related Documentation:
 * /docs/frontend/MainLayout.md  
 * /docs/frontend/ThreeColumnShell.md
 * /docs/frontend/LandingHeroSection.md
 * /docs/frontend/LandingValueShowcase.md
 * /docs/frontend/LandingExperienceCarousel.md
 * /docs/frontend/PlayablePreviewCarousel.md
 * 
 * Purpose:
 * - Sets up the entry point view for the application with headline, subheadline, and CTAs
 * - Integrates responsive, slot-driven layout using ThreeColumnShell.vue
 * - Showcases platform value, onboarding experience, and playable RPG elements
 * 
 * Development Mantra:
 * "We build not for today, but for tomorrow and beyond."
 */

# LandingPage.vue Component

## Overview
> The Landing Page is the entry point of the application and introduces users to the platform’s purpose.  
It features a bold headline, supporting tagline, CTA buttons, and preview sections highlighting platform strengths, gameplay features, and RPG character teasers.  
It is wrapped in `MainLayout.vue` and utilizes `ThreeColumnShell.vue` for layout structure.

## Location  
> `/src/views/LandingPage.vue`

## Features
- [x] Centered hero section with `LandingHeroSection.vue`
- [x] Register/Login CTA buttons
- [x] Left-side `LandingValueShowcase` with Why Choose Us + Feature Highlights
- [x] Right-side `LandingExperienceCarousel` showing onboarding steps + testimonials
- [x] Right-side `PlayablePreviewCarousel` showing rotating character previews
- [x] Gradient-styled containers for improved readability
- [x] Enhanced dividers for clear section separation
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
- `LandingValueShowcase.vue` — Why Choose Us and Feature Highlights sections
- `LandingExperienceCarousel.vue` — Step-by-step onboarding and testimonials
- `PlayablePreviewCarousel.vue` — Rotating preview of character classes/species
- `Tailwind CSS` — Layout, spacing, gradients, responsiveness
- `RouterLink` — For page navigation (CTA buttons)

## Usage
```vue
<!-- Registered via Vue Router -->
<Route path="/" element={<LandingPage />} />
