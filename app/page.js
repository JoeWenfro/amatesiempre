import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowIWork from '@/components/HowIWork'
import Services from '@/components/Services'
import Prices from '@/components/Prices'
import Guides from '@/components/Guides'
import Vision from '@/components/Vision'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Legal from '@/components/Legal'
import ClosingCTA from '@/components/ClosingCTA'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowIWork />
        <Services />
        <Prices />
        <Guides />
        <Vision />
        <Testimonials />
        <FAQ />
        <Legal />
        <ClosingCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
