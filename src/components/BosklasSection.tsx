import { CheckCircle, ArrowRight } from 'lucide-react'
import bosklasData from '../../content/bosklas.json'

export default function BosklasSection() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <section id="bosklas" style={{
        background: 'linear-gradient(135deg, oklch(0.92 0.03 130) 0%, oklch(0.95 0.02 120) 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: '3rem 2rem',
        margin: '6rem auto',
        maxWidth: '1400px'
      }}>
      <div className="bosklas-content">
        <div>
          <img
            src={bosklasData.photos[0].src}
            alt={bosklasData.photos[0].caption}
            style={{
              width: '100%',
              height: '450px',
              objectFit: 'cover',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-xl)'
            }}
          />
        </div>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            {bosklasData.title}
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            {bosklasData.description}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            {bosklasData.features.map((feature, index) => (
              <li key={index} style={{ padding: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle size={24} color="oklch(0.48 0.12 150)" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
          <button className="btn-secondary">
            <ArrowRight size={20} />
            Meer Over Bosklas
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}
