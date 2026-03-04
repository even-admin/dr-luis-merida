

## Replace two separate tab buttons with a single pill toggle

**Change**: In `src/components/LocationsSection.tsx`, restyle the `TabsList` as a single connected pill container with two segments inside — like an iOS-style segmented control.

**Current**: Two separate rounded-full buttons with a gap between them (cuts off on mobile).

**New**: One `TabsList` container with `rounded-full bg-white border border-border p-1` acting as the pill shell. The two `TabsTrigger` items inside share the space equally (`flex-1`), with `rounded-full` corners, shorter labels ("Faro del Mayab" / "Star Médica"), and the active state fills its half with `bg-primary text-white`. No gap, no overflow.

```text
┌─────────────────────────────────────────┐
│  [ Faro del Mayab ]  [ Star Médica ]    │  ← single pill, active side is blue
└─────────────────────────────────────────┘
```

- `TabsList`: `inline-flex w-full sm:w-auto rounded-full bg-white border border-border p-1 gap-0`
- `TabsTrigger`: `flex-1 sm:flex-none text-[13px] font-medium rounded-full px-5 py-2 transition-all data-[state=active]:bg-primary data-[state=active]:text-white text-charcoal`
- Shorten labels to "Faro del Mayab" and "Star Médica" so they fit on small screens.

