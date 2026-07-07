import Reveal from './Reveal.jsx'

// ✏️ EDIT: your timeline (most recent first). Pulled from your resume.
const TIMELINE = [
  {
    period: 'Jan 2017 – Dec 2020',
    place: 'No.1 Grills',
    title: 'Owner / CEO / Inventor / Engineer',
    body: 'Founded No.1 Grills and invented the industry-first Multipurpose Cooking Appliance — oven, griddle, smoker, rotisserie, charcoal and gas grill in one — synergizing traditional cooking with advanced engineering, quality control, and regulatory compliance.',
  },
  {
    period: 'Jan 2013 – Present',
    place: 'U.S. Patent 9,980,606',
    title: 'Inventor — Multipurpose Cooking Appliance',
    body: 'A multisided, rotatable cooking element with more than one cooking surface and multiple heat sources — gas, electric, wood, or charcoal — letting a user grill, bake, sear, fry, sauté, or smoke, separately or simultaneously.',
  },
  {
    period: 'Aug 2011 – Jan 2017',
    place: 'Marra Forni',
    title: 'Co-Founder & Vice President',
    body: 'Helped build one of the fastest-growing, most innovative brick-oven manufacturers in the U.S. — Neapolitan, rotator, electric, and mobile ovens — driving engineering results above target and expanding the line to prep tables, dough mixers, and venting systems.',
  },
  {
    period: 'Jan 2007 – Aug 2011',
    place: 'Euro Restaurant Solutions (DBA Marra Forni)',
    title: 'Co-Founder & Vice President',
    body: 'Co-founded the company behind Marra Forni, establishing the operations, product, and go-to-market foundations that powered its growth.',
  },
  {
    period: '1999 – 2014',
    place: 'Euro Gourmet',
    title: 'Co-Founder & Vice President',
    body: 'Co-founded a specialty-food business; built partnerships with Whole Foods, Balducci’s, Cheesecake Factory, Serafina and 100+ retailers, plus sponsorships with Food Network & Bravo TV and a national dealer/distributor network.',
  },
  {
    period: 'Education & credentials',
    place: 'BS, Electrical Engineering (1995)',
    title: 'Engineer, chef, sommelier, pizzaiolo',
    body: 'Certified Sommelier, Vera Pizza Napoletana Pizzaiolo, Executive Chef, Master Baker, Food Safety certified, and Accademia Italiana Staggionello cured & aged meat processing.',
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
            Three decades of building
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
