import { projects } from '../data.js'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionLabel index="04">Proyek</SectionLabel>
      <div className="projects__grid">
        {projects.map((p, i) => {
          const Wrapper = p.link ? 'a' : 'div'
          const props = p.link
            ? { href: p.link, target: '_blank', rel: 'noreferrer' }
            : {}
          return (
            <Reveal key={p.name} delay={i * 100}>
              <Wrapper {...props} className={`project ${p.link ? 'project--link' : ''}`}>
                <div className="project__top">
                  <span className="project__num mono">
                    0{i + 1}
                  </span>
                  {p.link && <span className="project__arrow">↗</span>}
                </div>
                <h3 className="project__name">{p.name}</h3>
                <p className="project__desc">{p.description}</p>
                <div className="project__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project__tag mono">
                      {t}
                    </span>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
