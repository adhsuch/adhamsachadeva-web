import { about } from '../data.js'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionLabel index="01">About Me</SectionLabel>
      <div className="about__grid">
        <Reveal className="about__text">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={120} className="about__aside">
          <div className="about__card mono">
            <div className="about__card-row">
              <span>location</span>
              <span className="accent">Bandung, ID</span>
            </div>
            <div className="about__card-row">
              <span>focus</span>
              <span className="accent">Software & AI</span>
            </div>
            <div className="about__card-row">
              <span>status</span>
              <span className="accent">Open to collab</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
