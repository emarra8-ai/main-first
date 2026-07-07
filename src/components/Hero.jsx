import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'
import Navbar from './Navbar.jsx'
import { SpiralAnimation } from './ui/SpiralAnimation.jsx'
import { useTypewriter } from '../hooks/useTypewriter.js'

// ✏️ EDIT: the pills a visitor can pick. Keep them short.
const SERVICE_OPTIONS = ['Consulting', 'Product design', 'Operations', 'Partnerships']

export default function Hero() {
  // ---- Typewriter headline ----
  // ✏️ EDIT: your hero headline. \n forces a line break.
  const { displayed, done } = useTypewriter("let's build\nsomething great.")

  // ---- Interactive service pills ----
  const [services, setServices] = useState([])
  const toggleService = (name) =>
    setServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name],
    )

  return (
    <section
      id="top"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      <Navbar />

      {/* ---------- Animated spiral background ---------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SpiralAnimation />
      </div>

      {/* Left-to-right black veil so the headline stays readable over the particles */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />
      {/* Bottom fade to blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* ---------- Content layer ---------- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main
          id="spade-hero"
          className="w-full max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center pt-28 lg:pt-12"
        >
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-white leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink" />
              )}
            </h1>
          </motion.div>

          {/* Secondary description — ✏️ EDIT your intro line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#B7ADA2] leading-relaxed font-normal mb-14 max-w-2xl">
              I&rsquo;m Emiliano Marra &mdash; operations executive, inventor, and
              engineer. <br />
              I co-found and build cooking-equipment companies, and I hold a U.S.
              patent for a multipurpose cooking appliance.
            </p>
          </motion.div>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl font-medium tracking-tight mb-2 text-[#FAF6EF]">
              What can I help with?
            </h2>
            <p className="opacity-85 text-[#9A8C7E] mb-8">Select all that apply</p>

            <div className="flex flex-wrap gap-3">
              {SERVICE_OPTIONS.map((name) => {
                const active = services.includes(name)
                return (
                  <motion.button
                    key={name}
                    type="button"
                    onClick={() => toggleService(name)}
                    whileTap={{ scale: 0.96 }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-medium transition-colors ${
                      active
                        ? 'bg-[#8E2A24] text-white shadow-md shadow-black/40 transform'
                        : 'bg-white/5 text-[#FAF6EF] border border-white/15 hover:bg-white/10'
                    }`}
                  >
                    <AnimatePresence>
                      {active && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="inline-flex"
                        >
                          <Check size={18} strokeWidth={2.5} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {name}
                  </motion.button>
                )
              })}
            </div>

            {/* Contingent feedback banner */}
            <div className="mt-6">
              <AnimatePresence mode="wait">
                {services.length === 0 ? (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="italic text-xs text-[#A8A29E]"
                  >
                    Please click to select services above.
                  </motion.p>
                ) : (
                  <motion.div
                    key="banner"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
                      <span className="text-sm text-[#EDE7DF]">
                        Ready to talk about:{' '}
                        <strong className="font-semibold text-white">
                          {services.join(', ')}
                        </strong>
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-[#E0754A] uppercase text-xs font-semibold tracking-wide hover:gap-2.5 transition-all"
                      >
                        Let&rsquo;s Go <ArrowRight size={15} strokeWidth={2.5} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  )
}
