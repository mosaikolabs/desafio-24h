import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import Offer from './components/Offer'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Testimonials />
      <Portfolio />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <ContactForm />
    </div>
  )
}

export default App
