import { ArrowRight, ArrowUpRight, Download, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { CodeBlock } from '../components/CodeBlock'
import { SequenceStage } from '../components/SequenceStage'
import {
  codecCode,
  inspectCode,
  inspectOutput,
  links,
  manifestCode,
  ownDataCode,
  referenceCodecs,
  sourceSetup,
  taskGuides,
} from '../data/content'
import { track } from '../lib/analytics'

export function HomePage() {
  useEffect(() => track('quickstart_page_viewed'), [])

  return (
    <main>
      <section className="launch-hero page-shell">
        <div className="launch-hero__copy">
          <p className="eyebrow">Open source Python tools for 3D data over time</p>
          <h1>Mesh sequences, without another <span className="keep-together">one-off script.</span></h1>
          <p className="launch-hero__description">
            Open a folder of OBJ or PLY frames as one Python sequence. Inspect it,
            preserve its timing, compress it, decode it, and play it.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={links.sourcePreview} target="_blank" rel="noreferrer" onClick={() => track('github_clicked')}>
              See the source preview <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#demo">Watch the example <ArrowRight aria-hidden="true" /></a>
          </div>
          <p className="release-note">
            Source preview only. The PyPI package is not published while the release ledger remains blocked.
          </p>
        </div>
        <SequenceStage />
      </section>

      <section className="quickstart-section page-shell" id="quickstart">
        <div className="section-heading section-heading--split">
          <h2>Run the source preview.</h2>
          <p>
            The lightweight package uses NumPy. The player extra adds the Qt viewer,
            OpenGL rendering, GIF export, and comparison tools.
          </p>
        </div>
        <div className="quickstart-grid">
          <CodeBlock code={sourceSetup} label="macOS or Linux setup" language="shell" copyEvent="install_command_copied" />
          <div className="quickstart-result">
            <h3>Then inspect, view, or save the sample</h3>
            <CodeBlock
              code={'python examples/visualization/visualize_sequence.py open4d-mesh-sequence/obj --info\npython open4d-mesh-sequence/view_sample.py\npython open4d-mesh-sequence/save_sample_gif.py'}
              label="Sample commands"
              language="shell"
            />
            <a className="text-link" href={links.sample} download onClick={() => track('starter_data_downloaded')}>
              <Download aria-hidden="true" /> Download the website sample
            </a>
            <p>Unzip it in the Open4D checkout before running the commands. Windows uses <code>.venv\Scripts\activate</code>. A graphical session is required for the viewer.</p>
          </div>
        </div>
      </section>

      <section className="own-data-section">
        <div className="page-shell own-data-section__inner">
          <div>
            <h2>Use your own data next.</h2>
            <p>
              Numbered filenames are ordered by their last integer. The folder is listed
              immediately, but each mesh is decoded only when its frame is requested.
            </p>
          </div>
          <CodeBlock code={ownDataCode} label="my_sequence.py" />
        </div>
      </section>

      <section className="sequence-contract page-shell">
        <div className="section-heading section-heading--split">
          <h2>A folder becomes one sequence.</h2>
          <p>
            Open4D orders the frames, keeps their source indices and timestamps, and
            decodes a mesh only when it is requested.
          </p>
        </div>
        <div className="contract-flow" aria-label="Folder to lazy Python sequence">
          <div className="file-tree">
            <strong>my_frames/</strong>
            <span>frame_0001.ply</span>
            <span>frame_0002.ply</span>
            <span>frame_0003.ply</span>
            <span>...</span>
            <span>frame_0010.ply</span>
          </div>
          <div className="contract-call">
            <code>open_sequence(&quot;my_frames/&quot;, fps=30)</code>
            <ArrowRight aria-hidden="true" />
          </div>
          <div className="sequence-object">
            <span>Sequence</span>
            <strong>10 frames</strong>
            <dl>
              <div><dt>Access</dt><dd>lazy</dd></div>
              <div><dt>Timing</dt><dd>30 fps</dd></div>
              <div><dt>Geometry</dt><dd>triangle mesh</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="limits-section">
        <div className="page-shell limits-section__inner">
          <div>
            <h2>What the first API handles.</h2>
            <p>
              Finite triangle-mesh sequences. OBJ and PLY are built in. Trimesh adds
              GLB, glTF, OFF, and STL. The base dependency is NumPy.
            </p>
          </div>
          <div className="limits-section__not-yet">
            <h3>Not all in the first package</h3>
            <p>
              Point-cloud, Gaussian, volume, USD-sequence, and live-stream interfaces.
              Research codecs and native V-DMC tools also keep their own setup.
            </p>
            <a href={links.releaseLedger} target="_blank" rel="noreferrer">
              Read the release ledger <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="inspect-section">
        <div className="page-shell inspect-section__inner">
          <div className="inspect-section__copy">
            <h2>Check it before loading everything.</h2>
            <p>
              Read frame count, timing, format, and topology without decoding the whole sequence.
            </p>
          </div>
          <div className="inspect-section__evidence">
            <CodeBlock code={inspectCode} label="inspect.py" />
            <CodeBlock code={inspectOutput} label="Actual output" language="text" />
          </div>
        </div>
      </section>

      <section className="manifest-section page-shell">
        <div className="manifest-section__copy">
          <h2>Save timing with the frames.</h2>
          <p>
            Write OBJ or PLY frames with an Open4D manifest so ordering, timestamps,
            metadata, and topology declarations can be opened again.
          </p>
          <p className="plain-limit">The manifest describes a directory. It is not a universal 4D format.</p>
        </div>
        <div>
          <CodeBlock code={manifestCode} label="save_sequence.py" />
          <div className="manifest-result" aria-label="Files written by write_sequence">
            <span>saved_frames/</span>
            <span>frame_000000.ply</span>
            <span>frame_000001.ply</span>
            <span>open4d.sequence.json</span>
          </div>
        </div>
      </section>

      <section className="codec-section page-shell">
        <div className="section-heading section-heading--split">
          <h2>Encode and decode through one API.</h2>
          <p>
            Use the same Python calls for the built-in reference storage choices and
            for separately installed codec adapters.
          </p>
        </div>
        <div className="codec-layout">
          <CodeBlock code={codecCode} label="round_trip.py" />
          <div className="codec-register" role="list" aria-label="Built-in lossless reference storage choices">
            {referenceCodecs.map(([name, detail]) => (
              <div role="listitem" key={name}><strong>{name}</strong><span>{detail}</span></div>
            ))}
            <p>All five are lossless reference storage choices. They are not presented as geometry-compression research.</p>
          </div>
        </div>
      </section>

      <section className="examples-section page-shell" id="examples">
        <div className="section-heading section-heading--split">
          <h2>Start with the job you have.</h2>
          <p>Each guide gives one program, one expected result, its environment, and its limits.</p>
        </div>
        <div className="example-index">
          {taskGuides.map((guide, index) => (
            <Link to={`/examples/${guide.slug}`} key={guide.slug}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{guide.title}</strong>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="source-close">
        <div className="page-shell source-close__inner">
          <h2>Try one folder before reading the whole repository.</h2>
          <div>
            <p>Clone the source, open the licensed sample, then replace its path with your own OBJ or PLY folder.</p>
            <a className="button button--inverse" href={links.sourcePreview} target="_blank" rel="noreferrer" onClick={() => track('github_clicked')}>
              <Github aria-hidden="true" /> See the source preview
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
