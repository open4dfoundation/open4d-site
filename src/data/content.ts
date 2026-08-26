export const links = {
  repository: 'https://github.com/open4dfoundation/Open4D',
  sourcePreview: 'https://github.com/open4dfoundation/Open4D#sequence-viewer-details',
  handbook: 'https://github.com/open4dfoundation/Open4D/tree/main/docs/handbook/v0.2-dev',
  apiPlan: 'https://github.com/open4dfoundation/Open4D/blob/main/docs/python-api-plan.md',
  researchMap: 'https://github.com/open4dfoundation/Open4D/blob/main/docs/handbook/v0.2-dev/repository-map.md',
  releaseLedger: 'https://github.com/open4dfoundation/Open4D/blob/main/THIRD_PARTY.md',
  sample: '/sample-data/open4d-mesh-sequence.zip',
}

export const sourceSetup = `git clone https://github.com/open4dfoundation/Open4D.git
cd Open4D
python -m venv .venv
source .venv/bin/activate
python -m pip install -e ".[player]"`

export const ownDataCode = `from open4d.io import open_sequence

with open_sequence("my_frames/", fps=30) as sequence:
    print(len(sequence), sequence.duration, sequence.topology)`

export const inspectCode = `from open4d.io import inspect_sequence

info = inspect_sequence("my_frames/")
print("frames  ", info.frame_count)
print("format  ", info.format)
print("fps     ", info.fps)
print("timing  ", info.timing_source)
print("topology", info.topology.value)`

export const inspectOutput = `frames   10
format   ply
fps      30.0
timing   default
topology unknown`

export const manifestCode = `from open4d.io import open_sequence, write_sequence

with open_sequence("my_frames/", fps=30) as sequence:
    write_sequence(sequence, "saved_frames/", format="ply")`

export const codecCode = `from open4d.codec import decode_sequence, encode_sequence

artifact = encode_sequence(
    "my_frames/", "sequence.o4d", codec="lzma", fps=30
)
with decode_sequence(artifact) as decoded:
    print(len(decoded), decoded.duration, decoded.topology)`

export type TaskGuide = {
  slug: string
  title: string
  problem: string
  code: string
  output: string
  environment: string
  runtime: string
  limitations: string
  next: string
}

export const taskGuides: TaskGuide[] = [
  {
    slug: 'view-obj-animation',
    title: 'View a folder of OBJ files as an animation in Python',
    problem: 'You have one OBJ triangle mesh per frame and need to play the folder in numeric filename order.',
    code: `from open4d.io import open_sequence
from open4d.visualization import visualize

with open_sequence("open4d-mesh-sequence/obj", fps=30) as sequence:
    visualize(sequence)`,
    output: 'A Qt window opens with ten frames, a play and pause control, a scrubber, orbit controls, and frame information.',
    environment: 'Python 3.10 through 3.13, an Open4D source checkout, the player extra, and a graphical OpenGL session.',
    runtime: 'The current viewer decodes the selected frames at startup, then plays them at 30 frames per second.',
    limitations: 'The public API currently handles finite triangle-mesh sequences. Folder inputs do not declare topology unless a manifest is present.',
    next: 'Inspect the folder first if you need to verify timing and format without decoding geometry.',
  },
  {
    slug: 'load-ply-sequence',
    title: 'Load a folder of PLY meshes as one sequence',
    problem: 'You need one lazy Python object for a numbered folder of PLY triangle meshes.',
    code: ownDataCode.replace('"my_frames/"', '"open4d-mesh-sequence/ply"'),
    output: '10 0.3 TopologyMode.UNKNOWN',
    environment: 'Python 3.10 through 3.13 and NumPy. Built-in PLY reading needs no optional mesh dependency.',
    runtime: 'The directory is listed when opened. A mesh file is decoded only when its frame is requested.',
    limitations: 'Unusual PLY variants may require the separately installed Trimesh tools extra.',
    next: 'Read the first frame geometry or pass the sequence to the viewer.',
  },
  {
    slug: 'save-sequence-timing',
    title: 'Keep frame timing when saving a mesh sequence',
    problem: 'A folder of mesh files alone does not record timestamps, frame identity, metadata, or topology declarations.',
    code: manifestCode.replace('"my_frames/"', '"open4d-mesh-sequence/ply"'),
    output: `saved_frames/
├── frame_000000.ply
├── frame_000001.ply
├── ...
└── open4d.sequence.json`,
    environment: 'Python 3.10 through 3.13 and NumPy. OBJ and PLY writing are built in.',
    runtime: 'Frames are written to a temporary directory and moved into place only after the full export succeeds.',
    limitations: 'A single mesh file cannot preserve sequence timing. Multi-frame output must be a directory.',
    next: 'Open the saved directory again and confirm that inspection reports manifest timing.',
  },
  {
    slug: 'compress-decode-sequence',
    title: 'Compress and decode a mesh sequence in Python',
    problem: 'You want one encode and decode call without coupling your program to a storage implementation.',
    code: codecCode.replace('"my_frames/"', '"open4d-mesh-sequence/ply"'),
    output: '10 0.3 TopologyMode.UNKNOWN',
    environment: 'Python 3.10 through 3.13 and NumPy for the five built-in reference storage choices.',
    runtime: 'Raw, DEFLATE, bzip2, LZMA, and RLE run in process and round-trip supported mesh arrays losslessly.',
    limitations: 'These are reference storage choices, not new geometry-compression research. Research and V-DMC adapters have separate setup.',
    next: 'Use available_codecs() to inspect the adapters installed in the current environment.',
  },
  {
    slug: 'inspect-without-decoding',
    title: 'Inspect a mesh sequence without loading every frame',
    problem: 'You need frame count, format, timing source, and declared topology before paying to decode geometry.',
    code: inspectCode.replace('"my_frames/"', '"open4d-mesh-sequence/ply"'),
    output: inspectOutput,
    environment: 'Python 3.10 through 3.13 and NumPy. No viewer or graphical session is required.',
    runtime: 'Inspection reads the directory listing and manifest metadata, but does not parse mesh vertices or faces.',
    limitations: 'A plain frame folder has no topology declaration, so the result is unknown until a manifest supplies one.',
    next: 'Open the sequence only after its reported format and timing match what you expect.',
  },
  {
    slug: 'compare-sequences',
    title: 'Compare a reference and decoded mesh sequence',
    problem: 'You need a zero-error baseline before replacing the second input with a decoded mesh sequence.',
    code: `python examples/visualization/compare_sequences.py \\
  open4d-mesh-sequence/ply open4d-mesh-sequence/ply \\
  --info --csv error.csv`,
    output: `point-to-point error, 10 frames
sequence symmetric RMS : 0
sequence Hausdorff     : 0
mean symmetric PSNR    : inf dB
worst frame            : 0`,
    environment: 'An Open4D source checkout with the player extra. The information report runs without a display.',
    runtime: 'The baseline passes the same licensed PLY folder twice. The command measures nearest-vertex distance in both directions for each frame.',
    limitations: 'The shared figures are vertex based, not area weighted. They do not replace a codec publication metric.',
    next: 'Replace the second folder with your decoded output, or remove --info to open the synchronized comparison viewer.',
  },
]

export const referenceCodecs = [
  ['raw', 'No byte compression'],
  ['deflate', 'DEFLATE reference storage'],
  ['bzip2', 'bzip2 reference storage'],
  ['lzma', 'LZMA reference storage'],
  ['rle', 'Byte-level run-length storage'],
]
