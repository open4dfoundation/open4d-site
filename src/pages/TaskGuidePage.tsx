import { ArrowLeft, ArrowRight, Download } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { CodeBlock } from '../components/CodeBlock'
import { links, taskGuides } from '../data/content'
import { track } from '../lib/analytics'

export function TaskGuidePage() {
  const { slug } = useParams()
  useEffect(() => {
    if (slug === 'load-ply-sequence') track('own_data_guide_opened')
  }, [slug])

  const index = taskGuides.findIndex((guide) => guide.slug === slug)
  if (index < 0) return <Navigate to="/examples" replace />
  const guide = taskGuides[index]
  const next = taskGuides[(index + 1) % taskGuides.length]

  return (
    <main className="guide-page page-shell">
      <Link className="back-link" to="/examples"><ArrowLeft aria-hidden="true" /> All examples</Link>
      <header className="guide-hero">
        <p>Example {String(index + 1).padStart(2, '0')} of {String(taskGuides.length).padStart(2, '0')}</p>
        <h1>{guide.title}</h1>
        <div><strong>Problem</strong><p>{guide.problem}</p></div>
      </header>
      <section className="guide-run" aria-labelledby="guide-run-heading">
        <div>
          <h2 id="guide-run-heading">Run it</h2>
          <a className="text-link" href={links.sample} download onClick={() => track('starter_data_downloaded')}><Download aria-hidden="true" /> MIT-licensed input</a>
          <p className="guide-run__note">Unzip the download in the root of your Open4D source checkout, then run the program there.</p>
        </div>
        <CodeBlock code={guide.code} label="Tested program" language={guide.code.startsWith('python ') ? 'shell' : 'python'} />
      </section>
      <section className="guide-output" aria-labelledby="guide-output-heading">
        <div><h2 id="guide-output-heading">Expected output</h2><p>{guide.output}</p></div>
        <dl>
          <div><dt>Environment</dt><dd>{guide.environment}</dd></div>
          <div><dt>Runtime</dt><dd>{guide.runtime}</dd></div>
          <div><dt>Known limits</dt><dd>{guide.limitations}</dd></div>
        </dl>
      </section>
      <aside className="next-guide">
        <span>Next step</span>
        <p>{guide.next}</p>
        <Link to={`/examples/${next.slug}`}>{next.title}<ArrowRight aria-hidden="true" /></Link>
      </aside>
    </main>
  )
}
