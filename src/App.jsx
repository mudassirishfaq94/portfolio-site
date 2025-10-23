import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import CaseStudies from './components/CaseStudies'
import Expertise from './components/Expertise'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <main className="bg-deep-black min-h-screen">
        <Hero />
        <Solutions />
        <CaseStudies />
        <Expertise />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
    </>
  )
}

export default App
