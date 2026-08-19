import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SequenceStage } from '../components/SequenceStage'
import { links, repositoryAreas, researchStories } from '../data/content'

export function HomePage() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero__copy">
          <h1>Tools for 3D data that changes over time.</h1>
          <div className="hero__intro">
            <p>
              Open4D brings sequence loading, viewing, comparison, compression
              research, reconstruction, and integrations into one open repository.
            </p>
            <p className="scope-note">
              Start with the shared viewer examples. The larger research projects
              keep their own setup and status.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href={links.discussions} target="_blank" rel="noreferrer">
                Describe your workflow
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href={links.repository} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" />
                Browse the repository
              </a>
            </div>
          </div>
        </div>

        <SequenceStage />
      </section>

      <section className="repository-section page-shell" id="repository-map">
        <div className="section-heading section-heading--split">
          <h2>Find the part that matches your job.</h2>
          <p>
            The repository is wider than any one codec. This map separates the
            shared tools from research pipelines and tool-specific integrations.
          </p>
        </div>

        <div className="repository-table" role="table" aria-label="Open4D repository areas">
          <div className="repository-table__header" role="row">
            <span role="columnheader">Task</span>
            <span role="columnheader">Where it lives</span>
            <span role="columnheader">What is there</span>
          </div>
          {repositoryAreas.map((area) => (
            <div className="repository-table__row" role="row" key={area.task}>
              <strong role="cell" data-label="Task">{area.task}</strong>
              <span role="cell" data-label="Where it lives" className="scope-label">{area.scope}</span>
              <p role="cell" data-label="What is there">{area.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="comparison-section">
        <div className="page-shell comparison-section__inner">
          <div className="comparison-layout">
            <div className="comparison-section__copy">
              <h2>Put decoded results beside the source.</h2>
              <p>
                The comparison example uses one camera and one frame position for
                every sequence, then colors decoded vertices by their distance from
                the source. This frame places N4MC, QNDF, TVMC, and TSMC beside the
                same basketball source mesh.
              </p>
              <dl className="comparison-facts">
                <div><dt>View</dt><dd>Reference plus four decoded sequences</dd></div>
                <div><dt>Measure</dt><dd>Bidirectional nearest-vertex distance</dd></div>
                <div><dt>Report</dt><dd>Per-frame RMS, maximum distance, and PSNR</dd></div>
              </dl>
            </div>

            <figure className="comparison-figure">
              <div className="comparison-viewport" role="region" tabIndex={0} aria-label="Scrollable comparison figure">
                <div className="comparison-canvas">
                  <img
                    src="/media/comparison-panels.jpg"
                    alt="Reference basketball mesh beside N4MC, QNDF, TVMC, and TSMC decoded results"
                    width="1400"
                    height="444"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="error-key" aria-label="Error color scale from zero to 1.5 percent">
                    <div aria-hidden="true">
                      <span /><span /><span /><span /><span /><span /><span /><span />
                    </div>
                    <p><span>0.0%</span><span>decoded-to-source distance</span><span>1.5%</span></p>
                  </div>
                </div>
              </div>
              <figcaption>
                Basketball comparison renderer at one aligned frame. Color reports
                decoded-to-source distance as a percentage of the bounding-box diagonal.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="work-section page-shell" id="research">
        <div className="section-heading section-heading--split">
          <h2>Research records, not product claims.</h2>
          <p>
            Each item answers a different question. Results stay beside their test
            conditions, while full methods and setup remain in the linked record.
          </p>
        </div>

        <div className="research-register">
          {researchStories.map((story) => (
            <article className="research-record" key={story.id}>
              <div className="research-record__id">
                <span>{story.id.toUpperCase()}</span>
                <span>{story.id === 'vdmc' ? 'Decoder test' : story.id === 'tsmc' ? 'Scene mesh codec' : 'Reproducibility'}</span>
              </div>
              <div>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
              </div>
              <div className="research-record__note">
                <p>{story.limitation}</p>
                <a href={story.href} target="_blank" rel="noreferrer">
                  {story.linkLabel}<ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="work-section__footer">
          <p>Browse codecs, reconstruction, integrations, and shared tools together.</p>
          <Link className="text-link" to="/work">Open the research index <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="current-scope page-shell">
        <div>
          <h2>Current scope</h2>
          <p>
            Shared geometry objects, viewer examples, comparison code, and an Open3D
            adapter are usable now. Stable public I/O and metrics APIs are next.
          </p>
        </div>
        <Link className="text-link" to="/status">Read status by area <ArrowRight aria-hidden="true" /></Link>
      </section>

      <section className="question-section">
        <div className="page-shell question-section__inner">
          <h2>Which script is holding your 3D workflow together?</h2>
          <div className="question-section__body">
            <p>
              Tell us what data you use, which tools or formats it moves between,
              and the step that still needs custom code. A short description is enough.
            </p>
            <a className="button button--inverse" href={links.discussions} target="_blank" rel="noreferrer">
              Describe your workflow
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
