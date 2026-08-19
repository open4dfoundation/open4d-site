import { AnimatePresence, motion } from 'motion/react'
import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data/content'

const navItems = [
  { label: 'Repository map', href: '/#repository-map' },
  { label: 'Research', to: '/work' },
  { label: 'Status', to: '/status' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" to="/" aria-label="Open4D home">
          Open<span>4D</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.to ? (
              <NavLink key={item.label} to={item.to}>
                {item.label}
              </NavLink>
            ) : (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ),
          )}
          <a href={links.handbook} target="_blank" rel="noreferrer">
            Handbook
          </a>
          <a
            className="github-link"
            href={links.repository}
            target="_blank"
            rel="noreferrer"
          >
            <Github aria-hidden="true" size={17} />
            GitHub
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
            {navItems.map((item) =>
              item.to ? (
                <NavLink key={item.label} to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ) : (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ),
            )}
            <a href={links.handbook} target="_blank" rel="noreferrer">
              Handbook
            </a>
            <a href={links.repository} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
