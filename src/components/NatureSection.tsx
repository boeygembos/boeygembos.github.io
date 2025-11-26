import { Flower2, Bird, Apple } from 'lucide-react'
import natureData from '../../content/nature.json'

const iconMap: Record<string, typeof Flower2> = {
  Flower2,
  Bird,
  Apple
}

export default function NatureSection() {
  return (
    <section id="nature" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{natureData.title}</h2>
          <p className="section-subtitle">{natureData.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {natureData.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon]
            return (
              <div key={index} className="info-card" style={{ padding: '2rem' }}>
                {IconComponent && <IconComponent size={48} color="oklch(0.48 0.12 150)" style={{ marginBottom: '1rem' }} />}
                <h3 style={{ marginBottom: '0.75rem' }}>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
