import { Backpack, Palette, TreePine, Leaf } from 'lucide-react'

export default function BosklasSection() {
  return (
    <section id="bosklas" className="section bg-muted">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Bosklas - Leren in de Natuur</h2>
          <p className="section-subtitle">Educatieve programma's voor scholen en kinderen</p>
        </div>
        
        <div className="bosklas-content">
          <div className="bosklas-intro">
            <p>
              Onze Bosklas biedt een unieke leerervaring waar kinderen de natuur kunnen ontdekken door middel van spel, creativiteit en educatie. Elk bezoek is een avontuur vol ontdekkingen!
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <TreePine size={32} />
              </div>
              <h3>Bomen Herkennen</h3>
              <p>Leer de verschillende boomsoorten kennen en ontdek hun unieke eigenschappen</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Leaf size={32} />
              </div>
              <h3>Natuur Exploreren</h3>
              <p>Ontdek planten, insecten en dieren in hun natuurlijke habitat</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Palette size={32} />
              </div>
              <h3>Kunstwerken Maken</h3>
              <p>Creëer prachtige kunstwerken met natuurlijke materialen</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Backpack size={32} />
              </div>
              <h3>Boshut Bouwen</h3>
              <p>Werk samen om een echte boshut te bouwen met wilgentakken</p>
            </div>
          </div>

          <div className="bosklas-gallery">
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Indrukken van Onze Bosklas</h3>
            <div className="gallery-grid">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop" alt="Kinderen in het bos" />
              <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop" alt="Natuur kunstwerk" />
              <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop" alt="Boshut bouwen" />
              <img src="https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?w=400&h=300&fit=crop" alt="Kinderen leren" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
