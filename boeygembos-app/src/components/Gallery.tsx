import { Image } from 'lucide-react'
import galleryData from '../../content/gallery.json'

export default function Gallery() {
  const images = galleryData.photos.map(photo => ({
    url: photo.src,
    alt: photo.alt,
    caption: photo.caption
  }))

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
