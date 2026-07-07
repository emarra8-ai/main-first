import Reveal from './Reveal.jsx'

// Resolve public assets in a way that works on GitHub Pages subpaths too.
const HEADSHOT = `${import.meta.env.BASE_URL}assets/headshot-placeholder.svg`

export default function About() {
  return (
    <section id="about" className="bg-[#FAF6EF] px-6 py-24 sm:py-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
        {/* ---------- Headshot ----------
            ✏️ REPLACE THE PHOTO: drop your professional headshot into
            /public/assets/ and update the file name below (e.g.
            `${import.meta.env.BASE_URL}assets/emiliano.jpg`). A square
            image around 800×800px looks best. */}
        <Reveal className="mx-auto md:mx-0">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] rounded-2xl overflow-hidden ring-1 ring-[#EFE4D8] shadow-sm bg-[#F3EBDD]">
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
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#C65D3B] mb-4">
              About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2B211C] leading-tight mb-6">
              Inventor, engineer, and operations leader.
            </h2>
          </Reveal>

          {/* ✏️ EDIT YOUR BIO — drafted from your resume. Rewrite freely. */}
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg text-[#6B5D52] leading-relaxed max-w-2xl">
              <p>
                I&rsquo;m an entrepreneur, inventor, and strategic operations
                executive who has spent a career turning ideas into products
                &mdash; and low-performing teams into high-caliber ones. I pair
                strong engineering acumen with hands-on operations leadership to
                streamline high-volume production, sharpen quality, and grow the
                bottom line.
              </p>
              <p>
                I co-founded <strong>Marra Forni</strong>, where as Vice President
                I drove engineering and helped make it one of the fastest-growing,
                most innovative brick-oven manufacturers in the country. I later
                founded <strong>No.1 Grills</strong> and invented &mdash; and
                patented &mdash; the first-of-its-kind Multipurpose Cooking
                Appliance (U.S. Patent 9,980,606).
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
