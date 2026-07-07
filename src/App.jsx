import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-[#F3E6DD] selection:text-[#2B211C] antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen">
      {/* Hero includes the fixed navbar + the interactive scrub-video header */}
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
