import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Services from './components/Services.jsx'
import ServiceArea from './components/ServiceArea.jsx'
import WhyCaliber from './components/WhyCaliber.jsx'
import About from './components/About.jsx'
import CallToAction from './components/CallToAction.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <ServiceArea />
        <WhyCaliber />
        <About />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
