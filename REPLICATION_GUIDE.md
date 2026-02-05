# Project Replication Guide

This guide provides step-by-step instructions to replicate the "Leba Papers" website design and functionality in a new project.

## 1. Project Setup

### A. Folder Structure
Create the following directory structure:
```
/my-project
  /css
    - styles.css       # Copy the complete content from reference
  /js
    - main.js          # Copy logic for GSAP, Menu, and Three.js
  /images
    - (Assets)
  - index.html
```

### B. Core Dependencies (CDNs)
Include these in your `<head>` tag:
1.  **Google Fonts**: Inter (Weights: 300, 400, 500, 600)
2.  **GSAP**: Core + ScrollTrigger
3.  **Three.js**: Release 128+

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

---

## 2. Implementing the Design System

### Step 1: CSS Variables (The Foundation)
Copy the `:root` block from `DESIGN_SYSTEM.md` or `styles.css` into your stylesheet. This establishes the colors, spacing, and typography immediately.

### Step 2: Global Reset
Ensure you have the standard box-sizing reset:
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--bg-canvas); color: var(--color-text-body); font-family: var(--font-main); }
```

### Step 3: The "Panel" Architecture
Build your pages using the `.panel` class wrapper for sections.
```html
<section class="panel">
  <div class="main-wrapper">
    <!-- Content flows here -->
  </div>
</section>
```

---

## 3. Structural Components

### Navigation
The navigation is a **fixed-position pill**.
*   **HTML**: Use `<nav class="nav-pill desktop-only">`.
*   **Mobile**: Use `<header class="mobile-header">` AND `<div class="mobile-nav-overlay">`.
*   **Important**: Copy the specific media queries (`@media (max-width: 768px)`) from `styles.css` to handle the transition between Pill and Overlay.

### Footer
The footer is a unique `.panel.panel-dark` to create contrast.
```html
<footer class="panel panel-dark">
   <!-- 4-Column Grid -->
</footer>
```

---

## 4. Key Interactive Elements

### Modern Cards
For blog posts or features, use the `card-modern` structure:
```html
<a href="#" class="card-modern">
  <div class="card-img-container"><img ... /></div>
  <div class="card-content">
     <div class="card-meta">CATEGORY</div>
     <h3>Title Here</h3>
     <div class="card-action">-></div>
  </div>
</a>
```

### Product Spec Tables
For data display, use standard tables with the `data-label` attribute for mobile responsiveness.
```html
<table class="spec-table">
  <tr>
    <th>GSM</th>
    <td>120</td>
  </tr>
</table>
```
*Note: The CSS handles the mobile transformation automatically if you include the `@media` block for tables.*

---

## 5. Adding the "Magic" (JavaScript)

### Text Reveals
Add the class `reveal-text` or `hero-text-blur` to any element (H1, P) you want to animate on load.
*   **Requirement**: Ensure `main.js` is loaded at the end of `<body>`.

### Scroll Animations
Add `reveal-panel` to `<section>` tags.
Add `reveal-stagger` to parent containers of grids to animate children sequentially.

### Three.js Grid
Copy the `// THREE.JS GRID ANIMATION` block from `main.js`. It automatically appends a fixed canvas to the body. No HTML setup required.

---

## 6. Common Pitfalls to Avoid
1.  **Forgetting Mobile Classes**: Ensure `.desktop-only` and `.mobile-header` classes are present.
2.  **Panel Padding**: Do not add extra padding to `.panel` if using `.main-wrapper`. The systems are designed to work together.
3.  **Z-Index Conflicts**: The Nav Pill has `z-index: 1000`. Ensure your modals or overlays are higher (`2000+`).
