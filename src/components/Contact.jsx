import Reveal from './Reveal.jsx'
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'

/* =================================================================
   ✏️ EDIT YOUR CONTACT DETAILS HERE
   These are placeholders — swap in your real email, LinkedIn URL,
   and any other links before you deploy.
   ================================================================= */
const EMAIL = 'your.email@example.com' // ✏️ your public email
const LINKEDIN = 'https://www.linkedin.com/in/your-handle' // ✏️ your LinkedIn URL
const COMPANY_URL = 'https://example.com' // ✏️ Italiana FoodTech website (optional)

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#C65D3B] mb-4">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2B211C] leading-tight mb-6">
            Let&rsquo;s build something worth cooking in.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-[#6B5D52] leading-relaxed max-w-2xl mb-12">
            Opening a restaurant, upgrading a kitchen, or just weighing your
            options? Reach out &mdash; or come by the showroom and try the
            equipment for yourself.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Email */}
          <Reveal delay={0.12}>
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 rounded-2xl border border-[#EFE4D8] bg-[#FAF6EF] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-[#8E2A24]/10 text-[#8E2A24] flex items-center justify-center shrink-0">
                <Mail size={20} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#2B211C]">Email</span>
                <span className="block text-[#6B5D52] truncate">{EMAIL}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="ml-auto text-[#C65D3B] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </Reveal>

          {/* LinkedIn */}
          <Reveal delay={0.18}>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#EFE4D8] bg-[#FAF6EF] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-[#8E2A24]/10 text-[#8E2A24] flex items-center justify-center shrink-0">
                <Linkedin size={20} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#2B211C]">LinkedIn</span>
                <span className="block text-[#6B5D52] truncate">Connect with me</span>
              </span>
              <ArrowUpRight
                size={18}
                className="ml-auto text-[#C65D3B] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </Reveal>

          {/* Company */}
          <Reveal delay={0.24}>
            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#EFE4D8] bg-[#FAF6EF] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-[#8E2A24]/10 text-[#8E2A24] flex items-center justify-center shrink-0">
                <ArrowUpRight size={20} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#2B211C]">
                  Italiana FoodTech
                </span>
                <span className="block text-[#6B5D52] truncate">Visit the showroom</span>
              </span>
            </a>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.3}>
            <div className="flex items-center gap-4 rounded-2xl border border-[#EFE4D8] bg-[#FAF6EF] p-6">
              <span className="w-11 h-11 rounded-xl bg-[#8E2A24]/10 text-[#8E2A24] flex items-center justify-center shrink-0">
                <MapPin size={20} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#2B211C]">Based in</span>
                <span className="block text-[#6B5D52]">Washington, D.C.</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
