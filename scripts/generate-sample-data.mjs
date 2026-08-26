import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
const base = new URL('../public/sample-data/', import.meta.url)
const root = new URL('open4d-mesh-sequence/', base)
const objDirectory = new URL('obj/', root)
const plyDirectory = new URL('ply/', root)

rmSync(root, { recursive: true, force: true })
mkdirSync(objDirectory, { recursive: true })
mkdirSync(plyDirectory, { recursive: true })

const faces = [
  [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1],
  [5, 2, 1], [5, 3, 2], [5, 4, 3], [5, 1, 4],
]

function geometry(frame) {
  const phase = frame * Math.PI * 2 / 10
  const scale = 1 + 0.1 * Math.sin(phase * 2)
  const ring = [0, 1, 2, 3].map((index) => {
    const angle = phase * 0.35 + index * Math.PI / 2
    return [scale * Math.cos(angle), scale * Math.sin(angle), 0]
  })
  return [
    [0.18 * Math.sin(phase), 0, 1.1 + 0.12 * Math.cos(phase)],
    ...ring,
    [-0.12 * Math.sin(phase), 0, -1],
  ]
}

function obj(vertices) {
  return [
    '# Open4D site-owned sample: one animated octahedron frame',
    ...vertices.map((vertex) => `v ${vertex.map((value) => value.toFixed(6)).join(' ')}`),
    ...faces.map((face) => `f ${face.map((index) => index + 1).join(' ')}`),
    '',
  ].join('\n')
}

function ply(vertices) {
  return [
    'ply',
    'format ascii 1.0',
    'comment Open4D site-owned sample: one animated octahedron frame',
    `element vertex ${vertices.length}`,
    'property float x',
    'property float y',
    'property float z',
    `element face ${faces.length}`,
    'property list uchar int vertex_indices',
    'end_header',
    ...vertices.map((vertex) => vertex.map((value) => value.toFixed(6)).join(' ')),
    ...faces.map((face) => `3 ${face.join(' ')}`),
    '',
  ].join('\n')
}

for (let frame = 0; frame < 10; frame += 1) {
  const name = `frame_${String(frame).padStart(6, '0')}`
  const vertices = geometry(frame)
  writeFileSync(new URL(`${name}.obj`, objDirectory), obj(vertices))
  writeFileSync(new URL(`${name}.ply`, plyDirectory), ply(vertices))
}

writeFileSync(new URL('README.txt', root), `Open4D website sample data

This archive contains the same ten-frame synthetic triangle-mesh sequence in OBJ
and ASCII PLY. The shape is an animated octahedron created for the Open4D website.

Open either folder at 30 frames per second. The first frame is numbered 000000.
The sequence is finite and has constant face connectivity.

From an Open4D source checkout with the player extra installed:

    python open4d-mesh-sequence/view_sample.py
    python open4d-mesh-sequence/save_sample_gif.py

The data is licensed under the MIT License in LICENSE.txt.
`)

writeFileSync(new URL('view_sample.py', root), `from pathlib import Path

from open4d.io import open_sequence
from open4d.visualization import visualize

folder = Path(__file__).parent / "obj"
with open_sequence(folder, fps=30) as sequence:
    visualize(sequence, title="Open4D website sample")
`)

writeFileSync(new URL('save_sample_gif.py', root), `from pathlib import Path

from open4d.io import open_sequence
from open4d.visualization import render_gif

folder = Path(__file__).parent
with open_sequence(folder / "obj", fps=30) as sequence:
    output = render_gif(sequence, folder / "open4d-sample.gif")
    print(f"wrote {output}")
`)

writeFileSync(new URL('LICENSE.txt', root), `MIT License

Copyright (c) 2026 Open4D contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`)
