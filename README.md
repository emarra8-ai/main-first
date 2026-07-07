# Emiliano Marra — Personal Website

A clean, modern single-page site for **Emiliano Marra** — Restaurant Equipment Specialist & Consultant, Washington, D.C.

Built with **React + Vite + Tailwind CSS v4 + Framer Motion (`motion/react`)**. It compiles to plain static files (HTML/CSS/JS), so it deploys anywhere — **GitHub Pages, Netlify, or Vercel** — with no backend.

Features an interactive hero (mouse-scrubbed background video, typewriter headline, animated service pills, sticky nav), plus About, What I do, an Experience timeline, and Contact — all responsive, accessible, and SEO/Open-Graph ready.

---

## Quick start (run it locally)

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server → http://localhost:5173
```

Build a production bundle and preview it:

```bash
npm run build    # outputs static files to /dist
npm run preview  # serve the built /dist locally to check it
```

---

## Where to edit your content

Everything is marked with `✏️ EDIT` comments. The main spots:

| What | File |
| --- | --- |
| Page title, meta description, **Open Graph / social preview** | `index.html` |
| Hero headline, intro line, service pills, background video URL | `src/components/Hero.jsx` |
| Your name / wordmark + nav links | `src/components/Navbar.jsx` |
| **Your bio** + headshot | `src/components/About.jsx` |
| The four things you do | `src/components/WhatIDo.jsx` |
| Experience timeline (add real years) | `src/components/Experience.jsx` |
| **Email, LinkedIn, company link** | `src/components/Contact.jsx` |
| Colors & fonts (Italian palette) | `src/index.css` |

### Add your photo
Drop a professional headshot (square, ~800×800px) into `public/assets/` and update the
filename in `src/components/About.jsx` (look for `HEADSHOT`). A placeholder is there now.

### Contact details — ⚠️ still placeholders
Open `src/components/Contact.jsx` and replace `your.email@example.com` and the LinkedIn
URL with your real details before you deploy.

### Social share image
`public/assets/og-image.svg` is a ready-made design. For reliable previews on
LinkedIn/X/Facebook, export it to a **1200×630 PNG** named `og-image.png` in the same
folder, then set the absolute URL in `index.html` (`og:image`, `twitter:image`) to your
live domain, e.g. `https://your-site.com/assets/og-image.png`.

---

## Deploy

Pick **one** of the three below. All three serve the built static site — the `base: './'`
setting in `vite.config.js` keeps asset paths relative, so the same build works on all of them.

### Option A — Vercel (easiest)
1. Push this repo to GitHub (already wired to `origin`).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import this repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**, Build command: `npm run build`, Output dir: `dist`.
4. Click **Deploy**. Done — you get a live URL and automatic deploys on every push.

### Option B — Netlify
1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → pick this repo.
3. Build command: `npm run build` · Publish directory: `dist`.
4. **Deploy site.** Auto-deploys on every push.

> A `netlify.toml` is included, so Netlify picks up these settings automatically.

### Option C — GitHub Pages
GitHub Pages needs the built `/dist` folder published. The included GitHub Actions workflow
does this for you on every push to `main`:

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or re-run the action). Your site publishes to
   `https://<your-username>.github.io/main-first/`.

> Because it's served from a `/main-first/` subpath, the relative `base` is what makes
> assets resolve correctly — no changes needed.

If you'd rather deploy manually without Actions, run `npm run build` and push the contents
of `/dist` to a `gh-pages` branch.

---

## Tech notes
- **No backend / no database.** Pure static output.
- **Accessibility:** semantic landmarks, labeled controls, focus-visible defaults, and
  `prefers-reduced-motion` handling in `src/index.css`.
- **Performance:** single bundle, lazy-loaded images, system-font fallbacks.
- The mouse-scrub hero video only scrubs on screens ≥1024px; on mobile it autoplays.

## Project structure
```
main-first/
├─ index.html                # HTML shell + SEO/OG meta (edit meta here)
├─ vite.config.js            # Vite + React + Tailwind, base:'./'
├─ netlify.toml              # Netlify build settings
├─ .github/workflows/        # GitHub Pages deploy action
├─ public/
│  ├─ favicon.svg
│  └─ assets/                # headshot + og-image placeholders (replace these)
└─ src/
   ├─ main.jsx, App.jsx, index.css
   ├─ hooks/useTypewriter.js
   └─ components/            # Navbar, Hero, About, WhatIDo, Experience, Contact, Footer
```
