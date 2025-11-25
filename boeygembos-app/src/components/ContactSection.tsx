import { MapPin, Info, Check, X, Map } from 'lucide-react'
import contactData from '../../content/contact.json'

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact & Toegankelijkheid</h2>
          <p className="section-subtitle">Plan je bezoek aan Boeygem Bos</p>
        </div>

        <div className="contact-grid">
          <div className="info-card" style={{ padding: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <MapPin size={32} color="oklch(0.48 0.12 150)" />
              Locatie
            </h3>
            <div style={{
              width: '100%',
              height: '300px',
              background: 'oklch(0.92 0.03 130)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Map size={64} color="oklch(0.75 0.11 230)" />
            </div>
            <p style={{ fontSize: '1.125rem' }}>
              {contactData.address}
            </p>
          </div>

          <div className="info-card" style={{ padding: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Info size={32} color="oklch(0.48 0.12 150)" />
              Bezoekersinfo
            </h3>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'oklch(0.55 0.09 60)', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Mag Wel</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {contactData.rules.allowed.map((rule, index) => (
                  <li key={index} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={20} color="oklch(0.48 0.12 150)" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'oklch(0.58 0.24 28.5)', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Mag Niet</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {contactData.rules.notAllowed.map((rule, index) => (
                  <li key={index} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <X size={20} color="oklch(0.58 0.24 28.5)" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'oklch(0.95 0.02 120)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid oklch(0.58 0.24 28.5)'
            }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: contactData.legalNotice }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
