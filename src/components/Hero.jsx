import { useState } from 'react'
import { profile } from '../data.js'
import { Terminal } from './icons.jsx'

export default function Hero() {
  // Jika foto gagal dimuat, tampilkan fallback.
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="top" className="hero">
      <div className="hero__grid">
        <div className="hero__content">
          <p className="hero__hello mono">
            <Terminal className="hero__hello-icon" /> hello, I'm
          </p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">
            {profile.role}
            <span className="hero__role-detail mono"> // {profile.detail}</span>
          </p>
          <p className="hero__tagline">{profile.tagline}</p>

          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            Open to internships &amp; collaboration
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Get in touch
            </a>
            <a href="#projects" className="btn btn--ghost">
              View projects
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-frame">
            {!photoFailed ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="hero__photo"
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="hero__photo-fallback mono">
                <span>ASP</span>
                <small>photo not added</small>
              </div>
            )}
          </div>
          <span className="hero__photo-tag mono">@adhamsachadeva</span>
        </div>
      </div>

      <a href="#about" className="hero__scroll mono" aria-label="Scroll ke bawah">
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
