

## Add subtle depth and editorial texture to remaining sections

The hero's split approach (image + solid) works because it introduces contrast and visual rhythm. The rest of the site is currently flat — all `bg-background` with only `border-t` dividers. We can bring taste without disrupting the clean approach by using these techniques:

### 1. Alternating background tones
Give select sections a slightly warmer or cooler tint to create visual layers as you scroll. The Specialties and Reviews sections get a very subtle off-white/warm panel (`bg-[#f0eeea]`), while About, Locations, and Offices stay on the default `bg-background`. This creates a natural rhythm without adding noise.

### 2. Thin accent line on section headers
Add a small 40px horizontal rule in the brand blue (`bg-primary`) between the label-uppercase and the `h2` in each section — a subtle editorial touch that ties back to the blue accent philosophy.

### 3. Specialties grid — card depth
Replace the current `gap-px bg-border` grid divider approach with actual cards that have a very subtle shadow (`shadow-[0_1px_3px_rgba(0,0,0,0.04)]`) and a white background. This gives each specialty its own "weight" without breaking the minimalism.

### 4. Reviews — quotation mark accent
Add a large decorative serif quotation mark (`"`) in a faint warm-grey above each review blockquote. This is a classic editorial device that adds visual interest to what is currently just plain text.

### 5. Footer — dark inversion
Invert the footer to a dark charcoal background (`bg-[hsl(var(--charcoal))]`) with light text. This grounds the page, gives a strong visual ending, and mirrors the dark-over-image treatment from the hero.

### Files to edit
- `src/components/SpecialtiesSection.tsx` — background tint + accent line + card styling
- `src/components/AboutSection.tsx` — accent line
- `src/components/ReviewsSection.tsx` — background tint + accent line + decorative quote mark
- `src/components/LocationsSection.tsx` — accent line
- `src/components/OfficesSection.tsx` — accent line
- `src/components/SiteFooter.tsx` — dark background inversion

All changes are CSS/className only — no structural or content changes.

