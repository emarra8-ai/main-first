import { useState } from 'react'

// ✏️ EDIT: navigation links (label + section id they scroll to)
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What I do', href: '#what-i-do' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const close = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-20 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
        {/* Logo (left) — ✏️ EDIT your name / wordmark here */}
        <a href="#top" onClick={close} className="flex flex-row items-center gap-3">
          <span className="text-[21px] sm:text-[26px] tracking-tight text-white font-medium select-none">
            Emiliano&nbsp;Marra
          </span>
          <span className="text-[25px] sm:text-[30px] text-[#E0754A] select-none tracking-[-0.02em] font-medium leading-none mb-1">
            &#10033;
          </span>
        </a>

        {/* Desktop nav links (center) */}
        <nav className="hidden md:flex flex-row text-[23px] text-white/90">
          {NAV_LINKS.map((link, i) => (
            <span key={link.href} className="flex flex-row items-center">
              <a
                href={link.href}
                className="hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <span className="opacity-40">,&nbsp;</span>
              )}
            </span>
          ))}
        </nav>

        {/* Desktop CTA (right) */}
        <a
          href="#contact"
          className="hidden md:inline-block text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>

        {/* Hamburger (mobile only) */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[15] bg-black/95 backdrop-blur-sm transition-opacity duration-300 flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className="text-3xl font-medium text-white hover:opacity-60 transition-opacity"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={close}
          className="text-3xl font-medium text-[#E0754A] underline underline-offset-4"
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
