---
name: Whimsical Romance
colors:
  surface: '#fefccf'
  surface-dim: '#dedcb1'
  surface-bright: '#fefccf'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f6c9'
  surface-container: '#f2f0c4'
  surface-container-high: '#eceabe'
  surface-container-highest: '#e6e5b9'
  on-surface: '#1d1d03'
  on-surface-variant: '#4f4446'
  inverse-surface: '#323214'
  inverse-on-surface: '#f5f3c7'
  outline: '#817476'
  outline-variant: '#d3c3c5'
  surface-tint: '#78555e'
  primary: '#78555e'
  on-primary: '#ffffff'
  primary-container: '#ffd1dc'
  on-primary-container: '#7a5761'
  inverse-primary: '#e7bbc6'
  secondary: '#5c5d6e'
  on-secondary: '#ffffff'
  secondary-container: '#e1e1f5'
  on-secondary-container: '#626374'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffd967'
  on-tertiary-container: '#765e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e2'
  primary-fixed-dim: '#e7bbc6'
  on-primary-fixed: '#2d141c'
  on-primary-fixed-variant: '#5e3e47'
  secondary-fixed: '#e1e1f5'
  secondary-fixed-dim: '#c5c5d8'
  on-secondary-fixed: '#191b29'
  on-secondary-fixed-variant: '#444655'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fefccf'
  on-background: '#1d1d03'
  surface-variant: '#e6e5b9'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: auto
  max-width: 1200px
---

## Brand & Style

The design system is centered on a warm, sincere, and charming personality tailored for couples and planners. It evokes the feeling of a handwritten love letter—intimate, intentional, and slightly nostalgic.

The visual style blends **Minimalism** with **Glassmorphism**. High amounts of whitespace ensure the experience remains stress-free, while translucent, "frosted" layers add a sense of ethereal lightness. The interface avoids clinical sharpness in favor of organic, soft interactions that feel as inviting as a cozy café. Every element is designed to spark joy and anticipation for the date ahead.

## Colors

The palette is anchored in soft, emotive pastels complemented by a warm, creamy base.

- **Primary (Soft Pink):** Used for main actions, active states, and heart-centric iconography.
- **Secondary (Lavender):** Used for subtle categorizations, background washes, and secondary buttons.
- **Tertiary (Gold):** Reserved for "premium" moments—special recommendations, highlights, and delicate borders.
- **Neutral (Creamy White):** The primary background color. It provides a softer, more organic feel than pure white.
- **Text:** A deep cocoa-tinted charcoal (#4A3F3F) is used instead of black to maintain the warm, romantic atmosphere.

## Typography

This design system utilizes a high-contrast typographic pairing to balance elegance with modern usability. 

**Playfair Display** provides a sophisticated, editorial feel for headlines. It should be used for titles and emotive statements. **Plus Jakarta Sans** is the workhorse for body text and labels; its soft, rounded terminals echo the brand's friendly nature while ensuring high legibility during the logistics of date planning. 

Line heights are intentionally generous to create an airy, relaxed reading experience.

## Layout & Spacing

The design system employs a **Fixed Grid** on desktop (12 columns, 1200px max-width) and a **Fluid Grid** on mobile (4 columns). 

The spacing rhythm is built on an 8px base unit. To maintain the "whimsical" feel, use larger-than-standard margins (`lg` and `xl`) between major sections to let content "breathe." Content should never feel cramped. Use asymmetrical layouts occasionally—such as overlapping images or staggered text blocks—to reinforce the romantic, non-linear feel of a scrapbook.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Ambient Shadows**.

- **Surface Layers:** Use semi-transparent creamy-white backgrounds (`rgba(255, 253, 208, 0.7)`) with a `20px` backdrop blur for modals, navigation bars, and floating cards.
- **Shadows:** Avoid harsh, dark shadows. Instead, use "Soft Glow" shadows: `0px 10px 30px rgba(255, 209, 220, 0.3)`. This gives elements a weightless, floating quality.
- **Accents:** Use thin, 1px gold (#D4AF37) borders on high-priority elevated elements to define their edges without adding visual weight.

## Shapes

The shape language is consistently soft and organic. 

- **Containers:** Standard cards and containers use a `1rem` (16px) radius. 
- **Buttons:** Primary buttons use a `2rem` (32px) "Pill" shape to feel tactile and friendly.
- **Icons:** Icons should be housed in circular containers.
- **Imagery:** Photos should feature soft-clipped corners or occasional circular masks to mimic a locket or a photo album.

## Components

### Buttons
- **Primary:** Pill-shaped, Soft Pink background, Cocoa text. Subtle scale-up animation on hover.
- **Secondary:** Transparent background with a 2px Lavender border or a frosted-glass effect.
- **Icon Buttons:** Circular buttons with a Lavender or Gold tint, used for playful interactions like "Favorite" (Heart) or "Share."

### Input Fields
- Inputs feature a creamy background with a 1px Soft Pink border that glows (increases shadow spread) when focused. Labels are always in **Plus Jakarta Sans** (Label-md).

### Cards
- **Date Cards:** Utilize the frosted glass effect. Feature a large image with a 16px corner radius and a Gold-accented tag for the "Date Category."

### Chips/Tags
- Small, pill-shaped tags used for "Vibe" (e.g., *Quiet, Adventurous, Candle-lit*). Backgrounds should be very desaturated versions of the brand colors.

### Interactive Elements
- **Selection:** Checkboxes and Radio buttons are circular. When selected, they fill with a Gold gradient to feel like a "stamp of approval."
- **Progress Bars:** Soft, rounded tracks in Lavender with a Pink progress indicator.