# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React, TypeScript, Vite, Motion, and static media. The result must remain deployable as static files.

## Users

Python developers who already have numbered OBJ or PLY mesh frames and need a reliable way to treat the folder as one timed sequence. They may arrive from GitHub, a technical post, or a research artifact and should not need prior Open4D knowledge.

## Product Purpose

Help a developer complete one useful job: open a folder of OBJ or PLY frames as one finite Python sequence, inspect it, preserve its timing, encode it, decode it, and play it.

## Positioning

Open4D is open-source Python work for 3D data that changes over time. The website is a working reference for the first mesh-sequence API, not a catalogue of every research folder in the repository.

## Operating Context

The visitor has a local directory of numbered mesh files. They want the frame order, timing, metadata, and access pattern handled consistently instead of writing another loader, viewer wrapper, manifest, or codec adapter.

## Capabilities and Constraints

- Python 3.10 through 3.13 with a NumPy-only base.
- Built-in OBJ and PLY reading and writing.
- Optional Trimesh-backed GLB, glTF, OFF, and STL support.
- Finite, lazy triangle-mesh sequences and inspection without geometry decode.
- Directory manifests preserve order, indices, timestamps, metadata, and topology declarations.
- Raw, DEFLATE, bzip2, LZMA, and RLE are lossless reference storage choices.
- Visualization, GIF rendering, comparison, and research codecs have optional or separate setup.
- Point-cloud, Gaussian, volume, USD-sequence, and live-stream interfaces are not all in the first package.
- The PyPI package does not exist and the repository release ledger blocks publication. Show source-checkout commands only.

## Primary Action

“See the source preview” opens the verified repository viewer details. The secondary action moves to the normal video example. After publication, this can change to “Try the sample” and the approved package install command.

## Brand Commitments

- Define the work as “3D data that changes over time” before assuming the term “4D.”
- Use plain verbs: open, inspect, save, encode, decode, compare, and play.
- No buzzwords, superlatives, em dashes, emoji, AI imagery, or broad market lists.
- Use a near-monochrome utility interface with real output, tested code, actual results, and adjacent limitations.

## Evidence on Hand

- The real ten-frame, ten-frames-per-second OBJ viewer recording in `public/media`.
- A site-owned MIT-licensed ten-frame triangle-mesh sample in OBJ and PLY.
- Actual current-source output: `10 0.3 TopologyMode.UNKNOWN` when the sample is opened at 30 frames per second.
- Actual inspection output: 10 PLY frames, 30.0 frames per second, default timing, unknown topology.
- Six task guides with tested commands or short programs and explicit environments, runtimes, limits, and next steps.

## Product Principles

- Show the moving result in the first screen.
- Put the runnable sample before architecture or research breadth.
- Put the visitor's own path immediately after the sample.
- State the blocked release and first-package limits without turning the page into a status report.
- Keep research maps and handbook material in documentation links.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Moving media uses native controls and never autoplays. Code regions are keyboard-scrollable, layouts do not overflow the viewport, and the text remains sufficient when media is unavailable.
