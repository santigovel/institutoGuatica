# AGENTS.md

Single-page Spanish-language site (Instituto Guática) built with React 19 + TypeScript + Vite + Tailwind v4. Deployed to GitHub Pages (`gh-pages` branch).

## Commands

- `npm run dev` — Vite dev server (no test suite exists)
- `npm run lint` — ESLint (flat config in `eslint.config.js`)
- `npm run build` — `tsc -b` then `vite build`. This is the typecheck gate; there is no separate `typecheck` script
- `npm run deploy` — build + publish `dist` to GitHub Pages via `gh-pages` (CI in `.github/workflows/deploy.yml` also deploys on push to `main`)

Verify changes with `npm run lint && npm run build`.

## Workflow

- Follow the repo-local skills in `.opencode/skills/`: `always-pr` (finish every task with a PR against `main`) and `always-deploy` (publish to GitHub Pages after deployable changes).

## Gotchas

- Deployed under the `/institutoGuatica/` subpath (`base` in `vite.config.ts`). Hardcoded asset URLs must include that prefix, e.g. `/institutoGuatica/sede.webp` in `src/data/images.ts`. Absolute paths like `/images.png` break on production.
- Static assets live in `public/` (`escudo.webp`, `sede.webp`, `favicon.svg`, `icons.svg`); reference them with the base prefix.
- Tailwind v4: theme is CSS-first via the `@theme` block in `src/index.css`. There is no `tailwind.config.js`; add/edit colors there.
- TS config is strict and non-idiomatic-safe: `erasableSyntaxOnly` forbids `enum`/`namespace`/constructor parameter properties, and `verbatimModuleSyntax` requires `import type` for type-only imports.
- GSAP animations go through the hooks in `src/lib/animations.ts` (`useGsapReveal`, `useGsapParallax`, `useGsapCounter`) driven by `[data-reveal]` / `[data-reveal-delay]` attributes. Always scope work in `gsap.context(...)` and call `ctx.revert()` on cleanup.
- Leaflet (`src/components/Map.tsx`) requires explicitly importing `leaflet/dist/leaflet.css` and the marker PNGs; the map is built imperatively in a `useEffect` and torn down in cleanup.
- UI copy is Spanish; keep new content in Spanish.
- Images are centralized in `src/data/images.ts` with attribution/license metadata; add new images there, not inline. Wikimedia URLs are built via the `wiki()` helper.
