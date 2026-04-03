import Image from 'next/image'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <div className="relative w-full" style={{ height: 'clamp(280px, 40vw, 520px)', overflow: 'hidden' }}>
          <Image
            src="/ship-aerial.jpg"
            alt="Aerial view of cruise ship"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
