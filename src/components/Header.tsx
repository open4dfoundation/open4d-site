import { AnimatePresence, motion } from 'motion/react'
import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data/content'
import { track } from '../lib/analytics'

const navItems = [
  { label: 'Quickstart', to: '/#quickstart' },
  { label: 'Examples', to: '/examples' },
  { label: 'Integrations', to: '/integrations' },
  { label: 'API', to: '/api' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" to="/" aria-label="Open4D home">Open<span>4D</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <NavLink key={item.label} to={item.to}>{item.label}</NavLink>)}
          <a className="github-link" href={links.repository} target="_blank" rel="noreferrer" onClick={() => track('github_clicked')}>
            <Github aria-hidden="true" size={17} /> GitHub
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} onClick={() => setOpen(false)}>{item.label}</NavLink>
            ))}
            <a href={links.repository} target="_blank" rel="noreferrer" onClick={() => track('github_clicked')}>GitHub</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
