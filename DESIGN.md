# Design System Specification: The Gastronomic Concierge

## 1. Overview & Creative North Star: "The Obsidian Ritual"
This design system is not a mere interface; it is a digital omakase. Our Creative North Star, **"The Obsidian Ritual,"** draws from the structural precision of *Sushi da Naya* and the coastal high-luxury of *Vilanculos*. 

To move beyond a "template" look, we reject the rigid, centered grid in favor of **Intentional Asymmetry**. We treat the screen as an editorial spread where negative space is as important as the content itself. Expect overlapping elements, oversized serif typography that breaks container boundaries, and a "concierge-first" hierarchy that anticipates the user's needs before they click.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the depth of a moonless night, punctuated by the organic vibrance of emerald and the solar warmth of gold.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through background color shifts or subtle tonal transitions. 
*   *Example:* A `surface-container-low` section sitting on a `surface` background provides all the separation required.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of lacquered wood and frosted glass. Use the `surface-container` tiers to create depth:
*   **Base Layer:** `surface` (#131313) for the main canvas.
*   **Secondary Sections:** `surface-container-low` (#1c1b1b) for subtle grouping.
*   **Interactive Cards:** `surface-container-high` (#2a2a2a) to draw the eye forward.
*   **Nesting:** Place a `surface-container-highest` component inside a `surface-container-low` section to create a "lifted" focal point without using a single line.

### The "Glass & Gradient" Rule
To evoke a premium, "wet" look (reminiscent of fresh fish or polished stone), use **Glassmorphism**. Floating elements (modals, navigation bars) should use semi-transparent `surface` colors with a `backdrop-blur` of 20px+.
*   **Signature Texture:** Use a subtle linear gradient on primary CTAs transitioning from `primary` (#93d6a0) to `primary-container` (#004b23) at a 135-degree angle. This adds a "silk-screen" depth that flat emerald cannot achieve.

---

## 3. Typography: The Editorial Voice
We pair the intellectual authority of **Noto Serif** with the functional clarity of **Inter**.

*   **Display & Headlines (Noto Serif):** These are our "signature" moments. Use `display-lg` for hero titles with tight letter-spacing (-0.02em). Headlines should feel like a high-end menu—authoritative and elegant.
*   **Body & Labels (Inter):** Inter handles the "concierge" work. It must be legible, airy, and professional. 
*   **The Hierarchy Strategy:** Large Serif titles should occasionally overlap image containers or extend beyond the standard margin to break the "boxed-in" feel of mobile apps.

---

## 4. Elevation & Depth
In this system, light and shadow mimic a dimly lit, high-end restaurant.

*   **The Layering Principle:** Depth is achieved by "stacking" tones. A `surface-container-lowest` card on a `surface-container-low` section creates a soft, natural "recessed" look.
*   **Ambient Shadows:** For floating elements, use extra-diffused shadows. 
    *   *Spec:* `0px 24px 48px rgba(0, 0, 0, 0.4)`. The shadow color must never be pure black; it should be a tinted version of the `on-surface` color at 4% opacity to mimic ambient room light.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use a "Ghost Border": the `outline-variant` token at 15% opacity. **Never use 100% opaque borders.**

---

## 5. Components

### Buttons
*   **Primary:** Emerald gradient (`primary` to `primary-container`). Roundedness: `md` (0.375rem). Text: `label-md` in `on-primary` (all caps, +0.1em tracking).
*   **Secondary:** Ghost style. `outline-variant` ghost border (20% opacity) with `secondary` (Gold) text.
*   **Tertiary:** Text only in `secondary_fixed`. No container.

### Cards & Gastronomy Lists
*   **Constraint:** No divider lines. Separate list items using 16px of vertical white space or by alternating between `surface-container-low` and `surface-container-lowest`.
*   **Featured Dish Card:** Use a `surface-container-high` background. Images should have a subtle 5% gold inner-glow to simulate professional food lighting.

### Selection & Input
*   **Chips:** Selection chips use `primary-container` with `primary` text. No borders.
*   **Input Fields:** `surface-container-highest` background. The active state is signaled by a `secondary` (Gold) 2px bottom-bar only—not a full perimeter stroke.

### Specialized Component: The Concierge Float
A persistent, glassmorphic "Book Now" or "Ask Sommelier" button that sits in the bottom right, utilizing `surface-bright` with a `secondary` (Gold) icon.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins (e.g., 24px left, 40px right) for editorial layouts.
*   **Do** use the `secondary` (Gold) color sparingly—only for "money moments" like prices, gold-leaf accents, or CTA highlights.
*   **Do** allow food photography to bleed to the edges of the screen.

### Don't:
*   **Don't** use standard Material Design "Drop Shadows." They feel "techy" rather than "luxury."
*   **Don't** use 100% white (#FFFFFF). Always use `on-surface` (#e5e2e1) to maintain the "dimly lit" premium atmosphere.
*   **Don't** use sharp 0px corners. Use the `DEFAULT` (0.25rem) or `md` (0.375rem) to soften the "digital" edge while maintaining a sophisticated architectural feel.

---

## 7. Roundedness Scale (Reference)
*   **DEFAULT:** 0.25rem (Standard cards/buttons)
*   **md:** 0.375rem (Featured elements)
*   **xl:** 0.75rem (Outer modal containers)
*   **full:** 9999px (Pill buttons/chips)