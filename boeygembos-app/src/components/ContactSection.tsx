import { MapPin, Mail, Phone, AlertCircle } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact & Bereikbaarheid</h2>
          <p className="section-subtitle">Kom ons bezoeken!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <MapPin size={32} />
              <h3>Locatie</h3>
              <p>Boeygem Bos<br />Boeygem, België</p>
            </div>

            <div className="contact-card">
              <Mail size={32} />
              <h3>Email</h3>
              <p>info@boeygemb os.be</p>
            </div>

            <div className="contact-card">
              <Phone size={32} />
              <h3>Telefoon</h3>
              <p>+32 123 45 67 89</p>
            </div>
          </div>

          <div className="map-container">
            <div style={{ 
              width: '100%', 
              height: '400px', 
              backgroundColor: 'var(--muted)', 
              borderRadius: 'var(--radius)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid var(--border)'
            }}>
              <p style={{ color: 'var(--muted-foreground)' }}>Google Maps integratie</p>
            </div>
          </div>
        </div>

        <div className="rules-section">
          <div className="rules-header">
            <AlertCircle size={32} />
            <h3>Bezoekersregels</h3>
          </div>
          <div className="rules-grid">
            <div className="rule-card">
              <h4>Respecteer de Natuur</h4>
              <p>Raap niets af behalve herinneringen, laat niets achter behalve voetstappen</p>
            </div>
            <div className="rule-card">
              <h4>Honden Aangelijnd</h4>
              <p>Honden zijn welkom maar moeten aangelijnd blijven</p>
            </div>
            <div className="rule-card">
              <h4>Blijf op de Paden</h4>
              <p>Volg de gemarkeerde paden om de natuur te beschermen</p>
            </div>
            <div className="rule-card">
              <h4>Geen Vuur</h4>
              <p>Kampvuren en barbecues zijn niet toegestaan</p>
            </div>
            <div className="rule-card">
              <h4>Neem Afval Mee</h4>
              <p>Help ons het bos schoon te houden door je afval mee te nemen</p>
            </div>
            <div className="rule-card">
              <h4>Groepsbezoeken</h4>
              <p>Scholen en grote groepen dienen zich vooraf aan te melden</p>
            </div>
          </div>
        </div>

        <div className="legal-info">
          <p><small>© 2024 Boeygem Bos. Alle rechten voorbehouden. | Privacy Policy | Gebruiksvoorwaarden</small></p>
        </div>
      </div>
    </section>
  )
}
