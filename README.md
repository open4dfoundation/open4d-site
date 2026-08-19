# Open4D website

A standalone marketing site for Open4D. It explains the project through real sequence output, measured research results, current limitations, and one direct request for workflow feedback.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Verify

```bash
npm run check
```

The check runs ESLint, Vitest component tests, the production build, and Playwright browser tests at desktop and mobile widths. The browser suite also checks viewport overflow and serious or critical Axe accessibility violations.

## Structure

- `src/pages/HomePage.tsx` contains the primary campaign story.
- `src/pages/WorkPage.tsx` expands the three research records.
- `src/pages/StatusPage.tsx` records current and unfinished project areas.
- `src/components/SequenceStage.tsx` is the interactive five-frame demonstration.
- `src/components/BenchmarkChart.tsx` renders the V-DMC timing and memory evidence.
- `public/media` contains compact poster, frame, MP4, and WebM assets derived from the project examples.
- `PRODUCT.md` records product truth and copy constraints.
- `DESIGN.md` records the shipped visual system and guardrails.

## Deployment

Build with `npm run build` and serve `dist` from a static host configured to return `index.html` for `/work` and `/status`. No analytics, form backend, or deployment provider is assumed.
