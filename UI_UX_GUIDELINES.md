# User Experience (UX) & Interaction Guidelines

This document defines the behavioral model, interactivity, and key user flows for the Leba Papers website.

## 1. Core Principles
1.  **"Reveal, Don't Overwhelm"**: Information is revealed progressively as the user scrolls.
2.  **"Tactile Feedback"**: Every interactive element must provide immediate visual feedback (hover, focus, click).
3.  **"Contextual Navigation"**: Menus and links should provide context (e.g., breadcrumbs, "More Products" pills).

---

## 2. Navigation Experience

### Desktop: The "Mega Menu"
*   **Behavior**: Hover-based trigger with infinite specific delay (approx 300ms) to prevent accidental closing.
*   **Structure**: 3-Column Grid.
    *   *Col 1*: Covering & Colored Boards
    *   *Col 2*: White/Cream & Kraft/Recycled
    *   *Col 3*: Textures, Art & Premium
*   **Visuals**: Large white panel, distinctive shadow, slight Y-axis slide-in (`translateY(10px)` -> `0`).

### Mobile: The "Accordion Drawer"
*   **Trigger**: Hamburger icon (Top Right).
*   **Transition**: Slide-in from Right (`translateX(100%)` -> `0`).
*   **Logic**: Nested Accordions (Level 1 -> Level 2 -> Level 3).
    *   *Clicking Level 1* expands sub-categories.
    *   *Clicking Level 2* reveals actual product links.
*   **Scroll Lock**: Body scroll is disabled `overflow: hidden` when menu is open.

---

## 3. Micro-Interactions

### Button Hover
*   **Effect**: 
    *   Background shifts (lighten/darken).
    *   Physical lift: `transform: translateY(-2px)`.
    *   Text color change (Outline buttons turn Blue `#0084ff`).

### Card Hover
*   **Image**: Subtle Zoom (`scale 1.05`).
*   **Icon**: The "Go" arrow translates `x: 4px, y: -4px` (Top-Right diagonal).
*   **Shadow**: Soft shadow appears below the image container.

### Form Inputs
*   **Focus State**: 
    *   Border changes to Secondary Grey.
    *   Background becomes pure White.
    *   Soft outer ring glow: `box-shadow: 0 0 0 4px rgba(0,0,0,0.05)`.

---

## 4. Animation & Motion Design
Animations are powered by **GSAP (GreenSock)** and **ScrollTrigger**.

### 4.1. Page Load Sequences
1.  **Nav Pill**: Drops in from top `-100%`.
2.  **Hero Text**: 
    *   **Words** split apart.
    *   **Filter**: `blur(10px)` -> `blur(0)`.
    *   **Opacity**: `0` -> `1`.
    *   **Stagger**: `0.05s` per word.

### 4.2. Scroll Reveals
*   **Panels**: Fade in + Scale Up (`0.98` -> `1.0`). giving a "breathing" effect.
*   **Grid Items**: Staggered fade vertically (`y: 30px` -> `0`).
*   **Images**: Clip-path reveal (`inset(0 100% 0 0)` -> `inset(0 0 0 0)`) for right-to-left wipe.

### 4.3. THREE.js Background (Subtle)
*   A faint wireframe grid moves slowly in the background (`z-index: -2`).
*   **Responsiveness**: Resizes dynamically with window.
*   **Opacity**: Very low (`0.15`), intended to be subconscious.

---

## 5. Mobile & Responsive Logic

### Breakpoints
*   **Mobile**: `< 768px`
*   **Tablet**: `769px - 1024px`
*   **Desktop**: `> 1024px`

### Mobile Layout Changes
1.  **Hero Section**:
    *   Typography scales down (`4.5rem` -> `2.1rem`).
    *   Image becomes background cover (4:5 Aspect Ratio).
    *   Text moves to bottom overlay with gradient protection.
2.  **Panels**:
    *   Padding reduces from `60px` to `24px`.
    *   Borders/Shadows are removed for a cleaner "flat" feel.
3.  **Tables**:
    *   Standard `<table>` converts to Block layout.
    *   Table Headers (`<thead>`) hidden.
    *   Cells (`<td>`) display `data-label` attribute as pseudo-element label.

---

## 6. Image & Asset Guidelines
*   **Hero Images**: High-contrast, industrial or textural, organic shapes masked.
*   **Product Thumbnails**: Consistent lighting, top-down or isometric view.
*   **Icons**: Minimalist line art, strictly `2px` stroke.

---

## 7. Accessibility (A11y) Checkpoints
*   **Contrast**: Text ratios meet WCAG AA (using `#1a1a1a` on `#f8f9fa`).
*   **Focus**: Interactive elements have visible focus states.
*   **Semantic HTML**: Use of `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`.
*   **ARIA**: Mobile menu toggles use `aria-expanded` and `aria-label`.
