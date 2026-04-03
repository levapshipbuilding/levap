import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ShipAerial from '@/components/ShipAerial'
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
        <ShipAerial />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
