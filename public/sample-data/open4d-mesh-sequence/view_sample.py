from pathlib import Path

from open4d.io import open_sequence
from open4d.visualization import visualize

folder = Path(__file__).parent / "obj"
with open_sequence(folder, fps=30) as sequence:
    visualize(sequence, title="Open4D website sample")
