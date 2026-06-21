import { organizations } from '../data.js'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

export default function Organizations() {
  return (
    <section id="organizations" className="section">
      <SectionLabel index="05">Experience</SectionLabel>
      <div className="orgs">
        {organizations.map((o, i) => (
          <Reveal key={`${o.org}-${o.period}`} delay={i * 90}>
            <div className="org">
              <div className="org__head">
                <div className="org__role">{o.role}</div>
                <div className="org__meta">
                  <span className="org__name">{o.org}</span>
                  <span className="org__period mono">{o.period}</span>
                </div>
              </div>
              {o.desc && <p className="org__desc">{o.desc}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
