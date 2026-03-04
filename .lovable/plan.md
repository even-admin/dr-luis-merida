

## Reduce gap between Hero and Especialidades

The hero section uses `min-h-screen` which forces it to take the full viewport height, creating a large empty gap before the next section. The fix:

1. **HeroSection.tsx** — Change `min-h-screen` to `min-h-[85vh]` (or similar) so the hero doesn't push too far down, reducing the dead space before Especialidades while still feeling full and impactful.

2. **SpecialtiesSection** — Optionally reduce its top padding from `section-padding` (96px top) to something smaller like `pt-16` (~64px) for a tighter visual connection.

This keeps the hero prominent without the oversized gap below.

