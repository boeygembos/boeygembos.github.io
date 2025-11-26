import introData from '../../content/intro.json'

export default function IntroSection() {
  return (
    <section id="intro" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{introData.title}</h2>
          <p className="section-subtitle">
            {introData.subtitle}
          </p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="info-card" style={{ padding: '3rem' }}>
            <img
              src={introData.image}
              alt={introData.imageAlt}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem'
              }}
            />
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              {introData.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
