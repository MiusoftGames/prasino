# Prásino — Game Website

Next.js 15 App Router website for the Prásino game.

## Setup

```bash
npm install
npm run dev
```

## Hero Image

Place your hero image at:
```
/public/hero.png
```
(or any format: .jpg, .webp — update the `src` in `components/Hero/Hero.tsx` to match)

## Gallery Images

Replace placeholders in `components/Gallery/Gallery.tsx`:
```tsx
const placeholders = [
  { label: "Screenshot 1", color: "#0d2b1a" },
  // ...
];
```
Swap `color` backgrounds for real `<img src="..." />` tags when ready.

## Structure

```
app/
  layout.tsx        ← Root layout + fonts
  page.tsx          ← Assembles all sections
components/
  Navbar/           ← Fixed nav with scroll effect
  Hero/             ← Full-bleed hero + trailer modal
  Intro/            ← Tagline + 3 pillars
  Description/      ← Story + sticky accent card
  Gallery/          ← 3×2 grid with placeholder images
  Downloads/        ← Free vs Pro tier cards
  Collaborators/    ← Collaborator profile cards
  Footer/           ← Simple branded footer
styles/
  globals.css       ← CSS variables + reset + grain overlay
```

## Fonts

Space Grotesk (display) + Inter (body) loaded via Google Fonts in `app/layout.tsx`.

## Theme Colors

All colors are CSS variables in `styles/globals.css`:
- `--color-green-primary: #27d374`
- `--color-bg: #080e0a`
- `--color-text-primary: #e8f5ec`
