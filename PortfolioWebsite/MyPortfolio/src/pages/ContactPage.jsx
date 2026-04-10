import { useState } from 'react'
import { motion } from 'motion/react'
import { AtSign, Film, Mail, MapPin, Phone, PlaySquare, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'g.rux98@gmail.com',
    link: 'mailto:g.rux98@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+353 (83) 033 3727',
    link: 'tel:+353830333727',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+40 (775) 302 187',
    link: 'tel:+40775302187',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dublin, Dublin, IE',
    link: null,
  },
]

const socialLinks = [
  { icon: AtSign, label: 'Instagram', username: '@filmmaker', link: '#' },
  // { icon: PlaySquare, label: 'YouTube', username: '/filmmaker', link: '#' },
  // { icon: Film, label: 'Vimeo', username: '/filmmaker', link: '#' },
]

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const MotionDiv = motion.div
  const MotionA = motion.a

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <section className="min-h-screen bg-black py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Whether you are interested in collaboration, have a project in mind, or just want to
            connect, I would love to hear from you.
          </p>
        </MotionDiv>

        <div className="grid gap-12 lg:grid-cols-1">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 }}
          > 
            {/* <div className="rounded-lg border border-white/10 bg-zinc-900 p-8">
              <h2 className="mb-6 text-2xl">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/20 bg-black px-4 py-3 outline-none transition-colors focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="w-full rounded-lg border border-white/20 bg-black px-4 py-3 outline-none transition-colors focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project collaboration"
                    className="w-full rounded-lg border border-white/20 bg-black px-4 py-3 outline-none transition-colors focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or idea..."
                    className="w-full resize-none rounded-lg border border-white/20 bg-black px-4 py-3 outline-none transition-colors focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3 transition-colors hover:bg-red-600"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div> */}
          </MotionDiv>

          <div className="space-y-8">
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.14 }}
              className="rounded-lg border border-white/10 bg-zinc-900 p-8"
            >
              <h2 className="mb-6 text-2xl">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <MotionDiv
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 + index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                      <item.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-zinc-400">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="transition-colors hover:text-red-500">
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg border border-white/10 bg-zinc-900 p-8"
            >
              <h2 className="mb-6 text-2xl">Follow My Work</h2>
              <div className="space-y-4">
                {socialLinks.map((item, index) => (
                  <MotionA
                    key={item.label}
                    href={item.link}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 + index * 0.08 }}
                    className="group flex items-center gap-4 rounded-lg bg-black p-4 transition-colors hover:bg-white/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 transition-colors group-hover:bg-red-500/20">
                      <item.icon className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">{item.label}</p>
                      <p>{item.username}</p>
                    </div>
                  </MotionA>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.26 }}
              className="rounded-lg border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-6"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-green-500" />
                <div>
                  <h3 className="mb-2 text-lg">Available for Projects</h3>
                  <p className="text-sm text-zinc-300">
                    I am currently open to freelance collaborations, internships, and exciting film
                    projects.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
