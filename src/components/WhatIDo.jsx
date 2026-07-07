import Reveal from './Reveal.jsx'
import { Lightbulb, Settings2, Ruler, Users } from 'lucide-react'

// ✏️ EDIT: the four things you do. Swap icons from lucide.dev if you like.
const SERVICES = [
  {
    icon: Lightbulb,
    title: 'Product innovation & patents',
    body: 'I design and patent new cooking products — rotating and static ovens, flattops, grills, smokers — including the patented Multipurpose Cooking Appliance that combines many methods in one.',
  },
  {
    icon: Settings2,
    title: 'Operations leadership',
    body: 'I streamline high-volume operations, manage operating and capital budgets, and cut costs while raising quality, throughput, and bottom-line profit.',
  },
  {
    icon: Ruler,
    title: 'Engineering & product development',
    body: 'An electrical engineer by training, I take products from concept through reliability testing, QA, and manufacturing at scale.',
  },
  {
    icon: Users,
    title: 'Team building & strategy',
    body: 'I transform low-performing teams into high-caliber workforces and set the strategic vision and leadership that grows a business.',
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
            From invention to operations
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-[#6B5D52] leading-relaxed max-w-2xl mb-14">
            Three decades across engineering, product innovation, and operations
            leadership in the cooking-equipment industry &mdash; building products
            people rely on and teams that perform.
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
