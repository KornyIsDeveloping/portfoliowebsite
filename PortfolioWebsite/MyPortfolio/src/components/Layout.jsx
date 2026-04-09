import { AnimatePresence, motion } from 'motion/react'
import { Film, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const MotionDiv = motion.div
  const MotionNav = motion.nav

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-2">
            <Film className="h-5 w-5 text-zinc-100" />
            <span className="text-lg font-semibold tracking-tight text-zinc-100">Ruxandra Golea</span>
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <MotionDiv
                        layoutId="active-nav"
                        className="absolute -bottom-[23px] left-0 right-0 h-[2px] bg-red-500"
                        transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="rounded p-2 text-zinc-200 transition hover:bg-zinc-900 md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <MotionNav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden border-t border-white/10 px-4 py-3 md:hidden"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded px-3 py-2 text-sm transition-colors ${
                      isActive ? 'bg-zinc-800 text-white' : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </MotionNav>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        <AnimatePresence mode="wait" initial={false}>
          <MotionDiv
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </MotionDiv>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 bg-black py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Film className="h-4 w-4 text-red-500" />
            <span>© 2026 Film Student Portfolio</span>
          </div>
          {/* <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition hover:text-white">
              Vimeo
            </a>
            <a href="#" className="transition hover:text-white">
              YouTube
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  )
}
