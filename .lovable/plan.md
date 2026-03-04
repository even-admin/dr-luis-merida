

## Add blue tint to mobile/tablet hero gradient overlay

**Change**: Line 11 in `src/components/HeroSection.tsx` — swap the black-based gradient for a dark blue-based one.

**Current**: `bg-gradient-to-t from-black/80 via-black/30 to-transparent`

**New**: `bg-gradient-to-t from-[rgba(10,30,60,0.82)] via-[rgba(10,30,60,0.30)] to-transparent`

This uses a deep navy blue (`#0a1e3c`) instead of pure black, giving the overlay a calm, slightly blue tone that adds contrast while feeling more refined and medical. The opacity levels stay similar so text readability is preserved.

