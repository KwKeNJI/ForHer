---
name: Whimsical Romance
colors:
  surface: '#fff8f7'
  surface-dim: '#e7d6d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#fceae9'
  surface-container-high: '#f6e4e4'
  surface-container-highest: '#f0dfde'
  on-surface: '#221919'
  on-surface-variant: '#594047'
  inverse-surface: '#382e2e'
  inverse-on-surface: '#feedec'
  outline: '#8c7077'
  outline-variant: '#e0bec6'
  surface-tint: '#b90760'
  primary: '#b90760'
  on-primary: '#ffffff'
  primary-container: '#ff4d94'
  on-primary-container: '#5b002c'
  inverse-primary: '#ffb1c7'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#9f4122'
  on-tertiary: '#ffffff'
  tertiary-container: '#e17350'
  on-tertiary-container: '#551400'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e2'
  primary-fixed-dim: '#ffb1c7'
  on-primary-fixed: '#3f001c'
  on-primary-fixed-variant: '#8e0048'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#3a0b00'
  on-tertiary-fixed-variant: '#7f2a0d'
  background: '#fff8f7'
  on-background: '#221919'
  surface-variant: '#f0dfde'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  accent-text:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
This design system captures a "Romantic but fun and lighthearted" aesthetic, blending the elegance of traditional courtship with a modern, energetic pulse. It targets a demographic that appreciates beauty but rejects stuffiness, favoring a UI that feels like an invitation to a garden party rather than a formal gala.

The style is a hybrid of **Soft Minimalism** and **Vibrant Glassmorphism**. It utilizes airy whitespace to allow content to breathe, while layering elements with soft, semi-transparent blurs to create a sense of lightness. The emotional response is one of joy, approachability, and optimism, achieved through a "playful" logic that influences every radius and shadow.

## Colors
The palette is centered on high-vibrancy warmth. 
- **Primary (Vibrant Pink):** Used for key actions and celebratory moments.
- **Secondary (Sunlight Yellow):** Acts as an energetic accent for highlights, ratings, and badges.
- **Tertiary (Soft Peach):** Provides a bridge between the pink and yellow, ideal for secondary buttons or subtle background washes.
- **Neutral (Cocoa):** A warm, deep brown used for text to maintain a softer contrast than pure black, keeping the romantic vibe grounded but gentle.

Backgrounds should predominantly use off-white or extremely pale peach tints to keep the vibrancy of the accents from becoming overwhelming.

## Typography
The typography strategy creates a delightful tension between "energetic" and "elegant."
- **Headings:** We use a bouncy, characterful grotesque for maximum personality and impact. These should be set with tight leading to emphasize their playful shapes.
- **Accents:** Playfair Display is reserved for pull-quotes, decorative subheaders, or italicized emphasis, injecting a touch of classical romance.
- **Body:** A soft, rounded sans-serif ensures high readability while maintaining the friendly, approachable tone of the design system.

## Layout & Spacing
The design system employs a **Fluid-Fixed Hybrid Grid**. Content is housed in a centered container with a maximum width of 1200px, but background elements and decorative flourishes are encouraged to bleed to the edges of the viewport to enhance the whimsical feeling.

- **Spacing Rhythm:** Based on a 4px baseline, but largely utilizing 8px increments (8, 16, 24, 32, 48, 64) to ensure a generous, airy feel.
- **Mobile:** Transition to a 4-column layout with 16px side margins. Padding within cards should decrease slightly to maximize screen real estate.
- **Desktop:** A 12-column grid with wide 24px gutters to prevent layouts from feeling cluttered.

## Elevation & Depth
Depth is handled through **Luminous Layers**. Instead of traditional grey shadows, this design system uses "Soft Shadows" tinted with the primary or tertiary colors at very low (5-8%) opacity. 

- **Level 1 (Base):** Flat or subtle 1px border in a pale peach.
- **Level 2 (Cards/Floating):** A wide, diffused shadow (20px blur) with a slight vertical offset (8px), creating a "drifting" effect.
- **Backdrop Blurs:** Use a 12px-20px Gaussian blur on overlays and navigation bars to create a "frosted candy" aesthetic that feels premium yet light.

## Shapes
The shape language is defined by the **"Playful" Token**. High corner radii are mandatory across all components to eliminate any sense of "sharpness" or corporate rigidity. 

- Standard components (Inputs, Buttons) use a **Pill-shape (1rem+)** as the default.
- Large containers (Cards, Modals) use **rounded-xl (3rem)** to create a friendly, organic frame for content.
- Decorative elements may use asymmetrical radii (e.g., top-left and bottom-right 3rem, others 1rem) to mimic a "petal" shape.

## Components
- **Buttons:** Primary buttons are pill-shaped with a vibrant gradient (Primary to Tertiary) and a soft, color-tinted shadow. On hover, they should scale slightly (1.05x) to provide energetic feedback.
- **Cards:** Heavy use of `rounded-xl` and backdrop blurs. Cards should not have heavy borders; instead, use a subtle 1px inner stroke in a light cream color.
- **Chips/Tags:** Always pill-shaped. Use the Secondary (Yellow) color for high-visibility badges and the Tertiary (Peach) for categorical tags.
- **Inputs:** Floating labels with high corner radii. The focus state should utilize a glowing outer shadow using the Primary color.
- **Lists:** Items should be separated by generous whitespace rather than lines. Use small, circular "dot" icons in the Primary color for bullet points.
- **Signature Elements:** Incorporate "Wiggles" or "Squiggles"—thin, hand-drawn vector lines—as dividers or decorative underlines to reinforce the whimsical theme.