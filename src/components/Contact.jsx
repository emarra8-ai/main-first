import Reveal from './Reveal.jsx'
import { Mail, Phone, Linkedin, Award } from 'lucide-react'

/* =================================================================
   ✏️ EDIT YOUR CONTACT DETAILS HERE
   ================================================================= */
const EMAIL = 'emarra8@gmail.com'
const PHONE_DISPLAY = '202.437.0524'
const PHONE_DIAL = '+12024370524'
const LINKEDIN = 'https://www.linkedin.com/in/your-handle' // ✏️ your LinkedIn URL
const PATENT_URL = 'https://patents.google.com/patent/US9980606' // US Patent 9,980,606

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-24 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#E0754A] mb-4">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#FAF6EF] leading-tight mb-6">
            Let&rsquo;s build something great.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-[#B7ADA2] leading-relaxed max-w-2xl mb-12">
            Product design, operations, engineering, or a partnership &mdash;
            reach out and let&rsquo;s talk. Based in Washington, D.C.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Email */}
          <Reveal delay={0.12}>
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#141414] p-6 hover:border-white/20 hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-[#E0754A]/15 text-[#E0754A] flex items-center justify-center shrink-0">
                <Mail size={20} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#FAF6EF]">Email</span>
                <span className="block text-[#B7ADA2] truncate">{EMAIL}</span>
              </span>
            </a>
          </Reveal>

          {/* Phone */}
          <Reveal delay={0.18}>
            <a
              href={`tel:${PHONE_DIAL}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#141414] p-6 hover:border-white/20 hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-[#E0754A]/15 text-[#E0754A] flex items-center justify-center shrink-0">
                <Phone size={20} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#FAF6EF]">Phone</span>
                <span className="block text-[#B7ADA2] truncate">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </Reveal>

          {/* LinkedIn */}
          <Reveal delay={0.24}>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#141414] p-6 hover:border-white/20 hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-[#E0754A]/15 text-[#E0754A] flex items-center justify-center shrink-0">
                <Linkedin size={20} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#FAF6EF]">LinkedIn</span>
                <span className="block text-[#B7ADA2] truncate">Connect with me</span>
              </span>
            </a>
          </Reveal>

          {/* Patent */}
          <Reveal delay={0.3}>
            <a
              href={PATENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#141414] p-6 hover:border-white/20 hover:-translate-y-0.5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-[#E0754A]/15 text-[#E0754A] flex items-center justify-center shrink-0">
                <Award size={20} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#FAF6EF]">
                  U.S. Patent 9,980,606
                </span>
                <span className="block text-[#B7ADA2] truncate">
                  Multipurpose Cooking Appliance
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
