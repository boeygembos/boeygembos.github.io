export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&h=400&fit=crop', alt: 'Bospad' },
    { url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&h=400&fit=crop', alt: 'Bomen' },
    { url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop', alt: 'Natuur' },
    { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', alt: 'Wilde bloemen' },
    { url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&h=400&fit=crop', alt: 'Bos landschap' },
    { url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&h=400&fit=crop', alt: 'Bos sfeer' }
  ]

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fotogalerij</h2>
          <p className="section-subtitle">Ontdek de schoonheid van Boeygem Bos</p>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
