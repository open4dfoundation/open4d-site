import { ArrowUpRight } from 'lucide-react'
import { BenchmarkChart } from '../components/BenchmarkChart'
import { links, researchStories } from '../data/content'

const otherResearch = [
  ['N4MC', 'Neural TSDF mesh compression', 'Working isolated'],
  ['QNDF', 'Coarse mesh plus an implicit displacement field', 'Working isolated'],
  ['QNDF-INT8', 'Bounded decoder quantization experiment', 'Experiment complete'],
  ['RGB-D', 'Synchronized capture, transport, point clouds, and TSDF fusion', 'Working isolated'],
  ['Open3D', 'Frame conversion and WebRTC viewing experiments', 'Verified partial'],
  ['Unity/XR', 'Specialized TVMC decoding and mesh playback', 'Working isolated'],
]

export function WorkPage() {
  return (
    <main className="interior-page page-shell">
      <header className="interior-hero">
        <h1>Research and implementation notes.</h1>
        <p>
          Results are listed by the question they answer. Each record keeps its
          measurement, scope, and source together; no single project stands in for Open4D.
        </p>
      </header>

      <section className="work-index" aria-label="Selected research records">
        <article className="work-record" id="vdmc">
          <div className="work-record__label"><strong>V-DMC</strong><span>Decoder test</span></div>
          <div>
            <h2>{researchStories[0].title}</h2>
            <p>{researchStories[0].summary}</p>
            <p className="limitation">{researchStories[0].limitation}</p>
            <a href={links.vdmcPullRequest} target="_blank" rel="noreferrer">
              Open pull request 31 <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <BenchmarkChart />
        </article>

        <article className="work-record" id="tsmc">
          <div className="work-record__label"><strong>TSMC</strong><span>Scene mesh codec</span></div>
          <div>
            <h2>{researchStories[1].title}</h2>
            <p>{researchStories[1].summary}</p>
          </div>
          <div className="work-record__aside">
            <p>{researchStories[1].limitation}</p>
            <a href={links.tsmc} target="_blank" rel="noreferrer">
              Watch the project demo <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </article>

        <article className="work-record" id="tvmc">
          <div className="work-record__label"><strong>TVMC</strong><span>Reproducibility</span></div>
          <div>
            <h2>{researchStories[2].title}</h2>
            <p>{researchStories[2].summary}</p>
          </div>
          <div className="work-record__aside">
            <p>{researchStories[2].limitation}</p>
            <a href={links.tvmcPaper} target="_blank" rel="noreferrer">
              Read the paper <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </article>
      </section>

      <section className="other-research" aria-labelledby="other-research-heading">
        <h2 id="other-research-heading">Other areas in the repository</h2>
        <div className="other-research__table" role="list" aria-label="Other Open4D research areas">
          {otherResearch.map(([name, description, state]) => (
            <div role="listitem" key={name}>
              <strong>{name}</strong>
              <p>{description}</p>
              <span className="scope-label">{state}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
