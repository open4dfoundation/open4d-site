import * as Tabs from '@radix-ui/react-tabs'
import { ArrowDown, ArrowUpRight, Github } from 'lucide-react'
import { BenchmarkChart } from '../components/BenchmarkChart'
import { SequenceStage } from '../components/SequenceStage'
import {
  availableNow,
  beingBuilt,
  links,
  researchStories,
} from '../data/content'

export function HomePage() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero__copy">
          <h1>Tools for 3D data that changes over time.</h1>
          <div className="hero__intro">
            <p>
              Open4D is an open-source research project for loading, viewing,
              compressing, and comparing mesh and point-cloud sequences.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href={links.discussions} target="_blank" rel="noreferrer">
                Tell us what breaks
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href={links.repository} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" />
                Browse the code
              </a>
            </div>
          </div>
        </div>

        <SequenceStage />

        <div className="hero__status">
          <span className="status-dot" aria-hidden="true" />
          <p>
            Open4D is early research software. The viewer and several research
            components work today; shared APIs and complete workflows are still
            being built.
          </p>
          <a href="#examples" aria-label="Continue to working examples">
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="task-section page-shell" id="examples">
        <div className="section-heading section-heading--split">
          <h2>One sequence, several jobs.</h2>
          <p>
            The shared examples focus on a narrow path that can be checked:
            open frames, inspect time and topology, play the sequence, then
            compare another result against it.
          </p>
        </div>

        <ol className="task-line">
          <li>
            <strong>Load</strong>
            <span>A folder of OBJ or PLY frames, or a time-sampled USD file.</span>
          </li>
          <li>
            <strong>Inspect</strong>
            <span>Frame count, rate, topology, bounds, and source indices.</span>
          </li>
          <li>
            <strong>Play</strong>
            <span>Orbit, scrub, pause, step, and capture a short recording.</span>
          </li>
          <li>
            <strong>Compare</strong>
            <span>View source and decoded sequences with synchronized controls.</span>
          </li>
        </ol>
      </section>

      <section className="comparison-section">
        <div className="page-shell comparison-section__inner">
          <div className="comparison-section__copy">
            <h2>Compare the result, not just the claim.</h2>
            <p>
              The comparison example reads two sequences through the same
              loader, keeps their cameras and frames aligned, and colors the
              decoded surface by geometric error.
            </p>
          </div>

          <Tabs.Root className="comparison-tabs" defaultValue="playback">
            <Tabs.List className="comparison-tabs__list" aria-label="Comparison details">
              <Tabs.Trigger value="playback">Playback</Tabs.Trigger>
              <Tabs.Trigger value="measurement">What it measures</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="playback" className="comparison-tabs__content">
              <figure className="comparison-media">
                <video controls muted playsInline preload="metadata" poster="/media/comparison-poster.jpg">
                  <source src="/media/open4d-comparison.webm" type="video/webm" />
                  <source src="/media/open4d-comparison.mp4" type="video/mp4" />
                </video>
                <figcaption>
                  Reference and four decoded basketball sequences shown by the
                  repository comparison renderer.
                </figcaption>
              </figure>
            </Tabs.Content>
            <Tabs.Content value="measurement" className="comparison-tabs__content measurement-note">
              <dl>
                <div>
                  <dt>Distance</dt>
                  <dd>Bidirectional nearest-vertex point or plane distance.</dd>
                </div>
                <div>
                  <dt>Summary</dt>
                  <dd>Per-frame RMS, maximum distance, and PSNR.</dd>
                </div>
                <div>
                  <dt>Limit</dt>
                  <dd>
                    Vertex-set measurements are not area-weighted and do not
                    replace a codec's own scientific evaluation.
                  </dd>
                </div>
              </dl>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </section>

      <section className="benchmark-section page-shell">
        <div className="benchmark-section__copy">
          <h2>Faster in one test. More memory in the same test.</h2>
          <p>
            A V-DMC decoder change parallelized independent frame work. In a
            ten-frame HM full-output test, wall time fell from 1.978 seconds to
            0.704 seconds. All 20 checks passed and every generated OBJ, PNG,
            and MTL file was byte-identical.
          </p>
          <p className="limitation">
            Peak memory increased from about 144 MB to 372 MB. These numbers
            describe this test setup only.
          </p>
          <a className="text-link" href={links.vdmcPullRequest} target="_blank" rel="noreferrer">
            Read the test record
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <BenchmarkChart />
      </section>

      <section className="work-section page-shell">
        <div className="section-heading section-heading--split">
          <h2>Recent work, with its limits.</h2>
          <p>
            Each story starts with one result, then records the conditions and
            the part that remains unfinished.
          </p>
        </div>

        <div className="story-list">
          {researchStories.map((story) => (
            <article className="story-row" key={story.id}>
              <div>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
              </div>
              <div className="story-row__limit">
                <strong>Limit</strong>
                <p>{story.limitation}</p>
                <a href={story.href} target="_blank" rel="noreferrer">
                  {story.linkLabel}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="status-section page-shell">
        <div className="section-heading section-heading--split">
          <h2>What works now. What does not.</h2>
          <p>
            Status is part of the result. The detailed handbook records the
            audit evidence and the next smallest useful piece of work.
          </p>
        </div>

        <div className="status-columns">
          <div>
            <h3>Available now</h3>
            <ul>
              {availableNow.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3>Still being built</h3>
            <ul>
              {beingBuilt.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="status-section__footer">
          <p>Repository audit recorded 13 August 2026.</p>
          <a className="text-link" href={links.handbook} target="_blank" rel="noreferrer">
            Read the full project status
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="question-section">
        <div className="page-shell question-section__inner">
          <h2>What is the hardest part of working with 3D data that changes over time?</h2>
          <div className="question-section__body">
            <ol>
              <li>What kind of data do you use?</li>
              <li>Which tools or formats do you move it between?</li>
              <li>Which step needs custom code or breaks most often?</li>
            </ol>
            <div>
              <p>
                A short description is useful. You do not need to share private
                data or code.
              </p>
              <a className="button button--inverse" href={links.discussions} target="_blank" rel="noreferrer">
                Answer on GitHub
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
