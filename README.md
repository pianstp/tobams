# Tobams Group — Training & Development Page

## Live URL
🔗 **[https://tobams.vercel.app](https://tobams.vercel.app)** *(update after deployment)*

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

---

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **next/image** for optimized images
- **next/font** (Inter) for optimized font loading

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind imports + CSS custom properties
│   ├── layout.tsx        # Root layout with Inter font + metadata
│   └── page.tsx          # Page composition
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── LearningManagementSystem.tsx
    ├── CorporateTrainings.tsx
    ├── PersonalisedTraining.tsx
    ├── CapacityDevelopment.tsx
    ├── ManagementDevelopmentProgram.tsx
    ├── TransformationHub.tsx
    ├── TrainTheConsultant.tsx
    ├── Testimonials.tsx
    ├── BoltListItem.tsx
    └── Footer.tsx
```

---

## Design Decisions & Technical Assumptions

- **Tailwind CSS v4 only** — no other CSS frameworks used. All styling via utility classes.
- **Responsive prefixes** (`sm:`, `lg:`) used exclusively — no custom `@media` queries. Tailwind's built-in breakpoints (`sm: 640px`, `lg: 1024px`) map cleanly to the required 425px / 768px / 1280px targets.
- **CSS custom properties** defined in `globals.css` under `@theme inline` for Tailwind v4 compatibility, exposing brand colors (`--color-primary`, `--color-accent`, etc.) as Tailwind utilities.
- **Inter font** loaded via `next/font/google` — chosen as the closest match to the clean sans-serif in the design spec.
- **All images** served from `public/img/` via `next/image` with `fill` layout for responsive containers and meaningful `alt` text on every image.
- **Circular image** in the LMS section achieved with `rounded-full overflow-hidden` on a fixed-size wrapper.
- **Gold border frame** in the Management Development Program section uses `border-2 border-[#c9a84c]` on a rounded container.
- **Sticky navbar** uses `sticky top-0 z-50` — no JavaScript scroll listeners needed.
- **AI assistance disclosure**: This project was built with AI assistance (Amazon Q Developer). All code has been reviewed and understood.

---

## Deployment

Deployed to **Vercel**. To deploy your own instance:

```bash
npm run build   # verify build passes locally first
```

Then connect the GitHub repo to [vercel.com](https://vercel.com) and deploy.
