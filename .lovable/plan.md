

## Make all sections white + add thin centered separator lines

### Problem
The About, Locations, and Offices sections use the default `--background` (a pale yellowish-grey at `hsl(45, 14%, 96%)`). This creates an inconsistent, "depressing" alternation against the white sections.

### Changes

**1. All sections → `bg-white`**
Add `bg-white` to the `<section>` tag in:
- `AboutSection.tsx` (line 7)
- `LocationsSection.tsx` (line 24)
- `OfficesSection.tsx` (line 22)

**2. Thin centered separator lines between sections**
Add a centered horizontal rule between each section in `Index.tsx` — a thin `<hr>` element styled as a short centered line matching the specialties grid dividers:
```
<hr className="border-0 h-px bg-foreground/10 max-w-[700px] mx-auto" />
```
Place one between each section pair (Specialties↔About, About↔Locations, Locations↔Reviews, Reviews↔Offices).

**3. Change global `--background` to white**
Update `--background` in `src/index.css` from `45 14% 96%` to `0 0% 100%` so the entire page base is pure white. This catches any remaining elements using the default background color (header, body, etc.).

### Files to edit
- `src/index.css` — change `--background` to white
- `src/components/AboutSection.tsx` — add `bg-white`
- `src/components/LocationsSection.tsx` — add `bg-white`
- `src/components/OfficesSection.tsx` — add `bg-white`
- `src/pages/Index.tsx` — add `<hr>` separators between sections

