import { TreePine, Bug, Map } from 'lucide-react'

export default function QuickInfo() {
  return (
    <section className="quick-info">
      <div className="container">
        <div className="info-grid">
          <div className="info-card stagger-item">
            <div className="info-icon">
              <TreePine size={64} />
            </div>
            <h3>Over het Bos</h3>
            <p>Ontdek hoe Boeygem Bos ontstond en evolueerde</p>
          </div>
          <div className="info-card stagger-item">
            <div className="info-icon">
              <Bug size={64} />
            </div>
            <h3>Natuur & Dieren</h3>
            <p>Leer over planten en dieren in het bos</p>
          </div>
          <div className="info-card stagger-item">
            <div className="info-icon">
              <Map size={64} />
            </div>
            <h3>Bezoek Info</h3>
            <p>Praktische informatie voor je bezoek</p>
          </div>
        </div>
      </div>
    </section>
  )
}
