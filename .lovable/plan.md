

## Changes: Clean white backgrounds, cross-grid specialties, blue footer

### 1. Specialties — white background + cross divider grid
- Change section background from `bg-[hsl(45,10%,93%)]` to `bg-white`
- Replace the individual card layout (`gap-5` with `bg-card` cards and shadows) with the 2x2 grid separated by thin black cross lines — a single container with `border` dividers between cells (using `border-r` and `border-b` on items, no individual card styling)
- Remove card shadows and rounded corners — each cell gets padding only

### 2. Remove depressing gray backgrounds everywhere
- **Reviews section**: change `bg-[hsl(45,10%,93%)]` to `bg-white`
- **About section**: remove `border-t border-border`
- **Locations section**: remove `border-t border-border`
- **Offices section**: remove `border-t border-border`

### 3. Footer — blue background with off-white text
- Change `bg-charcoal` to `bg-[#0d47a1]` (the doctor's brand blue)
- Text colors stay `text-off-white` / `text-off-white/80`
- Border divider becomes `border-white/20`
- Label uppercase text becomes `!text-off-white/60` instead of `!text-warm-grey`

### Files to edit
- `src/components/SpecialtiesSection.tsx` — white bg + cross grid
- `src/components/ReviewsSection.tsx` — white bg
- `src/components/AboutSection.tsx` — remove border-t
- `src/components/LocationsSection.tsx` — remove border-t
- `src/components/OfficesSection.tsx` — remove border-t
- `src/components/SiteFooter.tsx` — blue bg

