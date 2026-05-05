import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Award, Clock, Play, X } from 'lucide-react'
import writersBlockThumbnail from '../assets/WritersBlock.png'

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
    // awards: ['Best Student Film - City Film Festival'],
    role: 'Director, Editor',
  },
  {
    id: 2,
    title: "Writer's Block",
    category: 'Documentary',
    duration: '27 sec',
    year: '2025',
    description:
      'Short personal documentary.',
    image: writersBlockThumbnail,
    // awards: ['Audience Choice Award'],
    videoUrl: 'https://vimeo.com/manage/videos/1182784188',
    role: 'Director, Cinematographer, Editor',
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
    // awards: ['Best Screenplay - Student Film Awards'],
    role: 'Writer, Director',
  },
  // {
  //   id: 5,
  //   title: 'Roots & Routes',
  //   category: 'Documentary',
  //   duration: '18 min',
  //   year: '2024',
  //   description: 'Following immigrant families as they navigate identity and belonging.',
  //   image:
  //     'https://images.unsplash.com/photo-1761872936122-4aca27d3f258?auto=format&fit=crop&w=1400&q=80',
  //   // awards: ['Social Impact Award'],
  //   role: 'Director, Producer',
  // },
  // {
  //   id: 6,
  //   title: 'Frame by Frame',
  //   category: 'Behind-the-Scenes',
  //   duration: '10 min',
  //   year: '2024',
  //   description:
  //     'A making-of documentary showcasing the filmmaking process from pre to post-production.',
  //   image:
  //     'https://images.unsplash.com/photo-1770097005226-f47e45221447?auto=format&fit=crop&w=1400&q=80',
  //   // awards: [],
  //   role: 'Director, Editor',
  // },
]

const categories = ['All', 'Short Film', 'Documentary', 'Experimental', 'Behind-the-Scenes']

function getVideoConfig(videoUrl) {
  if (!videoUrl) return null

  try {
    const parsedUrl = new URL(videoUrl)
    const hostname = parsedUrl.hostname.replace('www.', '')

    if (hostname.includes('vimeo.com')) {
      const idMatch = parsedUrl.pathname.match(/\/(\d+)(?:\/|$)/)

      if (idMatch) {
        return {
          directUrl: videoUrl,
          embedUrl: `https://player.vimeo.com/video/${idMatch[1]}?autoplay=1&title=0&byline=0&portrait=0`,
        }
      }
    }

    let youtubeId = null
    if (hostname === 'youtu.be') {
      youtubeId = parsedUrl.pathname.replace('/', '')
    } else if (hostname.includes('youtube.com')) {
      youtubeId = parsedUrl.searchParams.get('v')
      if (!youtubeId && parsedUrl.pathname.includes('/shorts/')) {
        youtubeId = parsedUrl.pathname.split('/shorts/')[1]?.split('/')[0]
      }
    }

    if (youtubeId) {
      return {
        directUrl: videoUrl,
        embedUrl: `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`,
      }
    }
  } catch {
    return { directUrl: videoUrl, embedUrl: null }
  }

  return { directUrl: videoUrl, embedUrl: null }
}

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeVideo, setActiveVideo] = useState(null)
  const MotionDiv = motion.div

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  useEffect(() => {
    if (!activeVideo) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') setActiveVideo(null)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [activeVideo])

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
          {filteredProjects.map((project, index) => {
            const awards = Array.isArray(project.awards) ? project.awards : []
            const video = getVideoConfig(project.videoUrl)

            return (
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
                    {video ? (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveVideo({
                            title: project.title,
                            embedUrl: video.embedUrl,
                            directUrl: video.directUrl,
                          })
                        }
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-label={`Play ${project.title}`}
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
                          <Play className="ml-0.5 h-8 w-8 text-white" fill="white" />
                        </span>
                      </button>
                    ) : (
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/70">
                          <Play className="ml-0.5 h-8 w-8 text-white" fill="white" />
                        </div>
                      </div>
                    )}
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
                      {awards.length > 0 && (
                        <div className="space-y-1">
                          {awards.map((award) => (
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
            )
          })}
        </div>

        <AnimatePresence>
          {activeVideo && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            >
              <MotionDiv
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-white/20 bg-black"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-3 z-10 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
                  aria-label="Close video"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="aspect-video w-full">
                  {activeVideo.embedUrl ? (
                    <iframe
                      src={activeVideo.embedUrl}
                      title={activeVideo.title}
                      className="h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
                      <p className="text-zinc-300">
                        This video provider does not support direct embed from this URL.
                      </p>
                      <a
                        href={activeVideo.directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      >
                        Open Video in New Tab
                      </a>
                    </div>
                  )}
                </div>
              </MotionDiv>
            </MotionDiv>
          )}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
