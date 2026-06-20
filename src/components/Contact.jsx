import { contacts } from '../data.js'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <SectionLabel index="06">Kontak</SectionLabel>
      <Reveal>
        <h2 className="contact__headline">
          Mari <span className="accent">terhubung</span>.
        </h2>
        <p className="contact__sub">
          Terbuka untuk kolaborasi, proyek, atau sekadar berdiskusi.
        </p>
      </Reveal>

      <div className="contact__list">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 70}>
            <a href={c.href} target="_blank" rel="noreferrer" className="contact__item">
              <span className="contact__label mono">{c.label}</span>
              <span className="contact__value">{c.value}</span>
              <span className="contact__arrow">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
