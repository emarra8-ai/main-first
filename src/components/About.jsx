import Reveal from './Reveal.jsx'

// Resolve public assets in a way that works on GitHub Pages subpaths too.
// ✏️ To swap your photo later, drop a new file in /public/assets/ and change this name.
const HEADSHOT = `${import.meta.env.BASE_URL}assets/headshot.png`

export default function About() {
  return (
    <section id="about" className="bg-[#0B0B0B] px-6 py-24 sm:py-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
        {/* ---------- Headshot ----------
            ✏️ REPLACE THE PHOTO: drop your professional headshot into
            /public/assets/ and update the file name above (HEADSHOT). */}
        <Reveal className="mx-auto md:mx-0">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-lg shadow-black/50 bg-[#161616]">
            <img
              src={HEADSHOT}
              alt="Emiliano Marra"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* ---------- Bio ---------- */}
        <div>
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#E0754A] mb-4">
              About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#FAF6EF] leading-tight mb-6">
              Inventor, engineer, and operations leader.
            </h2>
          </Reveal>

          {/* ✏️ EDIT YOUR BIO — drafted from your resume. Rewrite freely. */}
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg text-[#B7ADA2] leading-relaxed max-w-2xl">
              <p>
                I&rsquo;m an entrepreneur, inventor, and strategic operations
                executive who has spent a career turning ideas into products
                &mdash; and low-performing teams into high-caliber ones. I pair
                strong engineering acumen with hands-on operations leadership to
                streamline high-volume production, sharpen quality, and grow the
                bottom line.
              </p>
              <p>
                I co-founded{' '}
                <strong className="text-[#EDE7DF]">Marra Forni</strong>, where as
                Vice President I drove engineering and helped make it one of the
                fastest-growing, most innovative brick-oven manufacturers in the
                country. I later founded{' '}
                <strong className="text-[#EDE7DF]">No.1 Grills</strong> and
                invented &mdash; and patented &mdash; the first-of-its-kind
                Multipurpose Cooking Appliance (U.S. Patent 9,980,606).
              </p>
              <p>
                Trained as an electrical engineer and certified across the
                culinary world &mdash; from Vera Pizza Napoletana pizzaiolo to
                sommelier &mdash; I care most about one thing: designing products
                and operations that deliver, consistently.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
