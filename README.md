# Open4D website

A standalone static website for the first Open4D Python mesh-sequence workflow. It takes a developer from a real viewer recording to a licensed sample, personal OBJ or PLY frames, inspection, manifests, codecs, and explicit limits.

## Run locally

```bash
npm install
npm run sample:data
npm run dev
```

Open `http://localhost:5173`.

`npm run sample:data` regenerates the site-owned OBJ and PLY inputs under one `open4d-mesh-sequence` folder. Rebuild `public/sample-data/open4d-mesh-sequence.zip` after changing them.

## Verify

```bash
npm run check
```

The check runs ESLint, Vitest, the production build, and Playwright at desktop and mobile widths. Browser tests cover viewport overflow, serious accessibility failures, native video playback, release wording, and the main routes.

To unpack the shipped ZIP and open its OBJ and PLY folders with a current Open4D checkout:

```bash
OPEN4D_SOURCE=/path/to/Open4D npm run check:source
```

## Structure

- `src/pages/HomePage.tsx` contains the launch path.
- `src/pages/ExamplesPage.tsx` and `src/pages/TaskGuidePage.tsx` provide six task-first guides.
- `src/pages/IntegrationsPage.tsx` and `src/pages/ApiPage.tsx` keep optional setup and API details out of the first-use path.
- `src/components/SequenceStage.tsx` uses one normal video element with native controls.
- `public/sample-data` contains the site-owned MIT-licensed sample and download archive.
- `PRODUCT.md` records verified claims and copy constraints.
- `DESIGN.md` records the shipped visual system and guardrails.

## Deployment

Build with `npm run build` and serve `dist` from a static host configured to return `index.html` for client-side routes. The site contains no analytics provider, form backend, or package telemetry.

The browser dispatches an `open4d:analytics` custom event for the aggregate launch actions named in the brief. A future privacy-respecting provider can listen for those event names. No file names, paths, geometry, or personal data are included.
