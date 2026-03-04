

## Booking Calendars Integration Plan

### Current State
The "Citas" section currently has WhatsApp and phone CTAs. The offices data still references old names — needs updating to **Hospital Faro del Mayab #711** and **Hospital Star Médica #417**.

### What We'll Build

**1. Update office data** — Rename the two locations to their correct names.

**2. Replace the "Citas" section with a tab-based booking widget:**
- Use the existing Radix Tabs component (`src/components/ui/tabs.tsx`)
- Two tabs: "Hospital Faro del Mayab" and "Hospital Star Médica"
- Each tab contains the embedded calendar (iframe) for that location
- Keep the WhatsApp/phone CTAs below the calendar as a fallback

**3. Calendar embed approach:**
- Each calendar embed code (likely an `<iframe>`) will be rendered inside the active tab panel via `dangerouslySetInnerHTML` or a direct `<iframe>` tag
- We'll store the embed URLs/code as constants in the component
- Responsive: calendars will be set to `width: 100%` with a reasonable min-height (~500-600px)

### Layout

```text
┌─────────────────────────────────────────┐
│  Agende su consulta                     │
│  Seleccione la ubicación de su consulta │
│                                         │
│  [Faro del Mayab]  [Star Médica]  ← tabs│
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │   Embedded Calendar (iframe)    │    │
│  │                                 │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [WhatsApp]  [Llamar]  ← fallback CTAs │
└─────────────────────────────────────────┘
```

### Next Step
Once approved, I'll set up the tab structure with placeholder iframes — then you can share the two embed codes and I'll drop them in.

