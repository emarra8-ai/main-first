import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'
import Navbar from './Navbar.jsx'
import { useTypewriter } from '../hooks/useTypewriter.js'

// ✏️ EDIT: the pills a visitor can pick. Keep them short.
const SERVICE_OPTIONS = ['Pizza ovens', 'Mixers', 'Pasta tools', 'Consulting']

// ✏️ EDIT: background video. This is the clip you provided. To use your own,
// upload an .mp4 and paste its URL here (or drop a file in /public and use
// `${import.meta.env.BASE_URL}your-video.mp4`).
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'

export default function Hero() {
  const videoRef = useRef(null)
  const prevXRef = useRef(null)
  const targetTimeRef = useRef(0)

  // ---- Desktop mouse-scrubbing: move the mouse to scrub the video ----
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleMouseMove = (e) => {
      // Disable scrubbing below the lg breakpoint
      if (window.innerWidth < 1024) return
      if (!video.duration) return

      // First sample just records position — no jump on entry
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX
        return
      }

      const delta = e.clientX - prevXRef.current
      prevXRef.current = e.clientX

      let targetTime =
        targetTimeRef.current + (delta / window.innerWidth) * 0.8 * video.duration
      targetTime = Math.max(0, Math.min(targetTime, video.duration))
      targetTimeRef.current = targetTime
      video.currentTime = targetTime
    }

    // Keep our target in sync frame-to-frame for smooth tracking
    const handleSeeked = () => {
      targetTimeRef.current = video.currentTime
    }

    window.addEventListener('mousemove', handleMouseMove)
    video.addEventListener('seeked', handleSeeked)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [])

  // ---- Mobile: scrubbing is off, so just autoplay the clip ----
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (window.innerWidth < 1024) {
      video.autoplay = true
      const p = video.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
  }, [])

  // ---- Typewriter headline ----
  // ✏️ EDIT: your hero headline. \n forces a line break.
  const { displayed, done } = useTypewriter("let's build the\nright kitchen.")

  // ---- Interactive service pills ----
  const [services, setServices] = useState([])
  const toggleService = (name) =>
    setServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name],
    )

  return (
    <section id="top">
      <Navbar />

      {/* ---------- Background video ---------- */}
      <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-right lg:object-right-bottom"
        />
        {/* Soft cream veil on desktop so headline text stays readable over the video */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent" />
      </div>

      {/* ---------- Content layer ---------- */}
      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
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
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
              )}
            </h1>
          </motion.div>

          {/* Secondary description — ✏️ EDIT your intro line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#6B5D52] leading-relaxed font-normal mb-14 max-w-2xl">
              I&rsquo;m Emiliano Marra, a restaurant equipment specialist in
              Washington, D.C. <br />
              Tell me what your kitchen needs and let&rsquo;s find the right gear
              &mdash; try it before you buy.
            </p>
          </motion.div>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl font-medium tracking-tight mb-2 text-[#2B211C]">
              What are you looking for?
            </h2>
            <p className="opacity-85 text-[#9A7B5E] mb-8">Select all that apply</p>

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
                        ? 'bg-[#8E2A24] text-white shadow-md shadow-red-950/10 transform'
                        : 'bg-white text-[#2B211C] border border-[#EFE4D8] hover:bg-[#F3EBDD]/55'
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
                    className="italic text-xs text-[#6B5D52]"
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
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FBF6EF] border border-[#EFE4D8] rounded-2xl px-5 py-4">
                      <span className="text-sm text-[#2B211C]">
                        Ready to talk about:{' '}
                        <strong className="font-semibold">
                          {services.join(', ')}
                        </strong>
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-[#B8502F] uppercase text-xs font-semibold tracking-wide hover:gap-2.5 transition-all"
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
