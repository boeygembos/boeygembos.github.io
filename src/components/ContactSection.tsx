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
          <div className="card p-m">
            <h3 className="flex items-center gap-s mb-m">
              <MapPin size={32} color="oklch(0.48 0.12 150)" />
              Locatie
            </h3>
            <div className="map-container mb-m">
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
            <p className="section-description">
              {contactData.address}
            </p>
          </div>

          <div className="card p-m">
            <h3 className="flex items-center gap-s mb-m">
              <Info size={32} color="oklch(0.48 0.12 150)" />
              Bezoekersinfo
            </h3>

            <div className="mb-m">
              <h4 className="text-secondary mb-s section-description">Mag Wel</h4>
              <ul className="feature-list">
                {contactData.rules.allowed.map((rule, index) => (
                  <li key={index} className="feature-list__item">
                    <Check size={20} color="oklch(0.48 0.12 150)" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-m">
              <h4 className="text-destructive mb-s section-description">Mag Niet</h4>
              <ul className="feature-list">
                {contactData.rules.notAllowed.map((rule, index) => (
                  <li key={index} className="feature-list__item">
                    <X size={20} color="oklch(0.58 0.24 28.5)" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="legal-notice">
              <p dangerouslySetInnerHTML={{ __html: contactData.legalNotice }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
