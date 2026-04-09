import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section className="grid min-h-[70vh] place-items-center">
      <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-zinc-950/80 p-8 text-center md:p-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
          React Setup Complete
        </p>
        <h1 className="mb-4 text-4xl font-semibold text-white md:text-6xl">
          Portfolio Starter Is Ready
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
          Next we will replace this starter content with your exact Figma design and your own
          projects, bio, and contact details.
        </p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 rounded bg-red-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Go To Portfolio
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
