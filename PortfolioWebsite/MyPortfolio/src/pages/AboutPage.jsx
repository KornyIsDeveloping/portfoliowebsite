import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Award,
  Camera,
  FileText,
  Film,
  GraduationCap,
  Lightbulb,
  Music,
  Scissors,
  Users,
  X,
} from 'lucide-react'
import aboutPortrait from '../assets/about-ruxandra-portrait-final.png'

const CV_URL = '/cv/Ruxandra-Golea-CV.pdf'

const skills = [
  { name: 'Cinematography', icon: Camera, level: 70 },
  { name: 'Film Editing', icon: Scissors, level: 50 },
  { name: 'Directing', icon: Film, level: 20 },
  { name: 'Sound Design', icon: Music, level: 10 },
  { name: 'Screenwriting', icon: Lightbulb, level: 10 },
  { name: 'Collaboration', icon: Users, level: 90 },
]

const education = [
  {
    degree: 'Film TV and Screen Media Production',
    institution: 'Griffith College',
    year: '2025 - Present',
    description: 'My main focuses are Cinematography and Editing.',
  },
  // {
  //   degree: 'Summer Intensive Program',
  //   institution: 'New York Film Academy',
  //   year: '2022',
  //   description: 'Specialized training in cinematography and visual storytelling',
  // },
]

const achievements = [
  // 'Best Student Film - City Film Festival 2026',
  // 'Audience Choice Award - Documentary Showcase 2025',
  // 'Social Impact Award - Student Film Awards 2024',
  // "Dean's List - 3 consecutive semesters",
]

export function AboutPage() {
  const [cvOpen, setCvOpen] = useState(false)
  const [isLandscapePhoto, setIsLandscapePhoto] = useState(false)
  const MotionDiv = motion.div

  useEffect(() => {
    if (!cvOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const onEscape = (event) => {
      if (event.key === 'Escape') setCvOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onEscape)
    }
  }, [cvOpen])

  const handlePortraitLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget
    setIsLandscapePhoto(naturalWidth > naturalHeight)
  }

  return (
    <>
      <section className="min-h-screen bg-black py-20 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">About Me</h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Passionate filmmaker dedicated to crafting stories that matter.
            </p>
          </MotionDiv>

          <div className="mb-20 grid gap-12 lg:grid-cols-2">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              className="space-y-6"
            >
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-zinc-950">  
                <img
                  src={aboutPortrait}
                  alt="Ruxandra Golea portrait"
                  onLoad={handlePortraitLoad}
                  className={`h-full w-full brightness-[1.08] contrast-[1.12] saturate-[1.06] ${
                    isLandscapePhoto
                      ? 'object-contain object-center rotate-90 scale-[1.35]'
                      : 'object-cover object-top'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              className="flex flex-col justify-center space-y-5"
            >
              <h2 className="text-3xl font-semibold md:text-4xl">My Journey</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  My approach to cinematography is rooted in the quiet truth of everyday moments. 
                  I work with natural light, real locations, and precise camera movement, 
                  believing that cinema’s power lies not in what we add, but in what we choose to reveal.
                </p>
                <p>
                  I’m drawn to images that feel found, not built—where focus pulls carry emotional weight, 
                  and light isn’t shaped for beauty, but for honesty. This discipline comes from studying the work of 
                  Luca Bigazzi: his restraint, his trust in reality, and his belief that the most powerful frames are the ones 
                  that simply see.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setCvOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
                >
                  <FileText className="h-4 w-4" />
                  View CV
                </button>
              </div>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">Skills & Expertise</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <MotionDiv
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-lg border border-white/10 bg-zinc-900 p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <skill.icon className="h-6 w-6 text-red-500" />
                    <h3 className="text-lg">{skill.name}</h3>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <MotionDiv
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.08 }}
                      className="h-full bg-gradient-to-r from-red-500 to-red-600"
                    />
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{skill.level}%</p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-20"
          >
            <div className="mb-8 flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl font-semibold md:text-4xl">Education</h2>
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              {education.map((item, index) => (
                <MotionDiv
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.14 }}
                  className="rounded-lg border border-white/10 bg-zinc-900 p-6"
                >
                  <h3 className="mb-2 text-xl">{item.degree}</h3>
                  <p className="mb-2 text-red-500">{item.institution}</p>
                  <p className="mb-3 text-sm text-zinc-400">{item.year}</p>
                  <p className="text-zinc-300">{item.description}</p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-20"
          >
            {/* <div className="mb-8 flex items-center justify-center gap-3">
              <Award className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl font-semibold md:text-4xl">Achievements</h2>
            </div>
            <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <MotionDiv
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-900 p-4"
                >
                  <Award className="h-5 w-5 flex-none text-amber-400" />
                  <span className="text-sm">{achievement}</span>
                </MotionDiv>
              ))}
            </div> */}
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl rounded-lg border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-10 text-center"
          >
            <h2 className="mb-4 text-3xl">My Philosophy</h2>
            <p className="text-lg italic text-zinc-300">
              "Edit doesn’t need to fix what was never broken."
            </p>
          </MotionDiv>
        </div>
      </section>

      <AnimatePresence>
        {cvOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/94 p-4 backdrop-blur-md"
            onClick={() => setCvOpen(false)}
          >
            <MotionDiv
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-[92vh] w-full max-w-6xl overflow-hidden rounded-xl border border-white/20 bg-zinc-950 shadow-2xl shadow-black/60"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <h3 className="text-sm font-medium text-zinc-200">Curriculum Vitae</h3>
                <button
                  type="button"
                  onClick={() => setCvOpen(false)}
                  className="rounded bg-white/10 p-1.5 text-zinc-200 transition hover:bg-white/20"
                  aria-label="Close CV"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <iframe
                title="CV"
                src={CV_URL}
                className="h-[calc(92vh-57px)] w-full bg-zinc-900"
              />
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  )
}
