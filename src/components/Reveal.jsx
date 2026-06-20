import { useReveal } from '../useReveal.js'

// Membungkus children dengan animasi fade-up saat masuk viewport.
export default function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
