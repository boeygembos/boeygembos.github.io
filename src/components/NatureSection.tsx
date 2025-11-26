import { Flower2, Bird, Apple } from 'lucide-react'

export default function NatureSection() {
  return (
    <section id="nature" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Planten & Dieren</h2>
          <p className="section-subtitle">Ontdek de rijke biodiversiteit van Boeygem Bos</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="info-card" style={{ padding: '2rem' }}>
            <Flower2 size={48} color="oklch(0.48 0.12 150)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.75rem' }}>Planten</h3>
            <p>
              Van inheemse bomen tot wilde bloemen, het bos herbergt een verscheidenheid aan plantensoorten die door de seizoenen veranderen.
            </p>
          </div>

          <div className="info-card" style={{ padding: '2rem' }}>
            <Bird size={48} color="oklch(0.48 0.12 150)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.75rem' }}>Vogels</h3>
            <p>
              Luister naar het gezang van verschillende vogelsoorten die in het bos leven en broeden.
            </p>
          </div>

          <div className="info-card" style={{ padding: '2rem' }}>
            <Apple size={48} color="oklch(0.48 0.12 150)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.75rem' }}>Fruit & Noten</h3>
            <p>
              Ontdek de eetbare vruchten en noten die in het seizoen te vinden zijn in verschillende delen van het bos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
