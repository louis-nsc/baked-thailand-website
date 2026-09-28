# Baked Thailand Website — Claude Code Context

## What this project is
A full rebuild of **bakedthailand.com** (Thailand's first Thai FDA-approved
THC microdose edibles brand, based in Chiang Mai) using Astro + React + the
Baked Thailand Design System, deployed to Vercel. Follows the same process and
conventions as the Vera Visa rebuild (`../../Vera Visa/vera-visa-website/`).

The goal is a pixel-perfect, SEO-preserving replacement for the current
WordPress/Elementor site, plus a new Thai-language B2C/B2B content push. Every
kept URL must return 200 with matching or improved meta tags — see
`../Website Rebuild/url-mapping.csv` for the full per-URL decision (kept,
redirected, or dropped, with reasons).

## Design system location
`../Baked Thailand Design System/` — read `readme.md` and `SKILL.md` there
before touching any UI. Import its `styles.css` once, from
`src/styles/global.css`.

## Current build status
See `../Website Rebuild/PLAN.md` for the six-phase tracker (audit, design
system, research, content/IA, build, launch) and the decision log. Phases 1-4
are signed off; this repo is Phase 5.

## Tech stack
- **Astro 5** with `@astrojs/react`, `@astrojs/sitemap`, `@astrojs/vercel`
- **React 18** — islands only (interactive components)
- **TypeScript** throughout
- **Vercel** deploy target

## URL rules (non-negotiable)
- `trailingSlash: 'always'`
- Every row in `../Website Rebuild/url-mapping.csv` marked `keep` must exist at
  its exact slug. Rows marked `redirect`