import { ArrowUpRight } from 'lucide-react'
import { CodeBlock } from '../components/CodeBlock'
import { links } from '../data/content'

const apiGroups = [
  ['open4d.io', 'inspect_sequence, open_sequence, write_sequence', 'Local mesh files and finite frame directories.'],
  ['open4d.codec', 'available_codecs, encode_sequence, decode_sequence', 'Built-in reference storage and installed adapters.'],
  ['open4d.visualization', 'visualize, render_gif', 'Interactive Qt playback and GIF rendering.'],
  ['open4d.core', 'TriangleMesh, Frame, Sequence, TopologyMode', 'The finite lazy triangle-mesh sequence model.'],
]

export function ApiPage() {
  return (
    <main className="interior-page page-shell">
      <header className="interior-hero">
        <h1>The first Python API.</h1>
        <p>This preview covers finite triangle-mesh sequences. It is source-checkout software until the release ledger permits publication.</p>
      </header>
      <section className="api-signature">
        <h2>Open a folder in one call.</h2>
        <CodeBlock code={'open_sequence(source, *, format=None, fps=None, options=None) -> Sequence'} label="Signature" language="text" />
      </section>
      <section className="api-register" aria-label="Public API groups">
        {apiGroups.map(([module, names, purpose]) => (
          <article key={module}><h2>{module}</h2><code>{names}</code><p>{purpose}</p></article>
        ))}
      </section>
      <a className="button button--primary" href={links.apiPlan} target="_blank" rel="noreferrer">
        Read the API plan <ArrowUpRight aria-hidden="true" />
      </a>
    </main>
  )
}
