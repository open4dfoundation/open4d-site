from pathlib import Path

from open4d.io import open_sequence
from open4d.visualization import render_gif

folder = Path(__file__).parent
with open_sequence(folder / "obj", fps=30) as sequence:
    output = render_gif(sequence, folder / "open4d-sample.gif")
    print(f"wrote {output}")
