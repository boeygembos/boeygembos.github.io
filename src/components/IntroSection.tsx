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
        <div className="max-w-prose mx-auto" style={{ maxWidth: '900px' }}>
          <div className="card p-l">
            <img
              src={introData.image}
              alt={introData.imageAlt}
              className="w-full radius-md mb-m"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <p className="section-description">
              {introData.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
