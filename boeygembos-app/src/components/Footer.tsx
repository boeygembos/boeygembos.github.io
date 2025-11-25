export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Boeygem Bos</h3>
            <p>Een plek om te leren, ontdekken en genieten van de natuur.</p>
          </div>

          <div className="footer-section">
            <h4>Snelle Links</h4>
            <ul className="footer-links">
              <li><a href="#intro">Intro</a></li>
              <li><a href="#gallery">Fotogalerij</a></li>
              <li><a href="#nature">Natuur</a></li>
              <li><a href="#bosklas">Bosklas</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Meer informatie volgt binnenkort</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Boeygem Bos. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
