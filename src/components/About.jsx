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
              From Naples to Washington, D.C.
            </h2>
          </Reveal>

          {/* ✏️ EDIT YOUR BIO — this is a draft in your voice. Rewrite freely. */}
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg text-[#6B5D52] leading-relaxed max-w-2xl">
              <p>
                I grew up in Naples, where good food isn&rsquo;t a luxury &mdash;
                it&rsquo;s the center of everything. For more than 20 years
                I&rsquo;ve carried that standard into the Washington, D.C.
                restaurant world, helping chefs and owners bring genuinely
                authentic Italian cooking to their guests.
              </p>
              <p>
                Today I&rsquo;m Director of Sales &amp; Business Development at
                Italiana FoodTech, where we distribute professional Italian
                kitchen equipment &mdash; pizza ovens, mixers, pasta tools &mdash;
                and let restaurants try it in our showroom before they buy. Along
                the way I co-founded a specialty-food import business and
                consulted for restaurants across the region.
              </p>
              <p>
                What drives me is simple: match the right kitchen to the right
                team, so the food that comes out of it tastes the way it should.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
