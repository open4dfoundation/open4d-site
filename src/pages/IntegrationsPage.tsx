import { ArrowUpRight } from 'lucide-react'
import { useEffect } from 'react'
import { links } from '../data/content'
import { track } from '../lib/analytics'

const integrations = [
  ['Trimesh', 'Adds GLB, glTF, OFF, and STL mesh reading and writing through the tools extra.', 'python -m pip install -e ".[tools]"'],
  ['Open3D', 'Converts Open4D frames to Open3D geometry. Open3D currently limits this extra to Python 3.12 or older.', 'python -m pip install -e ".[open3d]"'],
  ['OpenUSD example', 'The example viewer can read and pack time-sampled USD. It is not yet part of the first public sequence I/O contract.', 'python -m pip install -e ".[usd]"'],
  ['Research codecs', 'KLT, N4MC, QNDF, QNDF-INT8, V-DMC, and other research implementations keep separate dependencies and setup.', 'Use a source checkout'],
]

export function IntegrationsPage() {
  useEffect(() => track('integration_page_opened'), [])

  return (
    <main className="interior-page page-shell">
      <header className="interior-hero">
        <h1>Optional formats and tools.</h1>
        <p>The base package stays NumPy-only. Install another dependency only for the format, viewer, or adapter you need.</p>
      </header>
      <section className="integration-register" aria-label="Open4D integrations">
        {integrations.map(([name, detail, setup]) => (
          <article key={name}><h2>{name}</h2><p>{detail}</p><code>{setup}</code></article>
        ))}
      </section>
      <a className="button button--primary" href={links.repository} target="_blank" rel="noreferrer">
        Check source setup <ArrowUpRight aria-hidden="true" />
      </a>
    </main>
  )
}
