import { useState } from 'react'
import { Image } from 'lucide-react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import galleryData from '../../content/gallery.json'

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)

  const images = galleryData.photos.map(photo => ({
    src: photo.src,
    alt: photo.alt,
    title: photo.caption
  }))

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fotogalerij</h2>
          <p className="section-subtitle">Bekijk de schoonheid van Boeygem Bos door de seizoenen heen</p>
        </div>
        <div className="gallery-grid">
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="gallery-item stagger-item">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn-secondary" onClick={() => setIsOpen(true)}>
            <Image size={20} />
            Bekijk Alle Foto's
          </button>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images}
      />
    </section>
  )
}
