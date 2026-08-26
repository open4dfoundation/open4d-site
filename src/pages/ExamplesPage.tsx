import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { links, taskGuides } from '../data/content'
import { track } from '../lib/analytics'

export function ExamplesPage() {
  return (
    <main className="interior-page page-shell">
      <header className="interior-hero">
        <h1>Examples for frame folders.</h1>
        <div>
          <p>Choose the file operation you need. Every guide uses the same small, site-owned triangle-mesh sequence.</p>
          <a className="text-link" href={links.sample} download onClick={() => track('starter_data_downloaded')}><Download aria-hidden="true" /> Download the sample</a>
        </div>
      </header>
      <div className="guide-index">
        {taskGuides.map((guide, index) => (
          <Link to={`/examples/${guide.slug}`} key={guide.slug}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h2>{guide.title}</h2><p>{guide.problem}</p></div>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </div>
    </main>
  )
}
