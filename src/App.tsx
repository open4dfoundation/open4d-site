import { MotionConfig } from 'motion/react'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { links } from './data/content'
import { ApiPage } from './pages/ApiPage'
import { ExamplesPage } from './pages/ExamplesPage'
import { HomePage } from './pages/HomePage'
import { IntegrationsPage } from './pages/IntegrationsPage'
import { TaskGuidePage } from './pages/TaskGuidePage'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
      return
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])
  return null
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <p>Open4D is open-source research software. The Python package is not yet published.</p>
        <nav aria-label="Footer navigation">
          <a href={links.handbook} target="_blank" rel="noreferrer">Documentation</a>
          <a href={links.researchMap} target="_blank" rel="noreferrer">Research map</a>
          <a href={links.releaseLedger} target="_blank" rel="noreferrer">Release ledger</a>
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/examples/:slug" element={<TaskGuidePage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </div>
      <Footer />
    </MotionConfig>
  )
}
