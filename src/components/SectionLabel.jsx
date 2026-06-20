// Label kecil bergaya monospace di atas tiap section, mis. "01 / TENTANG SAYA".
export default function SectionLabel({ index, children }) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <span className="section-label__line" />
      <span className="section-label__text">{children}</span>
    </div>
  )
}
