import { education } from '../data.js'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionLabel index="03">Education</SectionLabel>
      <div className="timeline">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 90} className="timeline__item">
            <div className={`timeline__node ${e.current ? 'is-current' : ''}`} />
            <div className="timeline__content">
              <div className="timeline__head">
                <h3 className="timeline__school">{e.school}</h3>
                {e.period && <span className="timeline__period mono">{e.period}</span>}
              </div>
              <p className="timeline__detail">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
