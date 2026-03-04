

## Make header solid white on mobile/tablet + push hero image below header

**Problem**: On phone and tablet, the header is transparent over the hero background image, cutting off the doctor's head and making the nav button hard to read.

**Solution**: Two changes across two files.

### 1. `src/components/SiteHeader.tsx` — Solid white header on mobile/tablet

- On screens below `lg`, the header background is always solid white (`rgba(247, 246, 242, 0.96)`) with blur, regardless of scroll position.
- On `lg+` (desktop), keep current behavior: transparent at top, solid on scroll.
- Header text and button colors stay dark (already are), so legibility is perfect on white.

### 2. `src/components/HeroSection.tsx` — Image starts below header

- On the mobile/tablet background div, change `inset-0` to `top-[64px] left-0 right-0 bottom-0` so the background image begins right where the 64px header ends.
- Similarly update the content wrapper's `pt-32` to account for the image starting lower — can reduce to `pt-16` since the header space is already handled.
- This centers the doctor's face better in the remaining viewport space without any cropping at the top.
- Desktop layout stays untouched.

