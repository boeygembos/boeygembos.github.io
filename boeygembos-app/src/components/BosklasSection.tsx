import { CheckCircle, ArrowRight } from 'lucide-react'

export default function BosklasSection() {
  return (
    <section id="bosklas" style={{
      background: 'linear-gradient(135deg, oklch(0.92 0.03 130) 0%, oklch(0.95 0.02 120) 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '3rem 2rem',
      margin: '6rem 2rem',
      maxWidth: '1400px'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop"
            alt="Kinderen in het bos"
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
            Bosklas - Leren in de Natuur
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Ons bosklas programma brengt kinderen in contact met de natuur. Van wilgenhutten bouwen tot
            dieren spotten, onze educatieve programma's combineren plezier met leren.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            <li style={{ padding: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle size={24} color="oklch(0.48 0.12 150)" />
              <span>Praktische natuurlessen voor alle leeftijden</span>
            </li>
            <li style={{ padding: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle size={24} color="oklch(0.48 0.12 150)" />
              <span>Begeleiding door ervaren natuurgidsen</span>
            </li>
            <li style={{ padding: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle size={24} color="oklch(0.48 0.12 150)" />
              <span>Creatieve activiteiten en ontdekkingstochten</span>
            </li>
          </ul>
          <button className="btn-secondary">
            <ArrowRight size={20} />
            Meer Over Bosklas
          </button>
        </div>
      </div>
    </section>
  )
}
