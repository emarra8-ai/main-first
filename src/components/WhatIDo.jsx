import Reveal from './Reveal.jsx'
import { Flame, Cog, UtensilsCrossed, ClipboardCheck } from 'lucide-react'

// ✏️ EDIT: the four things you do. Swap icons from lucide.dev if you like.
const SERVICES = [
  {
    icon: Flame,
    title: 'Pizza ovens & core equipment',
    body: 'From deck and rotating ovens to fermentation and prep, I help you spec the setup your menu and space actually need — not the most expensive one.',
  },
  {
    icon: Cog,
    title: 'Mixers, dough & production',
    body: 'Spiral mixers, sheeters, and dough tools sized to your volume, so your kitchen keeps up on a Friday night without burning out the team.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Pasta & specialty tools',
    body: 'Extruders, sfoglia tools, and the small equipment that makes authentic Italian dishes repeatable, shift after shift.',
  },
  {
    icon: ClipboardCheck,
    title: 'Try-before-you-buy consulting',
    body: 'Come demo equipment hands-on in our showroom. I walk you through options, run the numbers, and help you commit with confidence.',
  },
]

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="bg-white px-6 py-24 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#C65D3B] mb-4">
            What I do
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2B211C] leading-tight mb-6 max-w-2xl">
            Helping restaurants build the right kitchen
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-[#6B5D52] leading-relaxed max-w-2xl mb-14">
            At Italiana FoodTech I pair D.C.-area restaurants with professional
            Italian equipment and let them test it before they invest &mdash; then
            I stay in it with them, from selection to install.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-2xl border border-[#EFE4D8] bg-[#FAF6EF] p-7 hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#8E2A24]/10 text-[#8E2A24] flex items-center justify-center mb-5">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2B211C] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#6B5D52] leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
