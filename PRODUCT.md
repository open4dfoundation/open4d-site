# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated by the user: React, TypeScript, and Vite, with Motion for authored interaction and Visx for evidence graphics. The site remains a static deployable artifact.

## Users

Researchers and engineers already working with dynamic meshes, point-cloud sequences, volumetric video, compression, OpenUSD, or 4D reconstruction. They arrive from a technical post, paper, personal invitation, or GitHub and want to know what Open4D does, what works now, and whether their own workflow problem is relevant.

## Product Purpose

Open4D is an open-source project for working with 3D data that changes over time. The website must show real project output, help visitors understand the current tools and research, and collect concrete examples of where changing-3D workflows need custom code or break.

## Positioning

Open4D brings code for loading, viewing, compressing, and comparing mesh and point-cloud sequences into one research repository while clearly separating working components from shared APIs and complete workflows that are still being built.

## Operating Context

Visitors work across research repositories, file sequences, codecs, viewers, metric scripts, Open3D, OpenUSD, XR playback, and published artifacts. Their common pain is moving data and meaning between tools without rebuilding loaders, timing conventions, wrappers, comparisons, or playback.

## Capabilities and Constraints

- The repository includes a lightweight temporal geometry core, sequence loading and viewer examples, sequence comparison, an Open3D adapter, and independent codec/reconstruction research projects.
- The shared API and complete end-to-end workflows are still being built.
- No major shared pipeline currently meets the project's own completeness bar.
- Redistribution remains gated by third-party provenance and licensing review.
- The website must not imply a stable `.o4d` format, public `open4d.io` or `open4d.metrics` APIs, production readiness, or one-command installation.
- Primary action: ask visitors what data they use, which tools or formats they move it between, and which step needs custom code or breaks.

## Brand Commitments

- Name: Open4D.
- Define 4D immediately as 3D data that changes over time.
- Use short sentences and familiar verbs such as load, save, compress, compare, and play.
- No buzzwords, grand campaign name, abstract AI imagery, decorative sci-fi language, or exaggerated claims.
- Use real viewer footage, research visuals, code, results, and limitations.

## Evidence on Hand

- Real Open4D viewer recording: source repository `docs/assets/viewer_demo.gif`.
- Real sequence comparison recording: source repository `docs/assets/basketball_comparison_demo.gif`.
- TSMC project reports 24 FPS decoding on Meta Quest 3 and is scheduled for SIGGRAPH 2026; use as linked research with explicit scope.
- Open4D V-DMC experiment: one ten-frame test improved from 1.978 s to 0.704 s, all 20 equality checks passed, 30 output files were byte-identical, and peak memory rose from about 144 MB to 372 MB.
- TVMC received the ACM MMSys 2025 Best Reproducible Paper Award; use as a reproducibility story, not a general product claim.
- Current detailed status lives in the Open4D v0.2-dev handbook.

## Product Principles

- Show working output before explaining architecture.
- Make one job and one next action obvious.
- Treat limitations and test conditions as part of the result.
- Separate shared Open4D tools from independent research projects.
- Optimize for useful replies and returning technical participants, not impressions or stars.

## Accessibility & Inclusion

Target WCAG 2.2 AA. All moving media requires user controls and a reduced-motion alternative. The page must remain understandable from text and still images when video or animation is unavailable.
