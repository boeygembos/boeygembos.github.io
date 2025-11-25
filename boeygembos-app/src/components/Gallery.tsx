import { Image } from 'lucide-react'

export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=300&fit=crop', alt: 'Bos foto 1' },
    { url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&h=300&fit=crop', alt: 'Bos foto 2' },
    { url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=300&fit=crop', alt: 'Bos foto 3' },
    { url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop', alt: 'Bos foto 4' },
    { url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=300&fit=crop', alt: 'Bos foto 5' }
  ]

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fotogalerij</h2>
          <p className="section-subtitle">Bekijk de schoonheid van Boeygem Bos door de seizoenen heen</p>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item stagger-item">
              <img src={image.url} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn-secondary">
            <Image size={20} />
            Bekijk Alle Foto's
          </button>
        </div>
      </div>
    </section>
  )
}
