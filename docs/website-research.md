# Website research and redesign decisions

Recorded 19 August 2026.

## What was researched

The redesign was checked against the Open4D campaign material, repository and
handbook, the current website, and established documentation and open-source
project sites. External references included:

- [Open Source Guides: Finding Users](https://opensource.guide/finding-users/)
- [GOV.UK Design Principles](https://www.gov.uk/guidance/government-design-principles)
- [GOV.UK: Start by learning user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs)
- [Diataxis](https://diataxis.fr/)
- [web.dev: Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls)
- [Open3D](https://www.open3d.org/), [PyTorch3D](https://pytorch3d.org/),
  [OpenVDB](https://www.openvdb.org/), [Nerfstudio](https://docs.nerf.studio/),
  [Trimesh](https://trimesh.org/), and [Viser](https://viser.studio/main/)

## Findings

1. A research project needs one concrete definition, real output, and an obvious
   path into examples or documentation. Broad ecosystem language is weaker than
   naming the task.
2. Technical visitors scan by the job they need to do. Tutorials, task guides,
   reference, and explanation answer different needs and should not be collapsed
   into one marketing narrative.
3. Maturity notes work best when they are short and local. Repeating everything
   that is unfinished makes the limitation the subject of the page.
4. Media must reserve its dimensions before loading. Replacing differently sized
   content or animating width and height creates avoidable layout movement.
5. Motion should explain change. A static comparison frame is clearer than a
   video when the evidence is spatial error at one aligned frame.
6. Open4D is broader than V-DMC. The homepage must show shared tools, compression,
   reconstruction, and integrations before highlighting individual research records.
7. A two-bar chart added visual complexity without improving this benchmark. A
   table communicates the before and after values, units, and tradeoff more precisely.

## Structural directions considered

- A task routing board from capture through playback
- A repository manifest organized by package
- A sequence workbench built around the viewer
- A research proceedings index
- A technical field guide
- A direct working reference
- A chronological lab notebook

The direct working reference was selected. It supports concise status language
and lets every research area appear at the same level without turning the
homepage into a feature grid. A release/date strip was tested and then removed
because it described the document rather than helping visitors understand Open4D.

## Decisions implemented

- Put the complete one-second viewer recording in a fixed viewport with native
  video controls. The page does not swap still images, crop the recording, or
  animate the media container.
- Removed the comparison tabs and video. One stable still shows the aligned
  output, while the error scale and measurement explanation are native page text.
- Added a repository map organized by user task and implementation scope.
- Demoted V-DMC to one row in a research register alongside TSMC and TVMC.
- Replaced the benchmark bars with a plain measurement table on the research page.
- Reduced maturity messaging to one start-here note and one compact current-scope row.
- Changed the closing request from a generic feedback prompt to the campaign's
  specific workflow question: which script still holds the workflow together?

## Success checks

- A first-time visitor can define Open4D from the first heading and paragraph.
- Shared tools and independent research are visually distinct.
- Video playback changes neither stage dimensions nor surrounding layout.
- No tab panel or chart can introduce a height jump.
- The page has no horizontal overflow at desktop or mobile test widths.
- Main actions, video controls, navigation, tables, and status remain keyboard and
  screen-reader accessible.
