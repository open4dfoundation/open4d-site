import { ArrowUpRight } from 'lucide-react'
import { availableNow, beingBuilt, links } from '../data/content'

const statusDetails = [
  {
    area: 'Core model',
    state: 'Verified partial',
    evidence: 'NumPy geometry, frames, providers, and finite sequences are present and exercised by the shared tests.',
    next: 'Complete lifecycle, topology, time, and failure coverage before stabilizing the interface.',
  },
  {
    area: 'Loading and viewing',
    state: 'Verified partial',
    evidence: 'Examples open mesh folders and USD files, report sequence information, and provide synchronized playback.',
    next: 'Move the supported behavior behind a public API with full format and cleanup tests.',
  },
  {
    area: 'Comparison',
    state: 'Verified partial',
    evidence: 'The example calculates bidirectional vertex distances and renders aligned source and decoded sequences.',
    next: 'Define versioned metrics, strict sequence-length behavior, and pooled sequence summaries.',
  },
  {
    area: 'Research codecs',
    state: 'Working isolated',
    evidence: 'Useful codec-specific research pipelines exist with their own environments and evaluation code.',
    next: 'Create self-contained saved artifacts and adapters to the shared sequence and metric contracts.',
  },
  {
    area: 'Packaging',
    state: 'Release blocked',
    evidence: 'The lightweight package can be built, but provenance and third-party redistribution review is incomplete.',
    next: 'Finish the package allowlist, license ledger, wheel-content test, and supported CI matrix.',
  },
]

export function StatusPage() {
  return (
    <main className="interior-page page-shell">
      <header className="interior-hero interior-hero--status">
        <h1>Current project status.</h1>
        <p>
          This summary follows the repository audit recorded on 13 August 2026.
          For this audit, complete means a reproducible setup, licensed sample,
          passing tests, documented output, and a supported Open4D interface.
        </p>
      </header>

      <section className="status-overview">
        <div>
          <h2>Available now</h2>
          <ul>{availableNow.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h2>Still being built</h2>
          <ul>{beingBuilt.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="status-register" aria-labelledby="status-register-heading">
        <h2 id="status-register-heading">Status by area</h2>
        <div className="status-table" role="table">
          <div className="status-table__header" role="row">
            <span role="columnheader">Area</span>
            <span role="columnheader">State</span>
            <span role="columnheader">Evidence</span>
            <span role="columnheader">Next work</span>
          </div>
          {statusDetails.map((item) => (
            <div className="status-table__row" role="row" key={item.area}>
              <strong role="cell">{item.area}</strong>
              <span role="cell" className="status-label">{item.state}</span>
              <p role="cell">{item.evidence}</p>
              <p role="cell">{item.next}</p>
            </div>
          ))}
        </div>
      </section>

      <a className="button button--primary" href={links.handbook} target="_blank" rel="noreferrer">
        Read the complete handbook
        <ArrowUpRight aria-hidden="true" />
      </a>
    </main>
  )
}
