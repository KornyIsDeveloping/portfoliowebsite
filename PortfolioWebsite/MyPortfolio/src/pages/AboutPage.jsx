import { motion } from 'motion/react'
import { Award, Camera, Film, GraduationCap, Lightbulb, Music, Scissors, Users } from 'lucide-react'

const skills = [
  { name: 'Cinematography', icon: Camera, level: 90 },
  { name: 'Film Editing', icon: Scissors, level: 95 },
  { name: 'Directing', icon: Film, level: 85 },
  { name: 'Sound Design', icon: Music, level: 75 },
  { name: 'Screenwriting', icon: Lightbulb, level: 80 },
  { name: 'Collaboration', icon: Users, level: 95 },
]

const education = [
  {
    degree: 'Bachelor of Fine Arts in Film Production',
    institution: 'California Institute of the Arts',
    year: '2023 - Present',
    description: 'Focus on narrative filmmaking and documentary production',
  },
  {
    degree: 'Summer Intensive Program',
    institution: 'New York Film Academy',
    year: '2022',
    description: 'Specialized training in cinematography and visual storytelling',
  },
]

const achievements = [
  'Best Student Film - City Film Festival 2026',
  'Audience Choice Award - Documentary Showcase 2025',
  'Social Impact Award - Student Film Awards 2024',
  "Dean's List - 3 consecutive semesters",
]

export function AboutPage() {
  const MotionDiv = motion.div

  return (
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
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1758851088217-df00ca346e24?auto=format&fit=crop&w=1400&q=80"
                alt="Filmmaker"
                className="h-full w-full object-cover"
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
                I am a film student with a passion for visual storytelling and a deep commitment to
                exploring the human experience through cinema.
              </p>
              <p>
                My work spans narrative shorts, documentaries, and experimental films. Each project
                is driven by a desire to connect with audiences on an emotional level.
              </p>
              <p>
                Whether I am behind the camera or in the editing suite, I am always looking for new
                ways to tell stories that resonate.
              </p>
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
          <div className="mb-8 flex items-center justify-center gap-3">
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
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl rounded-lg border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-10 text-center"
        >
          <h2 className="mb-4 text-3xl">My Philosophy</h2>
          <p className="text-lg italic text-zinc-300">
            "Film is more than entertainment. It is a mirror to society, a window into the human
            soul, and a catalyst for change."
          </p>
        </MotionDiv>
      </div>
    </section>
  )
}
