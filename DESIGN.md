---
name: Open4D
description: A direct working reference for turning a frame folder into one usable Python sequence.
colors:
  graphite: "#111318"
  carbon: "#171a1c"
  media-carbon: "#222629"
  utility-iron: "#32373a"
  supporting-ink: "#343938"
  muted-ink: "#5f6362"
  paper: "#fbfbf8"
  white: "#ffffff"
  utility-ground: "#efefeb"
  utility-mist: "#e2e3df"
  rule: "#c9cbc6"
  rule-strong: "#8f9491"
  focus-amber: "#b8791b"
  inverse-muted: "#dfe1de"
  code-text: "#f5f6f2"
  code-muted: "#bdc2be"
  translucent-rule: "rgba(255, 255, 255, 0.24)"
typography:
  display:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(3.7rem, 6.5vw, 6rem)"
    fontWeight: 730
    lineHeight: 0.93
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 4.3rem)"
    fontWeight: 730
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(1.65rem, 2.8vw, 2.7rem)"
    fontWeight: 730
    lineHeight: 1.08
    letterSpacing: "-0.03em"
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
  square: "0"
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
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 19px"
    height: "50px"
  button-inverse:
    backgroundColor: "{colors.white}"
    textColor: "{colors.carbon}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 19px"
    height: "50px"
  code-block:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.code-text}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "22px"
  media-field:
    backgroundColor: "{colors.media-carbon}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
---

# Design System: Open4D

## Overview

**Creative North Star: "The Working Reference"**

Open4D is a direct working reference for one concrete result: a frame folder becomes one usable Python sequence. The homepage refuses to become a research catalogue. It presents the moving result, source-preview state, licensed sample, a path from sample data to personal data, the first API's limits, and the inspect, save, encode, and decode workflow in that order.

The visual world is a warm-white, near-monochrome measurement surface. Graphite Archivo statements, Source Code Pro readouts, carbon code and media fields, long ruled registers, and square instrument panels make the page feel inspectable without imitating a terminal. Real output carries the proof. The incumbent working-reference form is preserved from direction seed `45e805ce`.

**Key Characteristics:**

- The first viewport pairs exact launch copy and the source action with one normal, uncropped native video and a fixed factual ledger.
- The evidence chain moves from licensed sample to personal data, then through inspect, save, encode, decode, and six task guides.
- Limitations stay beside the capability or result they qualify; release state never becomes a destination or catalogue.
- The system is flat, ruled, square, and nearly monochrome; code, media, output, and measurements provide the visual interest.

## Colors

The palette uses warm whites and closely spaced graphite neutrals. Carbon surfaces distinguish runnable code, inspection evidence, personal-data transitions, and the closing source action without introducing a separate brand accent.

### Primary

- **Utility Iron:** Primary actions and full-width workflow transitions.
- **Carbon:** Code blocks and the darkest evidence field.
- **Media Carbon:** The native video's uncropped containing field.

### Tertiary

- **Focus Amber:** Keyboard focus only. It is an accessibility signal, not decorative color.

### Neutral

- **Graphite:** Primary text and maximum-contrast marks.
- **Supporting Ink:** Introductory copy that needs more presence than muted metadata.
- **Muted Ink:** Explanations, captions, runtime notes, and known limits.
- **Utility Ground:** The continuous warm-white measurement surface.
- **Paper / White:** Instrument interiors, the mobile navigation field, and inverse actions.
- **Utility Mist:** Selection, inline limit notes, and quiet control feedback.
- **Rule / Strong Rule:** Row registration and major boundaries.
- **Inverse Muted / Code Text / Code Muted:** Copy, code, and labels on dark fields.
- **Translucent Rule:** One-pixel separators on carbon fields only.

### Named Rules

**The Near-Monochrome Rule.** Interface controls, type, surfaces, and states remain neutral; the recorded mesh and operating-system video controls may carry their native source color.

**The Focus Color Has One Job Rule.** Amber appears only in the visible keyboard-focus outline.

**The Translucency Is a Rule Rule.** Semi-transparent white is reserved for one-pixel dividers on dark fields; it is never a glass surface, overlay material, or decorative wash.

## Typography

**Display Font:** Archivo Variable (with Arial and sans-serif fallbacks)  
**Body Font:** Archivo Variable (with Arial and sans-serif fallbacks)  
**Label/Mono Font:** Source Code Pro Variable (with monospace fallback)

**Character:** Archivo supplies blunt, compressed statements and practical prose. Source Code Pro marks commands, filenames, values, sequence facts, example numbers, environments, and other information that should read as inspectable evidence.

### Hierarchy

- **Display:** Heavy, tightly spaced, and vertically compressed. Reserve it for the launch thesis and individual task-guide titles.
- **Headline:** Heavy and balanced across one to three lines. Use it for workflow steps, limits, and interior-page headings.
- **Title:** Dense but readable. Use it for the six task-guide titles and compact section titles.
- **Body:** Regular weight with generous line height and practical measures near 52–68 characters.
- **Label:** Small mono text, usually uppercase, for the eyebrow, code labels, example counters, input facts, and fixed ledger keys.

### Named Rules

**The Plain Sentence Rule.** Headlines state the task, result, or limitation in ordinary language; category terms do not become slogans.

**The Mono Means Inspectable Rule.** Monospace type signals code, a filename, value, index, environment, format, timing fact, or interface state, never a decorative technical mood.

## Layout

Pages use a centered shell capped at 1420px. Wide screens use 24px side gutters; screens at 780px and below use 14px. The sticky header is 68px tall, reducing to 64px on narrow screens. Major sections use generous vertical intervals, while evidence within a section is compact and registered by one-pixel rules.

The launch viewport is a two-column grid: direct copy on the left, one video instrument on the right. The grid tightens at 1120px and stacks at 900px. The desktop navigation becomes a square menu control at 1060px. At 900px, the quickstart, personal-data field, manifest, codec, and closing action also become one column; the folder-to-sequence instrument becomes a vertical flow. At 780px, limits and inspection evidence stack, the video well takes its source aspect ratio, task-guide structures become linear, and section gutters narrow. At 500px, file outputs and sequence facts become single-column records where needed.

Every layout must stay within the viewport. Code remains at its natural width inside a keyboard-focusable horizontal scroll region; the page itself does not scroll sideways. Media reserves its final dimensions before loading, uses `object-fit: contain`, and is never cropped to satisfy a composition.

The homepage reading order is fixed: launch proof, source setup and licensed sample, personal data, folder-to-sequence contract, first-package limits, inspection, manifest save, encode/decode, six task guides, and the closing source action. Interior task guides use the fixed order problem, run it, expected output, environment, runtime, known limits, and next step.

## Elevation & Depth

The system uses no box shadows, backdrop blur, glass, gradients, or simulated elevation. Depth comes from whole-surface changes between warm ground, paper, iron, carbon, and the literal depth in the real viewer recording.

### Named Rules

**The Flat by Default Rule.** A surface earns separation through structure, contrast, and a ruled edge, never through a decorative shadow.

## Shapes

The system is square by default. Code blocks, video fields, ledgers, registers, file trees, outputs, limits, and guide structures use straight ruled edges. Primary actions alone use a gently softened 4px corner. The 42px mobile-menu control is a square outline, and icons retain their native geometry.

Repeated content must not become rounded cards. Responsive stacks preserve the same registered edges and reading order as their wide-screen forms.

## Components

### Buttons and Text Links

- **Shape:** Primary and inverse actions are compact 50px rectangles with 4px corners and 19px horizontal padding.
- **Primary:** Utility Iron with white text; use for “See the source preview.”
- **Inverse:** White with Carbon text; use for the same source action in the closing Iron field.
- **Secondary:** Underlined text with a five-pixel underline offset; use for “Watch the example,” sample downloads, and supporting source links.
- **Hover / Focus:** Buttons darken or lift by 2px over 180ms. Links shift within the neutral palette. Keyboard focus always uses the 3px amber outline with a 3px offset. Reduced-motion preference collapses authored transitions.

### Navigation

The sticky translucent Ground header contains Quickstart, Examples, Integrations, API, and GitHub; the wordmark returns home. Desktop links receive a 2px Iron underline on hover or active state. At 1060px they become a 42px square menu control and a full-width ruled Paper menu. The menu reveals with a clipped 260ms motion and respects reduced-motion preference.

### Launch Copy and Native Video Stage

The first viewport uses this text without paraphrase:

- Eyebrow: “Open source Python tools for 3D data over time”
- Heading: “Mesh sequences, without another one-off script.”
- Description: “Open a folder of OBJ or PLY frames as one Python sequence. Inspect it, preserve its timing, compress it, decode it, and play it.”
- Primary action: “See the source preview”
- Secondary action: “Watch the example”
- Availability note: “Source preview only. The PyPI package is not published while the release ledger remains blocked.”

Beside it, render one ordinary HTML video with native controls, no autoplay, inline playback, metadata preload, a real poster, and WebM plus MP4 sources. Keep the complete 560:620 source visible with `object-fit: contain` inside a Media Carbon field. The fixed ledger has four facts: Input / 10 OBJ frames; Playback / 10 fps; Controls / Play, pause, scrub, orbit; Recording / 1 second. A caption identifies the source-checkout basketball example and distinguishes browser playback controls from the recorded viewer timeline.

### Code Blocks

Code blocks are square Carbon instruments with a ruled label bar and Code Text in Source Code Pro. The label identifies the exact artifact or environment, such as “macOS or Linux setup,” “Tested program,” or “Actual output.” The copy control sits in the bar, swaps to “Copied” for 1800ms, and announces the result through a polite live region.

The `pre` region is keyboard focusable and scrolls horizontally without wrapping or widening the page. Preserve whitespace, tabular numerals, command continuity, and tested line breaks. Never truncate setup commands, personal paths, outputs, or API signatures to fit a card.

### Folder-to-Sequence Instrument

The folder contract is a three-part ruled instrument: numbered frame tree, `open_sequence("my_frames/", fps=30)` call, and the resulting Sequence facts. It must communicate numeric ordering, lazy access, 30 fps timing, and triangle-mesh geometry without decorative illustration. Below 900px the arrow turns downward and the same information stacks in source-to-result order.

### Limits

Limits are part of the workflow, not a detached maturity surface. The first-API panel pairs supported finite triangle-mesh work with a directly adjacent “Not all in the first package” statement. Local caveats remain next to manifests, codecs, setup, runtime, and expected output. Limit fields may use Paper, Mist, or a ruled row; they do not use warning colors or promotional framing.

### Task Guides

The homepage and Examples route expose exactly six task guides as numbered ruled rows, never feature cards. Each guide carries one problem, one tested program or command, one expected result, its required environment, runtime behavior, known limits, and one next step. Every guide links to the same downloadable site-owned MIT-licensed sample and explains where to unzip it in the source checkout.

On wide screens, the guide page uses aligned columns for example counter, title, problem, runnable code, evidence, and next step. At 900px the run and output sections become one column; at 780px the hero and next step become linear; at 500px evidence definition rows stack. The mobile sequence remains: back link, example count, title, problem, run it, licensed input, tested program, expected output, environment, runtime, known limits, next step.

### Accessibility Contract

Target WCAG 2.2 AA. Preserve the skip link to the main landmark, semantic heading order, labeled desktop and mobile navigation, visible 3px focus treatment, and descriptive control names. Decorative icons are hidden from assistive technology. The video has an accessible name, native controls, a factual caption, and meaningful surrounding text when media is unavailable. Copy confirmation uses `aria-live="polite"`; code regions accept keyboard focus and horizontal scrolling. Authored smooth scrolling, hover motion, and the mobile-menu transition reduce to effectively zero when the user prefers reduced motion.

### Analytics Event Contract

Analytics remains a provider-neutral browser event layer. `track()` dispatches `open4d:analytics` with an event name in `detail.event`; components never send paths, mesh content, filenames, clipboard text, or other personal data. Preserve these implemented event names and triggers:

- `quickstart_page_viewed`: homepage mount.
- `install_command_copied`: source-setup copy action.
- `demo_started`: native video play.
- `demo_completed`: native video ended.
- `starter_data_downloaded`: licensed-sample download from the homepage, Examples route, or a task guide.
- `own_data_guide_opened`: the personal-data PLY guide opens.
- `integration_page_opened`: Integrations route mount.
- `github_clicked`: the global GitHub link or homepage source-preview action.

Do not infer an analytics provider, add automatic media tracking beyond these lifecycle events, or attach content payloads without a separate product decision.

## Do's and Don'ts

### Do:

- **Do** keep “See the source preview” primary until an approved package release changes the action.
- **Do** show the exact launch thesis beside one uncropped native video and its fixed four-fact ledger.
- **Do** move from licensed sample to personal data before expanding into inspect, save, encode, decode, and the six job guides.
- **Do** keep every limit beside the command, result, runtime, or capability it qualifies.
- **Do** make code keyboard-scrollable, video user-controlled, focus obvious, copy feedback announced, and all meaning available as text.
- **Do** retain the skip link, semantic headings, labeled navigation, hidden decorative icons, reduced-motion support, and a layout that works from 320px upward.
- **Do** preserve the provider-neutral analytics event names and collect no source path or mesh content.

### Don't:

- **Don't** reorganize the homepage around repository breadth, project maturity, or a catalogue of research areas.
- **Don't** claim a published package, universal 4D format, broad representation support, or production readiness.
- **Don't** autoplay, crop, replace, or custom-skin the normal HTML video player.
- **Don't** truncate, wrap into unreadability, or visually fake runnable code and actual output.
- **Don't** add gradients, glow, glass, floating decoration, shadows, generic 3D art, or a saturated brand accent.
- **Don't** turn examples, limits, integrations, or API groups into a repeated grid of rounded cards.
- **Don't** use em dashes, superlatives, buzzwords, emoji, or aspirational language to hide unfinished work.
