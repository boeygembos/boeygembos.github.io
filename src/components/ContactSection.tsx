import { MapPin, Info, Check, X } from 'lucide-react'
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
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.981540986352!2d3.9574804137024078!3d50.99801324766794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3990e52e128db%3A0xe3a33d4816ef0b4d!2sBoeygem%20Bos!5e0!3m2!1sen!2sbe!4v1764164448091!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Boeygem Bos Locatie"
              />
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
