import { motion } from 'motion/react'
import { Award, Film, Play, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroCamera from '../assets/hero-camera.png'

const stats = [
  { icon: Film, label: 'Projects', value: '25+' },
  { icon: Award, label: 'Awards', value: '8' },
  { icon: Play, label: 'Screenings', value: '15' },
  { icon: Users, label: 'Collaborations', value: '30+' },
]

const featuredWorks = [
  {
    title: 'Narrative Films',
    description: 'Short films that explore human emotions and complex characters.',
    image:
      'https://images.unsplash.com/photo-1612539465474-77bd2cc10a10?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Documentaries',
    description: 'Real stories that shed light on important social and cultural issues.',
    image:
      'https://images.unsplash.com/photo-1761872936122-4aca27d3f258?auto=format&fit=crop&w=1400&q=80',
  },
]

export function HomePage() {
  const MotionDiv = motion.div
  const MotionH1 = motion.h1
  const MotionP = motion.p

  return (
    <div className="bg-black text-white">
      <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden sm:min-h-[720px]">
        <img
          src={heroCamera}
          alt="Behind the scenes cinematography setup"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/45 to-black" />

        <div className="relative z-10 mx-auto mt-8 w-full max-w-4xl px-4 text-center sm:mt-0 sm:px-6 lg:px-8">
          <MotionH1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72 }}
            className="mb-5 text-4xl leading-tight font-semibold tracking-tight md:text-7xl"
          >
            Storytelling Through <span className="block text-red-500">Cinema</span>
          </MotionH1>

          <MotionP
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.72 }}
            className="mx-auto mb-8 max-w-2xl text-base text-zinc-300 md:text-xl"
          >
            Film student passionate about creating compelling visual narratives that inspire,
            challenge, and entertain audiences.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.72 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-7 py-3 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 md:px-9 md:py-4 md:text-2xl"
            >
              <Play className="h-4 w-4" />
              View My Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/12 px-7 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 md:px-9 md:py-4 md:text-2xl"
            >
              Get In Touch
            </Link>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <MotionDiv
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-2"
          >
            <MotionDiv
              animate={{ y: [0, 8, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-white/60"
            />
          </MotionDiv>
        </MotionDiv>
      </section>

      <section className="bg-gradient-to-b from-black to-zinc-900 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-red-500" />
                <p className="mb-1 text-5xl font-medium">{stat.value}</p>
                <p className="text-xs text-zinc-400">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-5xl font-semibold tracking-tight">My Showreel</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Here are the projects that I've made or I've been part of so far.
            </p>
          </MotionDiv>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredWorks.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative h-full overflow-hidden rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="mb-2 text-2xl font-medium">{item.title}</h3>
                  <p className="text-zinc-300">{item.description}</p>
                </div>
              </MotionDiv>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 !text-red-500 transition-all duration-200 hover:!text-red-400 hover:tracking-[0.01em]"
            >
              Explore Full Portfolio
              <Play className="h-4 w-4 !text-red-500 hover:!text-red-400 hover:tracking-[0.01em]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
