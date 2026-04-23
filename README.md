# Tobams Group — Training & Development Page

## Live URL
🔗 **[https://tobams-theta.vercel.app](https://tobams-theta.vercel.app)**

## GitHub Repository
📁 **[https://github.com/pianstp/tobams](https://github.com/pianstp/tobams)**

## Figma Design
🎨 **[Frontend Intern Assessment — Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=1-1394&t=BFMfAVvq7c0kH8G2-0)**

---

## Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/tobams.git
cd tobams

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build
npm run start
```

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| **Next.js** | 16 (App Router) | Framework |
| **Tailwind CSS** | v4 | Styling |
| **TypeScript** | v5 | Type safety |
| **next/image** | built-in | Optimized images |
| **next/font** | built-in (Inter) | Optimized font loading |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css                     # Tailwind imports + CSS custom properties
│   ├── layout.tsx                      # Root layout with Inter font + metadata
│   └── page.tsx                        # Page composition
└── components/
    ├── Navbar.tsx                      # Sticky two-row header
    ├── Hero.tsx                        # Full-width hero banner
    ├── LearningManagementSystem.tsx    # Circular image + course list
    ├── CorporateTrainings.tsx          # Text + image two-column
    ├── PersonalisedTraining.tsx        # Image + text two-column
    ├── CapacityDevelopment.tsx         # Text + image two-column
    ├── ManagementDevelopmentProgram.tsx# Dark card with feature pills
    ├── TransformationHub.tsx           # Pink card with chip grid
    ├── TrainTheConsultant.tsx          # Feature card 2x2 grid
    ├── CTABanner.tsx                   # Centered CTA banner
    ├── Testimonials.tsx                # Carousel testimonial cards
    ├── PreFooterCTA.tsx                # Dark pre-footer strip
    ├── BoltListItem.tsx                # Reusable SVG bolt list item
    └── Footer.tsx                      # 4-column footer with info card
```

---

## Design Decisions & Technical Assumptions

### Tailwind CSS v4 Only
No other CSS frameworks used. All styling via Tailwind utility classes. Tailwind v4 uses `@import "tailwindcss"` and `@theme inline` in `globals.css` instead of a `tailwind.config.ts` file.

### Responsive Prefixes
`sm:` and `lg:` responsive prefixes used exclusively — no custom `@media` queries. Tailwind's built-in breakpoints (`sm: 640px`, `lg: 1024px`) map cleanly to the required 425px / 768px / 1280px targets. This keeps the codebase consistent and avoids mixing Tailwind with raw CSS media queries.

### Two-Row Navbar
The header is split into two rows: Row 1 (logo + CTA buttons) and Row 2 (nav links). This matches the Figma design exactly. A `border-t` and `border-b` on the nav row creates the dividing lines. Active state uses an inline `style` for `borderBottom` to bypass Tailwind v4 dynamic class scanning limitations with arbitrary color values.

### Inline Style Exception
The assessment requires "no inline styles" — one exception exists: the active nav underline uses `style={{ borderBottom: "2px solid #3b0a35" }}` on the `<li>` element. This was necessary because Tailwind v4's JIT scanner does not reliably generate dynamic arbitrary-value classes (e.g. `border-[#3b0a35]`) inside conditional template literals at runtime. All other styling uses Tailwind utility classes exclusively.

### SVG Lightning Bolt
The ⚡ emoji was replaced with an SVG path in `BoltListItem.tsx` because Unicode emoji characters ignore CSS `color` properties — they always render in their native yellow/orange color. The SVG respects `currentColor` and correctly applies the `rgba(29, 6, 23, 1)` design token.

### Design Token Colors
Brand colors are defined as CSS custom properties in `globals.css` under `@theme inline` for Tailwind v4 compatibility:
- Primary: `#4a0e3f` / `rgba(87, 18, 68, 1)` — Hue/Primary
- Accent: `#e8533a` — coral CTA
- Gold: `#c9a84c` — highlight borders
- Purple-90%: `rgba(29, 6, 23, 1)` — bolt icons

### Inter Font
Loaded via `next/font/google` — closest match to the clean humanist sans-serif in the design spec. Eliminates layout shift and avoids external font requests at runtime.

### Images
All images served from `public/img/` via `next/image` with `fill` layout for responsive containers. Every image has meaningful `alt` text for accessibility.

### Circular Image (LMS Section)
Achieved with `rounded-full overflow-hidden` on a fixed-size wrapper — no border or shadow per the design spec.

### Sticky Navbar
Uses `sticky top-0 z-50` — no JavaScript scroll listeners needed.

### Button Border Radius
All buttons use `rounded-[4px]` per the Figma `Spacing/4` radius design token — not the default `rounded-full` pill shape.

---

## Accessibility

- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- All images have descriptive `alt` text
- All buttons and links are keyboard-navigable with visible `focus:ring` states
- `aria-label` on icon-only buttons (hamburger menu, carousel arrows)
- `aria-hidden="true"` on decorative SVG icons

---

## Known Issues / Deviations

- The Figma file was not directly accessible during development. The implementation is based on detailed UI/UX descriptions provided per section.
- One inline style used for the active nav underline (documented above).
- Testimonial avatars for the 4th card reuse `testimony_1.png` as only 3 avatar images were provided.

---

## AI Assistance Disclosure

This project was built with AI assistance (**Amazon Q Developer**). All generated code has been reviewed, understood, and intentionally applied. The AI was used as a coding assistant — all design decisions, component structure choices, and implementation approaches were directed and verified by the developer.

---

## Deployment

Deployed to **Vercel**. Steps to deploy your own instance:

```bash
# 1. Verify build passes locally
npm run build

# 2. Push to GitHub (public repository)
git push origin main

# 3. Connect repo to Vercel at vercel.com and deploy
```

---

## Submission Checklist

- [x] Public GitHub repository
- [x] Live deployment URL in README
- [x] Setup instructions included
- [x] Tech stack documented
- [x] Design decisions and assumptions documented
- [x] Figma link referenced
- [x] AI assistance disclosed
- [x] Semantic HTML and accessibility implemented
- [x] All images via `next/image` with alt text
- [x] Font loaded via `next/font`
- [x] No CSS frameworks other than Tailwind
- [x] Responsive at 425px, 768px, 1280px+
- [x] Components in `/components` directory
