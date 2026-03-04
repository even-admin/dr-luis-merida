

## Mobile/Tablet Hero Redesign

**Problem**: On mobile and iPad, the hero shows a full-width image first, pushing the text below the fold. The user wants text and image combined on smaller screens.

**Approach**: Create a distinct mobile/tablet layout (below `lg` breakpoint) where the portrait is used as a background image with a gradient overlay, and the text + CTA are layered on top. Desktop (`lg+`) stays exactly as-is.

### Layout for mobile/tablet (< 1024px)
- Full-viewport-height section with the doctor's portrait as a **background image** (cover, positioned to show face)
- A **gradient overlay** from bottom (dark) to top (transparent) so white/light text is readable over the image
- Text content (label, name, description, CTA) overlaid at the **bottom of the section**, left-aligned with padding
- Text color switches to white for contrast against the dark gradient
- CTA button keeps the liquid glass style but with white border/text for visibility on dark background

### Layout for desktop (lg+)
- No changes — keeps the current side-by-side grid layout

### Implementation
- Single file change: `src/components/HeroSection.tsx`
- Use `lg:hidden` for the mobile/tablet version and `hidden lg:grid` for the desktop version
- The mobile version uses `bg-cover bg-center` with an inline `style` for the background image, plus a gradient overlay div

