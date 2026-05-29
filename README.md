# ⚡ Sparky Notes

Deep, browse-first **reading guides** for essential high-school books — built as a
static **Next.js** site for **GitHub Pages**.

Each guide covers two pillars:

1. **Literary analysis** — themes, symbolism, character, structure, and style.
2. **How it connects to today (2026)** — modern-day parallels (e.g. *1984* and the
   surveillance economy, *The Handmaid's Tale* and reproductive rights).

Plus the **best quotes** (with significance) and **key-highlight cards**. As you read,
you earn **XP, levels, and badges** — progress is saved locally in your browser.

## Features

- **Browse-first home** with a live, multi-select **pill filter** (genre / theme / era).
- **34 in-depth guides** spanning the classic canon plus modern, diverse, and
  contemporary picks (Beloved, The Kite Runner, Persepolis, Fight Club, The Alchemist…).
- **Gamification**: "Mark as read" awards XP, unlocks badges, and pops a reward toast;
  a **Trophy Case** (`/rewards`) tracks your progress. All client-side via `localStorage`.
- **Card-like highlight posts** at the bottom of every page.
- Fully **static** — no backend, deployable to GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

> `basePath` is only applied in production builds (for the `/sparky-notes/` GitHub
> Pages subpath), so local dev serves from the root.

## Build & preview the static export

```bash
npm run build    # generates ./out (static HTML for every guide + /rewards)
npm run serve    # serves ./out locally via `npx serve`
```

## Deployment (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` builds and deploys automatically on every
push to `main`.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment** and
set **Source = "GitHub Actions"**. The site will then publish to
`https://<user>.github.io/sparky-notes/`.

## Adding or editing a book

All content lives in typed data files — no component changes needed:

- Book entries: `src/data/books/*.ts` (grouped as `classics-*`, `modern`, `contemporary`),
  aggregated in `src/data/books.ts`.
- The `Book` shape is defined in `src/data/types.ts` (summary, `literaryAnalysis`,
  `currentEvents`, `quotes`, `highlights`, plus pill metadata: `genres`, `themes`, `era`).
- Badges/achievements: `src/data/badges.ts`.

Add a new object to one of the group arrays and it automatically appears in the grid,
the filter pills, the highlight cards, and the gamification totals.

## Project structure

```
src/
  app/
    layout.tsx              # root layout (Header, Footer, ProgressProvider)
    page.tsx                # browse-first home + highlight cards
    books/[slug]/page.tsx   # individual reading guide (generateStaticParams)
    rewards/page.tsx        # Trophy Case
  components/               # Pill, FilterPills, BookCard, HighlightCard, badges, toasts…
  data/                     # typed book content + badges
  lib/                      # filters + the progress/XP/badge engine
```

---

*An educational study aid — always read the original work.*
