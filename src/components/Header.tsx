import { Link, NavLink } from 'react-router-dom'
import { SITE } from '../constants/site'
import './Header.css'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/institutions', label: 'Institutions' },
  { to: '/legal', label: 'Legal & Verification' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms' },
] as const

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          <span className="site-header__trust">{SITE.trustName}</span>
        </Link>
        <p className="site-header__statement" aria-label="Official operating relationship">
          {SITE.collegeName} is operated by {SITE.trustName}.
        </p>
        <button
          type="button"
          className="site-header__menu-toggle"
          aria-expanded="false"
          aria-controls="primary-nav"
          onClick={() => {
            const el = document.getElementById('primary-nav')
            const btn = document.querySelector('.site-header__menu-toggle')
            if (!el || !btn) return
            const open = el.classList.toggle('is-open')
            btn.setAttribute('aria-expanded', String(open))
          }}
        >
          Menu
        </button>
        <nav id="primary-nav" className="site-header__nav" aria-label="Primary">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                'site-header__link' + (isActive ? ' is-active' : '')
              }
              onClick={() => {
                document.getElementById('primary-nav')?.classList.remove('is-open')
                document
                  .querySelector('.site-header__menu-toggle')
                  ?.setAttribute('aria-expanded', 'false')
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
