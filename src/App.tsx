import { MotionConfig } from 'motion/react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { links } from './data/content'
import { HomePage } from './pages/HomePage'
import { StatusPage } from './pages/StatusPage'
import { WorkPage } from './pages/WorkPage'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <p>Open4D is open-source research software.</p>
        <nav aria-label="Footer navigation">
          <a href={links.repository} target="_blank" rel="noreferrer">Code</a>
          <a href={links.discussions} target="_blank" rel="noreferrer">Discussions</a>
          <a href={links.handbook} target="_blank" rel="noreferrer">Handbook</a>
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/status" element={<StatusPage />} />
        </Routes>
      </div>
      <Footer />
    </MotionConfig>
  )
}
