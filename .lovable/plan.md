

## Fix: Auto-resize booking iframes to prevent cutoff

The calendar gets cut off on mobile/tablet because of the fixed `minHeight: 600px`. The booking provider (LeadConnector/GoHighLevel) includes an auto-resize script that dynamically adjusts iframe height to fit content.

### Changes to `src/components/LocationsSection.tsx`

1. **Load the embed script** — Add a `useEffect` that injects the `https://link.msgsndr.com/js/form_embed.js` script into the document. This script auto-resizes LeadConnector iframes based on their content height.

2. **Remove fixed `minHeight`** on both iframes — Replace `style={{ minHeight: "600px", overflow: "hidden" }}` with just `style={{ overflow: "hidden" }}` (or a small fallback like `minHeight: "400px"` so there's no layout shift before the script kicks in).

3. **Add the provider's expected `id` attributes** to each iframe so the script can target them:
   - Faro: `id="zRPVLsuGUsTA4IIpNI8H_1772643601224"`
   - Star: `id="cLtGf6lOnYzVgkjjUwQ0_1772642559459"`

This lets the provider's script handle responsive sizing automatically, eliminating cutoff on all viewports while keeping the CTA buttons positioned right below.

