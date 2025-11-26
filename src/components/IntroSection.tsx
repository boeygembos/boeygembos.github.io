export default function IntroSection() {
  return (
    <section id="intro" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Hoe Het Bos Er Kwam</h2>
          <p className="section-subtitle">
            Het verhaal van Boeygem Bos begint jaren geleden, toen een visie om natuur terug te brengen naar onze gemeenschap werkelijkheid werd. Ontdek de reis van een leeg veld naar een bloeiend ecosysteem.
          </p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="info-card" style={{ padding: '3rem' }}>
            <img
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=500&fit=crop"
              alt="Bos geschiedenis"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem'
              }}
            />
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              Boeygem Bos is meer dan een verzameling bomen. Het is een levend klaslokaal, een speelplaats voor ontdekking,
              en een thuis voor talloze planten en dieren. Door de jaren heen is het bos gegroeid en veranderd, met hulp
              van vrijwilligers, scholen en de gemeenschap.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
