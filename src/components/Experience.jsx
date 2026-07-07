import Reveal from './Reveal.jsx'

// ✏️ EDIT: your timeline. `period` is intentionally flexible — drop in real
// years (e.g. "2018 — Present") when you're ready.
const TIMELINE = [
  {
    period: 'Origins',
    place: 'Naples, Italy',
    title: 'Raised on the real thing',
    body: 'Grew up in Naples surrounded by pizza craft and an uncompromising standard for authentic Italian food.',
  },
  {
    period: '20+ years',
    place: 'Washington, D.C.',
    title: 'Italian food-service & restaurants',
    body: 'Built a career across the D.C.-region restaurant industry, learning kitchens from the inside — what works on the line and what doesn’t.',
  },
  {
    period: 'Co-founder',
    place: 'Euro Gourmet',
    title: 'Specialty-food importing',
    body: 'Co-founded a specialty-food import business, bringing authentic Italian products to restaurants and retailers in the region.',
  },
  {
    period: 'Advisory',
    place: 'Restaurant consulting',
    title: 'Helping owners get it right',
    body: 'Consulted for restaurants on concept, kitchen, and operations — matching the right equipment and process to each team.',
  },
  {
    period: 'Present',
    place: 'Italiana FoodTech',
    title: 'Director of Sales & Business Development',
    body: 'Lead sales and business development for a distributor of professional Italian kitchen equipment, with a Try-Before-You-Buy showroom for restaurants.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-[#FAF6EF] px-6 py-24 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#C65D3B] mb-4">
            Experience
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2B211C] leading-tight mb-14">
            A path through Italian food
          </h2>
        </Reveal>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E4D3C2]" aria-hidden="true" />

          <ol className="space-y-10">
            {TIMELINE.map((item, i) => (
              <Reveal as="li" key={item.place} delay={i * 0.06} className="relative pl-10">
                {/* dot */}
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-[#8E2A24] ring-4 ring-[#FAF6EF]" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#C65D3B]">
                    {item.period}
                  </span>
                  <span className="text-[#9A7B5E]">&middot;</span>
                  <span className="text-sm font-medium text-[#6B5D52]">
                    {item.place}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#2B211C] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[#6B5D52] leading-relaxed max-w-2xl">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
