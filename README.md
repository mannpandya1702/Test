# Ambrozia Café & Pâtisserie — Website

A premium, mobile-first marketing website for **Ambrozia Café & Pâtisserie**, a
patisserie & café in Viman Nagar, Pune (est. 2015).

Designed to feel like a high-end agency deliverable: warm luxury palette,
editorial typography, generous whitespace, smooth scroll-reveal animations and
tasteful micro-interactions.

## Tech stack

- **Next.js 14** (App Router, React Server Components)
- **React 18**
- **Tailwind CSS 3** — custom warm design tokens
- **Framer Motion 11** — reveal, parallax & micro-interactions
- `next/font` — Playfair Display (display) + Inter (body)
- `next/og` — build-time generated OpenGraph share image

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## What's inside

Single-page experience composed from reusable components:

| Section | Notes |
|---|---|
| Hero | Parallax visual, headline, dual CTA, live trust row |
| Flavour marquee | Infinite, seamless |
| Signatures | Hover-animated product cards |
| Our Story | Image collage + stats, all researched facts |
| Why guests love us | Review themes + auto-playing Google/Zomato carousel |
| Gallery | Pinterest-style masonry |
| Menu highlights | Grouped, dotted-leader menu with macaron flavour ribbon |
| Seasonal / Custom cakes | Feature banner + WhatsApp enquiry CTA |
| Instagram | Feed grid linking to the live profile |
| Visit | Google Maps embed, hours, address, phone + enquiry/reservation form |

### Design system

- `tailwind.config.js` — colour tokens (cream / linen / espresso / caramel / gold), shadows, easing, keyframes
- `app/globals.css` — CSS variables, film-grain texture, focus rings, reduced-motion support
- `components/ui/*` — `Button`, `SectionHeading`, `Reveal`, `Placeholder`
- `components/icons.jsx` — one consistent line-art icon set (no emoji)
- `lib/data.js` — **single source of truth** for every business fact

### Accessibility & performance

- WCAG-minded contrast, visible focus states, keyboard-navigable, `prefers-reduced-motion` respected
- Semantic labels, skip link, `aria-live` form errors
- Lazy-loaded map, SSR content, JSON-LD `Bakery` structured data, full OpenGraph/Twitter metadata

## Content & imagery

All copy uses **real, publicly available information** (Zomato, Swiggy, the
café's public Instagram, magicpin, restaurant-guru). Nothing is invented; any
detail that could not be verified is intentionally omitted.

Photography is represented by **art-directed placeholders** — each tile names
the exact shot that belongs there — so the owner can drop in real
`@ambroziacafeandpatisserie` imagery without hotlinking copyrighted photos.

## Contact / order flows

WhatsApp deep-links (`wa.me`) are pre-filled with on-brand messages; the
enquiry form composes the visitor's details into a WhatsApp message — no
backend required.

---

*Design intent: a ₹1,00,000-class custom website. Swap the placeholder tiles
for the café's own photography to ship.*
