import { Menu, X, Film } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const desktopLinkClass = ({ isActive }) =>
  `text-sm tracking-wide transition-colors ${
    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
  }`

const mobileLinkClass = ({ isActive }) =>
  `block rounded px-3 py-2 text-sm transition-colors ${
    isActive ? 'bg-zinc-800 text-white' : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
  }`

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Film className="h-5 w-5 text-red-500" />
            <span>FilmPortfolio</span>
          </NavLink>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={desktopLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="rounded p-2 text-zinc-200 transition hover:bg-zinc-900 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-white/10 px-4 py-3 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pt-20 pb-12">
        <Outlet />
      </main>
    </div>
  )
}
