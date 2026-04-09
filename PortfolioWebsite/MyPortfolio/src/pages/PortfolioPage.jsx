import { useState } from 'react'
import { motion } from 'motion/react'
import { Award, Clock, Play } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Echoes of Silence',
    category: 'Short Film',
    duration: '12 min',
    year: '2026',
    description:
      'A contemplative exploration of isolation and human connection in the modern age.',
    image:
      'https://images.unsplash.com/photo-1612539465474-77bd2cc10a10?auto=format&fit=crop&w=1400&q=80',
    awards: ['Best Student Film - City Film Festival'],
    role: 'Director, Editor',
  },
  {
    id: 2,
    title: 'Behind the Lens',
    category: 'Documentary',
    duration: '25 min',
    year: '2025',
    description:
      'An intimate portrait of three photographers finding beauty in unexpected places.',
    image:
      'https://images.unsplash.com/photo-1758851088217-df00ca346e24?auto=format&fit=crop&w=1400&q=80',
    awards: ['Audience Choice Award'],
    role: 'Director, Cinematographer',
  },
  {
    id: 3,
    title: 'Urban Symphony',
    category: 'Experimental',
    duration: '8 min',
    year: '2025',
    description:
      'A visual and auditory journey through the rhythms of city life at dawn.',
    image:
      'https://images.unsplash.com/photo-1639426131676-ff5f24493f2c?auto=format&fit=crop&w=1400&q=80',
    awards: [],
    role: 'Director, Editor, Sound Design',
  },
  {
    id: 4,
    title: 'The Interview',
    category: 'Short Film',
    duration: '15 min',
    year: '2025',
    description:
      'A psychological thriller about a job interview that takes an unexpected turn.',
    image:
      'https://images.unsplash.com/photo-1583215794430-78a2c664751e?auto=format&fit=crop&w=1400&q=80',
    awards: ['Best Screenplay - Student Film Awards'],
    role: 'Writer, Director',
  },
  {
    id: 5,
    title: 'Roots & Routes',
    category: 'Documentary',
    duration: '18 min',
    year: '2024',
    description: 'Following immigrant families as they navigate identity and belonging.',
    image:
      'https://images.unsplash.com/photo-1761872936122-4aca27d3f258?auto=format&fit=crop&w=1400&q=80',
    awards: ['Social Impact Award'],
    role: 'Director, Producer',
  },
  {
    id: 6,
    title: 'Frame by Frame',
    category: 'Behind-the-Scenes',
    duration: '10 min',
    year: '2024',
    description:
      'A making-of documentary showcasing the filmmaking process from pre to post-production.',
    image:
      'https://images.unsplash.com/photo-1770097005226-f47e45221447?auto=format&fit=crop&w=1400&q=80',
    awards: [],
    role: 'Director, Editor',
  },
]

const categories = ['All', 'Short Film', 'Documentary', 'Experimental', 'Behind-the-Scenes']

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const MotionDiv = motion.div

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="min-h-screen bg-black py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">My Portfolio</h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            A collection of films showcasing my journey as a filmmaker, from narrative shorts to
            documentaries and experimental pieces.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-white/10 text-zinc-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </MotionDiv>

        <div className="grid gap-8 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group relative h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-red-500/50">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
                      <Play className="ml-0.5 h-8 w-8 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl">{project.title}</h3>
                  <div className="mb-3 flex items-center gap-4 text-sm text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {project.duration}
                    </span>
                    <span>{project.year}</span>
                  </div>
                  <p className="mb-4 min-h-14 text-sm text-zinc-400">{project.description}</p>

                  <div className="mb-4 min-h-6">
                    {project.awards.length > 0 && (
                      <div className="space-y-1">
                        {project.awards.map((award) => (
                          <div key={award} className="flex items-center gap-2 text-xs text-amber-400">
                            <Award className="h-4 w-4" />
                            {award}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="mt-auto text-xs text-zinc-500">
                    <span className="font-semibold">Role:</span> {project.role}
                  </p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
