import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative bg-black text-neutral-100 font-sans selection:bg-[#E0754A] selection:text-black antialiased overflow-x-hidden">
      {/* Hero is a self-contained, full-height top section that holds the
          background video. The video lives ONLY here — the sections below
          have their own solid backgrounds. */}
      <Hero />

      {/* Editorial content sections */}
      <main>
        <About />
        <WhatIDo />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
