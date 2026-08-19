---
name: Open4D
description: A versioned repository brief for inspecting 3D data that changes over time.
colors:
  graphite: "#111318"
  carbon: "#171a1c"
  utility-iron: "#32373a"
  muted-ink: "#5f6362"
  paper: "#fbfbf8"
  utility-ground: "#efefeb"
  utility-mist: "#e2e3df"
  rule: "#c9cbc6"
  rule-strong: "#8f9491"
  focus-amber: "#b8791b"
  translucent-rule: "rgba(255, 255, 255, 0.24)"
  translucent-rule-strong: "rgba(255, 255, 255, 0.45)"
  error-violet: "#24114e"
  error-indigo: "#403ab6"
  error-blue: "#2e8bcb"
  error-teal: "#35b889"
  error-green: "#9dc642"
  error-yellow: "#e2bd32"
  error-orange: "#e26b27"
  error-red: "#9f1f17"
typography:
  display:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 7.1vw, 6rem)"
    fontWeight: 730
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 4.4vw, 4.35rem)"
    fontWeight: 730
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(1.55rem, 2.7vw, 2.65rem)"
    fontWeight: 730
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  body:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Source Code Pro Variable, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  status: "3px"
  control: "4px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "20px"
  lg: "28px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.utility-iron}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 19px"
    height: "50px"
  button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.carbon}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 19px"
    height: "50px"
  status-label:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.status}"
    padding: "4px 7px"
---

# Design System: Open4D

## Overview

**Creative North Star: "The Versioned Repository Brief"**

Open4D reads like a dated technical brief that can be checked against the repository. A release line establishes version and recency; large plain statements name the job; real frames, task registers, measurements, and local scope notes carry the argument. The visual system is bright, technical, and measured without imitating a terminal or a science-fiction display.

The page stays flat and near-monochrome. Scale, long rules, table-like registers, and full-width carbon or iron fields create hierarchy. Real project output is the visual material, while limitations remain attached to the result they qualify.

**Key Characteristics:**

- A version and update date frame the site as a repository brief rather than a timeless campaign.
- One fixed, selectable frame instrument shows real changing-3D output before architecture or ambition.
- Task-oriented registers expose repository breadth without turning it into a feature-card grid.
- Equal research records keep codecs, reconstruction, and reproducibility work at the same visual level.
- Compact scope language states what works now without letting maturity messaging dominate the page.

## Colors

The interface is deliberately monochrome: graphite, iron, paper, and rules organize the experience so source imagery and measured error retain their scientific meaning.

### Primary

- **Utility Iron:** Primary actions, selected frame controls, and the closing workflow-response field.
- **Carbon:** Whole comparison fields and the darkest contextual surfaces.
- **Utility Mist:** Selection, limitation notes, and quiet hover feedback.

### Tertiary

- **Focus Amber:** Keyboard focus only. It exists for accessibility, not brand decoration.
- **Error Violet through Error Red:** A fixed eight-step scientific scale used only for decoded-to-source distance in the comparison key and corresponding source evidence.

### Neutral

- **Graphite:** Main text and hard contrast.
- **Muted Ink:** Explanations, captions, metadata, and limitations.
- **Utility Ground:** The continuous warm-gray page surface.
- **Paper:** Instrument panels, mobile navigation, and the two status-overview panes.
- **Rule / Strong Rule:** Row registration and major boundaries.
- **Translucent Rule / Strong Translucent Rule:** Dividers and borders over carbon or iron fields only.

### Named Rules

**The Monochrome Interface Rule.** Interface controls, type, surfaces, and state remain neutral; saturated hues are not brand accents.

**The Scientific Color Is Data Rule.** Violet, indigo, blue, teal, green, yellow, orange, and red appear only as the ordered error scale or inside source imagery that already encodes measurements.

**The Translucency Is a Rule Rule.** Semi-transparent white is reserved for one-pixel dividers and media borders on dark fields; it is never a glass surface, overlay material, or decorative wash.

## Typography

**Display Font:** Archivo Variable (with Arial and sans-serif fallbacks)  
**Body Font:** Archivo Variable (with Arial and sans-serif fallbacks)  
**Label/Mono Font:** Source Code Pro Variable (with monospace fallback)

**Character:** Archivo supplies broad, blunt technical statements and compact readable prose. Source Code Pro is reserved for version lines, timestamps, measurements, frame readouts, status metadata, and table headers.

### Hierarchy

- **Display:** Heavy, tightly spaced, and vertically compressed. Use for one page-level statement.
- **Headline:** Heavy and balanced across one to three lines. Use for section arguments and interior-page headings.
- **Title:** Dense but readable. Use for research-record titles and signature-instrument headings.
- **Body:** Regular weight with generous line height and practical measures near 53–68 characters.
- **Label:** Small mono text, frequently uppercase, for version, frame, measurement, state, and source labels.

### Named Rules

**The Plain Sentence Rule.** Headlines state the task, result, or limitation in ordinary language; category terms do not become slogans.

**The Mono Means Measured Rule.** Monospace type signals a value, index, version, timestamp, state, or table coordinate—not a decorative technical mood.

## Layout

Pages use a centered shell capped at 1420px. Wide screens have 24px side gutters; screens at 780px and below use 14px. Major sections breathe vertically, while evidence within a section is compact and registered by horizontal rules.

At 1060px, the desktop navigation becomes a square menu control, hero and interior headings stack, the comparison introduction reflows, and wide work records simplify. At 780px, evidence tables become labeled vertical records, the sequence instrument becomes one column, comparison evidence deliberately extends edge-to-edge, and its 760px canvas scrolls horizontally inside a keyboard-focusable native overflow region. At 480px, the frame well adopts the source aspect ratio, panel padding tightens, and the comparison facts and error-key labels simplify.

The signature rhythm is release line, statement, artifact, register, and source. Repository and status information stays tabular on wide screens and becomes a deliberate labeled reading order on small screens. Media reserves its final aspect ratio before loading.

## Elevation & Depth

The system uses no box shadows, backdrop blur, glass, or simulated elevation. Depth comes from a full-surface change to carbon or iron, white instrument panes on the warm ground, stronger outer rules, and the literal depth contained in project imagery.

### Named Rules

**The Flat by Default Rule.** A surface earns separation through structure and contrast, never through a decorative shadow.

## Shapes

Corners are restrained and functional. Primary controls use gently softened 4px corners; compact scope and status labels use 3px. Instruments, tables, research records, comparison figures, and major panels remain square and ruled. Circles are limited to status bullets and native icon geometry.

The low-radius system is intentional. Repeated containers must not become rounded cards, and responsive stacks retain the same registered edges as their wide-screen forms.

## Components

### Buttons

- **Shape:** Compact rectangular controls with 4px corners and a 50px minimum height.
- **Primary:** Utility Iron with white text, 19px horizontal padding, and an external-link arrow when it leaves the site.
- **Inverse:** White on an iron field with Carbon text.
- **Hover / Focus:** Hover darkens and lifts 2px over 180ms; keyboard focus uses a visible 3px amber outline. Reduced-motion preference effectively removes transitions.

### Navigation

The sticky header is a translucent Utility Ground strip with a one-pixel rule. Desktop links receive a 2px iron underline on hover or active state. At 1060px the navigation becomes a 42px square outlined menu control and a full-width ruled Paper menu; it does not become a floating overlay card.

### Sequence Stage

One complete viewer frame sits in a fixed dark well beside a Paper information panel. Five buttons select sampled frames without changing the container dimensions. The selected frame, time, source index, rate, vertex count, and triangle count update together; images always use `object-fit: contain`. Frame changes use a 220ms clipped fade and become immediate when reduced motion is requested.

### Repository and Status Registers

The repository register maps user tasks to scope, implementation detail, and evidence. The status register uses the same ruled row grammar for area, state, evidence, and next work. Column headers use measured labels; at 780px each cell gains its own visible label and records stack linearly.

### Comparison Figure

The comparison is a static aligned still inside a native horizontally scrollable viewport. The figure keeps a 1400:444 aspect ratio, and its eight-step error key is page-native text and color so labels cannot be cropped from the source image. The evidence has one stable view and no animated mode switch.

### Research Records

Research stories are equal ruled records with identifier, question or result, local limitation, and source link. The homepage does not promote one project into a special card. The Work route may attach evidence specific to a record, including a measurement table, without changing the register hierarchy.

### Benchmark Table

The V-DMC measurement is a plain ruled table with baseline and parallel-revision columns, followed by one validation row. Values use Source Code Pro. It is intentionally not a bar chart: exact time, memory, and validation outcomes matter more than visual magnitude.

### Current Scope

Current scope is one compact ruled row pairing a short usable-now statement with a status link. It is not a repeated maturity panel and should remain subordinate to the repository map and research evidence.

## Do's and Don'ts

### Do:

- **Do** define the page as a versioned repository brief with visible version and recency.
- **Do** make “Describe your workflow” the primary action and “Browse the repository” the secondary action.
- **Do** put a real frame, result, measurement, or repository location next to capability statements.
- **Do** keep the interface monochrome so source media and measured error retain meaning.
- **Do** preserve native horizontal scrolling for the comparison on narrow screens.
- **Do** keep limitations visually adjacent to the result they qualify.
- **Do** honor reduced-motion preferences for navigation and frame replacement.

### Don't:

- **Don't** invent uploads, dashboards, APIs, format support, or roadmap states that the repository does not verify.
- **Don't** add alternate modes, autoplay, or animated resizing to the fixed sequence or comparison evidence.
- **Don't** turn the three-row benchmark evidence into a decorative graphic.
- **Don't** add gradients, glow, glass, floating blobs, shadows, or generic 3D decoration.
- **Don't** organize the site as a repeated grid of rounded feature cards.
- **Don't** promote scientific error colors into interface accents.
- **Don't** hide unfinished work behind aspirational language or duplicate it across large maturity sections.
