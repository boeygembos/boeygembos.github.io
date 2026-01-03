import { useState } from 'react'
import { Image } from 'lucide-react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import galleryData from '../../content/gallery.json'

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const images = galleryData.photos.map(photo => ({
    src: photo.src,
    alt: photo.alt,
    title: photo.caption
  }))

  const openLightbox = (index: number) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fotogalerij</h2>
          <p className="section-subtitle">Bekijk de schoonheid van Boeygem Bos door de seizoenen heen</p>
        </div>
        <div className="gallery-grid">
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="gallery-item stagger-item" onClick={() => openLightbox(index)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-center mt-l">
          <button className="btn" onClick={() => openLightbox(0)}>
            <Image size={20} />
            Bekijk Alle Foto's
          </button>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images}
        index={photoIndex}
      />
    </section>
  )
}
