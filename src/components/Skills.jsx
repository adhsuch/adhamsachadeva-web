import { skills } from '../data.js'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import { skillIcons } from './icons.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <SectionLabel index="02">Skills</SectionLabel>
      <div className="skills__grid">
        {skills.map((group, i) => {
          const Icon = skillIcons[group.category]
          return (
          <Reveal key={group.category} delay={i * 100} className="skills__group">
            <h3 className="skills__category mono">
              {Icon && (
                <span className="skills__category-icon">
                  <Icon />
                </span>
              )}
              {group.category}
            </h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="skills__chip">
                  <span className="skills__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          )
        })}
      </div>
    </section>
  )
}
