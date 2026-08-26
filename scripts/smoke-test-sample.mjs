import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { delimiter, join } from 'node:path'
import { spawnSync } from 'node:child_process'

const source = process.env.OPEN4D_SOURCE
if (!source) {
  throw new Error('Set OPEN4D_SOURCE to a current Open4D source checkout.')
}

const archive = new URL('../public/sample-data/open4d-mesh-sequence.zip', import.meta.url)
const directory = mkdtempSync(join(tmpdir(), 'open4d-site-sample-'))

try {
  const unpack = spawnSync('unzip', ['-q', archive.pathname, '-d', directory], { stdio: 'inherit' })
  if (unpack.status !== 0) process.exit(unpack.status ?? 1)

  const python = `from pathlib import Path
from open4d.io import inspect_sequence, open_sequence

root = Path("open4d-mesh-sequence")
assert (root / "view_sample.py").is_file()
assert (root / "save_sample_gif.py").is_file()
for name in ("obj", "ply"):
    path = root / name
    with open_sequence(path, fps=30) as sequence:
        assert len(sequence) == 10
        assert sequence.duration == 0.3
        assert sequence[4].geometry is not None

info = inspect_sequence(root / "ply")
assert (info.frame_count, info.format, info.fps, info.timing_source, info.topology.value) == (10, "ply", 30.0, "default", "unknown")
print("sample smoke test passed: OBJ and PLY, 10 frames, 0.3 seconds")`

  const environment = {
    ...process.env,
    PYTHONPATH: [source, process.env.PYTHONPATH].filter(Boolean).join(delimiter),
  }
  const smoke = spawnSync('python3', ['-c', python], { cwd: directory, env: environment, stdio: 'inherit' })
  if (smoke.status !== 0) process.exit(smoke.status ?? 1)
} finally {
  rmSync(directory, { recursive: true, force: true })
}
