import { TreeDeciduous, Users, Heart } from 'lucide-react'

export default function QuickInfo() {
  return (
    <section className="quick-info">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">
              <TreeDeciduous size={40} />
            </div>
            <h3>2000+ Bomen</h3>
            <p>Een divers bos met meer dan 2000 zorgvuldig geplante bomen</p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <Users size={40} />
            </div>
            <h3>Voor Iedereen</h3>
            <p>Toegankelijk voor scholen, families en natuurliefhebbers</p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <Heart size={40} />
            </div>
            <h3>Met Liefde Gemaakt</h3>
            <p>Gecreëerd door lokale vrijwilligers en natuurliefhebbers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
