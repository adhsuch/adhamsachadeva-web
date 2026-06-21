import { contacts } from '../data.js'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import { ArrowUpRight, contactIcons } from './icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <SectionLabel index="06">Contact</SectionLabel>
      <Reveal>
        <h2 className="contact__headline">
          Let's <span className="accent">connect</span>.
        </h2>
        <p className="contact__sub">
          Open to collaboration, projects, or just a chat.
        </p>
      </Reveal>

      <div className="contact__list">
        {contacts.map((c, i) => {
          const Icon = contactIcons[c.label]
          return (
            <Reveal key={c.label} delay={i * 70}>
              <a href={c.href} target="_blank" rel="noreferrer" className="contact__item">
                <span className="contact__icon">{Icon && <Icon />}</span>
                <span className="contact__label mono">{c.label}</span>
                <span className="contact__value">{c.value}</span>
                <ArrowUpRight className="contact__arrow" />
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
