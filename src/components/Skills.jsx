import { skills } from '../data.js'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionLabel index="02">Skills</SectionLabel>
      <div className="skills__grid">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 100} className="skills__group">
            <h3 className="skills__category mono">{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="skills__chip">
                  <span className="skills__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
