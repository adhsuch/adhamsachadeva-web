import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Pendidikan' },
  { id: 'projects', label: 'Proyek' },
  { id: 'organizations', label: 'Organisasi' },
  { id: 'contact', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark">A</span>
          <span className="nav__brand-text">adham<span className="accent">.</span></span>
        </a>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/adhsuch"
            target="_blank"
            rel="noreferrer"
            className="nav__cta"
            onClick={() => setOpen(false)}
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
