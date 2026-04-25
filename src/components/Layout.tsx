import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { TaglineBar } from './TaglineBar'
import { SITE_TITLE } from '../constants/site'

const PAGE_TITLES: { prefix: string; path: string }[] = [
  { path: '/', prefix: 'Home' },
  { path: '/institutions', prefix: 'Institutions' },
  { path: '/legal', prefix: 'Legal & verification' },
  { path: '/contact', prefix: 'Contact' },
  { path: '/privacy', prefix: 'Privacy policy' },
  { path: '/terms', prefix: 'Terms of service' },
]

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const match = PAGE_TITLES.find((p) => p.path === pathname)
    document.title = match
      ? `${match.prefix} | ${SITE_TITLE}`
      : `Page not found | ${SITE_TITLE}`
  }, [pathname])

  return (
    <div className="layout">
      <Header />
      <TaglineBar />
      <main className="layout__main" id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
