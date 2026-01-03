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

        <div className="auto-grid">
          {natureData.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon]
            return (
              <div key={index} className="card card--centered p-m">
                {IconComponent && <IconComponent size={48} color="oklch(0.48 0.12 150)" className="mb-s" />}
                <h3 className="mb-s">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
