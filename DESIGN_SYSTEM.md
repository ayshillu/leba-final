# Leba Papers Design System (2026)

This document outlines the core design principles, tokens, and components that define the visual identity of Leba Speciality Papers.

## 1. Brand Identity & ethos
**"Organic Industrial"**
The design language balances the raw, engineered nature of industrial paper manufacturing with a soft, handcrafted aesthetic.
*   **Tone**: Calm, Engineered, "Placed", Premium.
*   **Visual Metaphor**: "Soft Floating Panels" — Content floats on the canvas, distinct from the background layer.

---

## 2. Color Palette

### Core Colors
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `var(--bg-canvas)` | `#f8f9fa` | Main background (light grey/off-white) |
| `var(--bg-surface)` | `#ffffff` | Card and panel backgrounds |
| `var(--bg-contrast)` | `#1a1a1a` | Dark mode panels, Footer, Hero Backgrounds |
| `var(--color-primary)` | `#1a1a1a` | Primary text, headings, heavy borders |
| `var(--color-secondary)` | `#555555` | Body text, subheaders, meta info |
| `var(--color-accent)` | `#1e4620` | **Deep Green** - Primary actions, active states, highlights |
| `var(--color-accent-hover)` | `#163618` | Darker green for hover states |

### Gradients
*   **Nav Button (Sunset Logic)**: `linear-gradient(206deg, #dcb0f2 0%, #fa7c45 50%, #db3018 100%)`
*   **Spec Box**: `linear-gradient(135deg, #3b597b 0%, #7d2e46 100%)`

---

## 3. Typography

**Font Family**: `Inter`, sans-serif.

### Type Scale
| Element | Desktop Size | Mobile Size | Weight | Tracking | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | `clamp(3rem, 5vw, 4.5rem)` | `2.1rem` | 600 (Semi-Bold) | `-0.03em` | `1.1` |
| **H2** | `clamp(2rem, 3vw, 3rem)` | `1.7rem` | 500 (Medium) | `-0.02em` | `1.2` |
| **H3** | `1.5rem` | `1.3rem` | 500 (Medium) | Normal | Normal |
| **Body** | `1.05rem` | `15px` | 400 (Regular) | `-0.01em` | `1.6` |
| **Label**| `0.75rem` | `0.7rem` | 600 (Semi-Bold) | `0.1em` | `1` |

**Notes**:
*   Headers use negative letter spacing for a tighter, more modern look.
*   Labels are always Uppercase.

---

## 4. Layout & Grid

### Utilities
*   **Container Width**: Max `1400px`.
*   **Grid System**: CSS Grid with `gap: 24px` (Desktop) / `12px` (Mobile).
*   **Spacing Unit**: 4px base (`.mt-4` = 16px, `.mt-8` = 32px).

### The "Panel" System
The interface is built using distinct "Panels" rather than continuous sections.
*   **`.panel`**: Transparent background, `40px` vertical padding.
*   **`.panel-dark`**: Dark `#1a1a1a` background, white text.
*   **`.panel-hero-modern`**: Full bleed, often contains complex layouts. Mobile: `aspect-ratio: 4/5`.

---

## 5. UI Components

### Navigation (Floating Pill)
A floating navigation bar that sits `32px` from the top, centered.
*   **Shape**: `border-radius: 100px`.
*   **Effect**: `backdrop-filter: blur(12px)`.
*   **Background**: `rgba(255, 255, 255, 0.9)`.
*   **Shadow**: `0 20px 40px -10px rgba(0, 0, 0, 0.1)`.

### Buttons
*   **Primary**: Background `var(--color-accent)` (Green), White text.
*   **Outline**: White background, Border `#64748b` (Slate), Text `#475569`.
*   **Shape**: `border-radius: 4px` (Sharp/Industrial).
*   **Interaction**: `transform: translateY(-2px)` on hover.

### Cards ("Modern")
Minimalist cards used for blog/news.
*   **Image**: Rounded corners (`--radius-lg`), `box-shadow: --shadow-card`.
*   **Content**: Clean text, no background.
*   **Interaction**: Image scales (`1.05`), text remains static but action arrow moves diagonally.

### Spec Tables
Used on product pages.
*   **Headers**: Uppercase, tracked out (`0.05em`), `color: var(--color-secondary)`.
*   **Rows**: `border-bottom: 1px solid rgba(0,0,0,0.05)`.
*   **Mobile**: Converts to block layout with pseudo-element labels.

---

## 6. Iconography
*   **Library**: Lucide / Feather Icons (SVG).
*   **Style**: Stroke width `1.5` or `2`, rounded caps.
*   **Size**: Standard `20px` or `24px`.

## 7. Animation Tokens (GSAP)
*   **Reveal Panel**: `y: 50` -> `0`, `opacity: 0` -> `1`, `duration: 1.2s`.
*   **Text Blur**: MagicUI style blur-in per word. filter `blur(10px)` -> `0px`.
*   **Stagger**: `0.1s` delay between list items.
