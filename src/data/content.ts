export const links = {
  repository: 'https://github.com/open4dfoundation/Open4D',
  discussions: 'https://github.com/open4dfoundation/Open4D/discussions',
  handbook:
    'https://github.com/open4dfoundation/Open4D/tree/main/docs/handbook/v0.2-dev',
  vdmcPullRequest: 'https://github.com/open4dfoundation/Open4D/pull/31',
  tsmc: 'https://frozzzen3.github.io/TSMC/',
  tvmcPaper: 'https://sinrg.org/papers/mmsys-2025-paper.pdf',
}

export const researchStories = [
  {
    id: 'vdmc',
    title: 'A decoder change that kept every output file identical',
    summary:
      'In one ten-frame V-DMC test, parallel frame work reduced wall time from 1.978 seconds to 0.704 seconds. All 20 checks matched and 30 generated files were byte-for-byte identical.',
    limitation:
      'Peak memory rose from about 144 MB to 372 MB. This is one documented test, not a general codec claim.',
    href: links.vdmcPullRequest,
    linkLabel: 'Read the test record',
  },
  {
    id: 'tsmc',
    title: 'A changing scene mesh decoding on Meta Quest 3',
    summary:
      'TSMC separates static and moving regions, then compresses tracked motion. The project reports real-time decoding at 24 FPS on Meta Quest 3 and appears at SIGGRAPH 2026.',
    limitation:
      'TSMC remains an independent research pipeline inside the wider repository; it is not yet a complete shared Open4D workflow.',
    href: links.tsmc,
    linkLabel: 'Watch the TSMC demo',
  },
  {
    id: 'tvmc',
    title: 'What another researcher needs to reproduce a codec result',
    summary:
      'TVMC received the ACM MMSys 2025 Best Reproducible Paper Award. Its practical lesson is that a result needs exact inputs, commands, saved decoder state, outputs, and measurement conditions.',
    limitation:
      'Its current research workflow still has toolchain, redistribution, and independent-decoding work to resolve in Open4D.',
    href: links.tvmcPaper,
    linkLabel: 'Read the TVMC paper',
  },
]

export const repositoryAreas = [
  {
    task: 'Represent time',
    scope: 'Shared tools',
    detail: 'NumPy-backed geometry, frames, providers, and finite sequences.',
    evidence: 'Core model and tests',
  },
  {
    task: 'Load and inspect',
    scope: 'Shared examples',
    detail: 'OBJ or PLY frame folders, optional OpenUSD, playback, and frame information.',
    evidence: 'Viewer example',
  },
  {
    task: 'Compare results',
    scope: 'Shared example',
    detail: 'Aligned source and decoded sequences with vertex-distance summaries.',
    evidence: 'Comparison renderer',
  },
  {
    task: 'Compress geometry',
    scope: 'Research projects',
    detail: 'N4MC, QNDF, QNDF-INT8, TVMC, TSMC, Draco, KLT, and MPEG V-DMC work.',
    evidence: 'Independent pipelines',
  },
  {
    task: 'Reconstruct scenes',
    scope: 'Research project',
    detail: 'Synchronized RGB-D capture, transport, point clouds, and TSDF fusion.',
    evidence: 'Hardware workflow',
  },
  {
    task: 'Connect other tools',
    scope: 'Integrations',
    detail: 'Open3D conversion, OpenUSD examples, and specialized Unity/XR playback.',
    evidence: 'Adapters and examples',
  },
]

export const availableNow = [
  'NumPy-backed temporal geometry objects',
  'Mesh-sequence loading examples',
  'Sequence playback and frame inspection',
  'Reference-versus-decoded comparison',
  'An Open3D frame adapter',
  'Independent codec and reconstruction research',
]

export const beingBuilt = [
  'Stable shared I/O API',
  'Common versioned metrics API',
  'One complete encode-to-playback workflow',
  'Self-contained decoder artifacts',
  'Release-safe packaging and provenance',
  'Small licensed examples for clean checkout tests',
]
