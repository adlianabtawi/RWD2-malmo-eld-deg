# Malmö Eld & Deg

Responsive website for a fictional wood-fired pizza restaurant in Malmö, Sweden.  
Course project — HKR Responsive Web Design (WD454F), VT2026.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Start page with hero, quick actions (mobile), about section and opening hours |
| `menu.html` | Full menu with pizza, starters and drinks |
| `booking.html` | Table booking form and contact information |

## Features

- **Mobile-first** — base styles target 375px, progressively enhanced at 768px and 1200px
- **Responsive navigation** — hamburger menu on mobile, inline nav on tablet and desktop
- **Accessible** — skip link, `:focus-visible` styles, `aria-current`, `aria-expanded`, `prefers-reduced-motion`
- **Modern CSS** — Custom Properties, Flexbox, CSS Grid, `clamp()`, `aspect-ratio`, logical properties
- **Vanilla JavaScript** — no dependencies; hamburger toggle and booking form validation

## File structure

```
├── index.html
├── menu.html
├── booking.html
├── css/
│   └── style.css
├── js/
│   ├── main.js        # Hamburger menu (all pages)
│   └── booking.js     # Booking form validation (booking.html only)
└── img/
```

## Running locally

No build step required. Open any `.html` file directly in a browser, or serve with a local server:

```bash
npx serve .
```

## Course context

Built as the second examination assignment (Delprov 2, 5 hp) in the course  
**WD454F – Responsiv webbdesign** at Högskolan Kristianstad (HKR), spring 2026.

The assignment required a responsive high-fidelity prototype with a minimum of three pages and three breakpoints, documented with a written design process report.

## Image credits

Photos sourced from [Unsplash](https://unsplash.com) under the Unsplash License (free to use, no attribution required). Individual photographer credits are listed in the course report.
