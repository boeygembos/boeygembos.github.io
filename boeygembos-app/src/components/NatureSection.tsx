import { Flower2, Bird, Bug, TreeDeciduous } from 'lucide-react'

export default function NatureSection() {
  return (
    <section id="nature" className="section bg-muted">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Planten & Dieren</h2>
          <p className="section-subtitle">Ontmoet de bewoners van ons bos</p>
        </div>

        <div className="nature-tabs">
          <div className="nature-grid">
            <div className="nature-card">
              <div className="nature-icon">
                <TreeDeciduous size={48} />
              </div>
              <h3>Bomen</h3>
              <ul>
                <li>Eik - De koning van het bos</li>
                <li>Beuk - Met glanzende bladeren</li>
                <li>Wilg - Perfect voor boshutten</li>
                <li>Esdoorn - Prachtige herfstkleuren</li>
              </ul>
            </div>

            <div className="nature-card">
              <div className="nature-icon">
                <Flower2 size={48} />
              </div>
              <h3>Planten & Bloemen</h3>
              <ul>
                <li>Wilde hyacint - Blauw tapijtje in de lente</li>
                <li>Varens - Groene pluimen in de schaduw</li>
                <li>Brandnetels - Belangrijk voor vlinders</li>
                <li>Mossen - Zachte groene kussentjes</li>
              </ul>
            </div>

            <div className="nature-card">
              <div className="nature-icon">
                <Bird size={48} />
              </div>
              <h3>Vogels</h3>
              <ul>
                <li>Merel - Vrolijke zanger</li>
                <li>Koolmees - Acrobatische klimmer</li>
                <li>Roodborst - Nieuwsgierige vriend</li>
                <li>Specht - Timmerman van het bos</li>
              </ul>
            </div>

            <div className="nature-card">
              <div className="nature-icon">
                <Bug size={48} />
              </div>
              <h3>Insecten & Dieren</h3>
              <ul>
                <li>Vlinders - Kleurrijke bezoekers</li>
                <li>Bijen - Drukke bestuivers</li>
                <li>Eekhoorns - Acrobaten in de bomen</li>
                <li>Egels - Nachtelijke jagers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fruit-section" id="fruit">
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '3rem' }}>Fruit in het Bos</h3>
          <div className="content-wrapper">
            <div className="content-text">
              <p>
                Ons bos is niet alleen mooi om te zien, maar ook om te proeven! We hebben verschillende soorten fruitbomen en struiken geplant die eetbare vruchten dragen.
              </p>
              <ul>
                <li><strong>Appelbomen</strong> - Verschillende soorten oude appelrassen</li>
                <li><strong>Perenbomen</strong> - Sappige peren in het najaar</li>
                <li><strong>Bramen</strong> - Heerlijke wilde bramen langs de paden</li>
                <li><strong>Frambozen</strong> - Zoete rode vruchten in de zomer</li>
                <li><strong>Hazelnotenbomen</strong> - Noten verzamelen in de herfst</li>
              </ul>
              <p className="info-box">
                <strong>Let op:</strong> Vraag altijd aan een volwassene voordat je iets uit de natuur eet. Sommige vruchten lijken op elkaar maar zijn niet allemaal eetbaar!
              </p>
            </div>
            <div className="content-image">
              <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=400&fit=crop" alt="Fruit in het bos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
