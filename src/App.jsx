import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Organizations from './components/Organizations.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="bg-grain" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Organizations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
