import { ArrowUpRight } from 'lucide-react'
import { BenchmarkChart } from '../components/BenchmarkChart'
import { links, researchStories } from '../data/content'

export function WorkPage() {
  return (
    <main className="interior-page page-shell">
      <header className="interior-hero">
        <h1>Work that can be inspected.</h1>
        <p>
          Three examples of current Open4D research: the result, the evidence,
          and the limitation that should travel with it.
        </p>
      </header>

      <section className="work-detail work-detail--benchmark" id="vdmc">
        <div>
          <h2>{researchStories[0].title}</h2>
          <p>{researchStories[0].summary}</p>
          <p className="limitation">{researchStories[0].limitation}</p>
          <a href={links.vdmcPullRequest} target="_blank" rel="noreferrer">
            Open pull request 31 <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <BenchmarkChart />
      </section>

      <section className="work-detail" id="tsmc">
        <div className="work-detail__number">24 FPS</div>
        <div>
          <h2>{researchStories[1].title}</h2>
          <p>{researchStories[1].summary}</p>
          <p className="limitation">{researchStories[1].limitation}</p>
          <a href={links.tsmc} target="_blank" rel="noreferrer">
            Watch the project demo <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="work-detail" id="tvmc">
        <div className="repro-list" aria-label="Reproducibility requirements">
          <span>Input</span>
          <span>Environment</span>
          <span>Commands</span>
          <span>Saved state</span>
          <span>Output</span>
          <span>Measurement</span>
        </div>
        <div>
          <h2>{researchStories[2].title}</h2>
          <p>{researchStories[2].summary}</p>
          <p className="limitation">{researchStories[2].limitation}</p>
          <a href={links.tvmcPaper} target="_blank" rel="noreferrer">
            Read the paper <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  )
}
