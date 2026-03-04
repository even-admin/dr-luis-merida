

## Changes to LocationsSection

### 1. Reorder sections
Move "Agende su consulta" (booking/citas) **above** "Ubicaciones en Mérida" (office addresses). Currently the offices grid comes first — we'll flip the order so the calendar and CTAs appear first, then the office details below.

### 2. Move buttons closer to calendar
The WhatsApp/phone buttons are inside the `mb-10` Tabs wrapper but appear after a 1200px iframe, pushing them far down. We'll:
- Remove the `mb-10` from the Tabs component
- Place the buttons right after the Tabs with minimal top margin (`mt-4`)

### 3. Update button styling
Change from gray semi-transparent (`bg-foreground/5`) to:
- **Default state**: white background (`bg-white`), dark text, subtle border
- **Hover state**: solid blue background (`bg-primary`), white text (`text-white`), blue border

### File changed
`src/components/LocationsSection.tsx` — reorder the two content blocks, adjust button spacing and colors.

