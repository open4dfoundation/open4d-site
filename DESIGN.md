---
name: Open4D
description: A measured interface for inspecting 3D data that changes over time.
colors:
  utility-iron: "#32373a"
  carbon: "#171a1c"
  utility-mist: "#e3e5e2"
  graphite: "#111318"
  body-ink: "#353b44"
  muted-ink: "#626665"
  cool-ground: "#f1f1ed"
  paper: "#fbfbf8"
  rule: "#cfd1cd"
  rule-strong: "#999e9c"
  focus-amber: "#c88927"
  chart-muted: "#adb1ae"
typography:
  display:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 7vw, 6rem)"
    fontWeight: 730
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 4.5vw, 4.5rem)"
    fontWeight: 730
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Source Code Pro Variable, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  status: "4px"
  control: "5px"
  tabs: "7px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "28px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.utility-iron}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "52px"
  button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.carbon}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "52px"
  evidence-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.control}"
    padding: "18px"
---

# Design System: Open4D

## Overview

**Creative North Star: "The Evidence Bench"**

Open4D looks like a clean place to inspect work in progress. Large plain statements establish the question, then real frames, controls, measurements, and limitations carry the argument. The interface is bright, technical, and confident without trying to imitate a command line or a science-fiction display.

The system stays visually flat and uses scale, rules, and full-width carbon fields to separate modes. It rejects glossy startup decoration, unsupported product imagery, and feature-card catalogues. Real project output is the primary visual material.

**Key Characteristics:**

- Real changing-3D output appears before architecture or ambition.
- Large compressed headings sit against small, measured supporting copy.
- Iron and carbon own actions and whole evidence fields; they are not scattered as decoration.
- Fine rules register rows, frames, and status without turning them into cards.
- Limitations travel with results.

## Colors

The palette is a warm-white work surface with graphite type, precise steel rules, and carbon used at structural moments. Source media keeps its scientific colors.

### Primary

- **Utility Iron:** Used for primary actions, active measurements, and the closing response field.
- **Carbon:** Used when white text and real media need a quiet, high-contrast ground.
- **Utility Mist:** Used for selection and low-emphasis interface context.

### Neutral

- **Graphite:** Main text and hard technical contrast.
- **Body Ink:** Long-form introductory copy.
- **Muted Ink:** Explanations, captions, and limitations.
- **Cool Ground:** The continuous page surface.
- **Paper:** Media controls, charts, status registers, and inverse actions.
- **Rule / Strong Rule:** Registration lines and container edges; strong rules mark larger boundaries.
- **Chart Muted:** The before-state and secondary benchmark bars.

### Named Rules

**The Dark Field Has a Job Rule.** Iron or carbon marks an action, an active measurement, or a whole change of context; neither is used as decoration.

**The Evidence Before Claim Rule.** A measured result and its source treatment must appear before broader statements about capability.

## Typography

**Display Font:** Archivo Variable (with Arial and sans-serif fallbacks)  
**Body Font:** Archivo Variable (with Arial and sans-serif fallbacks)  
**Label/Mono Font:** Source Code Pro Variable (with monospace fallback)

**Character:** Archivo provides broad, blunt technical headlines without the anonymous feel of a system face. Source Code Pro is reserved for timestamps, values, and compact machine-readable labels.

### Hierarchy

- **Display:** Heavy, tightly spaced, and compressed vertically. Use for one page-level statement only.
- **Headline:** Heavy and balanced across one to three lines. Use for section arguments, not labels.
- **Title:** Medium-large, weighty text for research records and task names.
- **Body:** Regular weight with generous line height and a practical maximum near 66 characters.
- **Label:** Small mono or compact sans text for time, measurements, state, and chart annotation.

### Named Rules

**The Plain Sentence Rule.** Headlines state the task, result, or limitation in ordinary language; do not turn category terms into slogans.

## Layout

Pages use a centered shell capped at 1460px with 24px outer gutters on wide screens and 14px gutters below 760px. Major sections breathe vertically, while evidence inside a section is compact and ruled. Split headings place the argument on the left and the explanation on the right; below 1000px they become a single column.

The signature rhythm is statement, artifact, caption, and status. Dense evidence is aligned in two-column or tabular structures above 760px and becomes a deliberate reading order on small screens. The five-frame strip stays horizontally swipeable on phones so temporal adjacency remains visible.

## Elevation & Depth

The system uses no box shadows. Depth comes from full-surface carbon changes, paper panels on the warm-gray ground, stronger outer rules, and the literal depth visible in project media.

### Named Rules

**The Flat by Default Rule.** A surface earns separation through structure and contrast, never through a decorative shadow.

## Shapes

Corners are restrained and functional: 4px for compact status labels, 5px for controls and framed evidence, and 7px for grouped tabs. Most layout divisions remain square and ruled. Circles are limited to status dots, data marks, and native icon geometry.

## Components

### Buttons

- **Shape:** A compact rectangular control with gently softened 5px corners and a 52px minimum height.
- **Primary:** Utility Iron with white text, medium-heavy type, and an external-link arrow when it leaves the site.
- **Inverse:** Paper on a carbon or iron field with Carbon text.
- **Hover / Focus:** Hover darkens or lifts by 2px; keyboard focus uses a visible amber 3px outline. Reduced-motion preference removes the lift.

### Cards / Containers

- **Corner Style:** Flat or gently softened at 5px only when the object behaves as one instrument.
- **Background:** Paper for controls and evidence; Cool Ground for the page; carbon for a whole contextual shift.
- **Shadow Strategy:** None.
- **Border:** A one-pixel Rule or Strong Rule provides registration.
- **Internal Padding:** Usually 18px for instrument panels and 30px to 70px for large status panes.

### Navigation

The sticky navigation is plain text on the Cool Ground. Active routes receive a thin iron underline. At 1000px it becomes a single outlined menu button and a full-width ruled menu; it does not turn into a floating overlay card.

### Sequence Stage

Five real frames share one ruled viewport with timestamp labels, a continuous progress track, playback controls, and source measurements. On phones, each frame occupies 72% of the viewport so the next frame remains visible as a swipe cue. The full viewer replaces the contact sheet only after the visitor asks it to play.

### Evidence Rows and Status Registers

Research records use ruled rows with the result in the larger column and the limitation beside it. Status panels use two equal paper columns when space permits and a linear register on phones. Labels remain factual: available, being built, verified partial, working isolated, or release blocked.

## Do's and Don'ts

### Do:

- **Do** keep the interface monochrome so source media and measured data retain their own meaning.
- **Do** put a real frame, result, or measurement next to every capability statement.
- **Do** use full-width carbon fields when the page changes from explanation to comparison or response.
- **Do** preserve wide gutters, long rules, and clear reading order before adding another container.
- **Do** keep limitations visually adjacent to the result they qualify.
- **Do** use motion for state changes, playback, and entry sequencing, with reduced-motion support.

### Don't:

- **Don't** invent uploads, dashboards, APIs, format support, or roadmap states that the repository does not verify.
- **Don't** add gradients, glow, glass, floating blobs, or generic 3D decoration.
- **Don't** organize the marketing page as a repeated grid of rounded feature cards.
- **Don't** introduce a saturated brand accent; interface hierarchy comes from value, scale, and rules.
- **Don't** hide unfinished work behind aspirational language.
