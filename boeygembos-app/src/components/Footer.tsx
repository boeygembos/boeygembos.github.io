import { Facebook, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Boeygem Bos</h3>
            <p>Een magisch stukje natuur waar kinderen kunnen ontdekken, leren en spelen</p>
          </div>

          <div className="footer-section">
            <h4>Snelle Links</h4>
            <ul className="footer-links">
              <li><a href="#intro">Over Ons</a></li>
              <li><a href="#gallery">Fotogalerij</a></li>
              <li><a href="#bosklas">Bosklas</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Volg Ons</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="mailto:info@boeygemb os.be" aria-label="Email"><Mail size={24} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Boeygem Bos. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
