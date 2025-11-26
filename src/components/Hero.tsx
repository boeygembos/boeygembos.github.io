import { useEffect, useRef } from 'react'
import { Compass, ChevronDown } from 'lucide-react'
import heroData from '../../content/hero.json'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (heroRef.current && scrolled < window.innerHeight) {
        heroRef.current.style.backgroundPositionY = scrolled * 0.3 + 'px'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToIntro = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="hero"
      ref={heroRef}
      style={{
        backgroundImage: `url('${heroData.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{heroData.title}</h1>
        <p className="hero-subtitle">{heroData.subtitle}</p>
        <button className="btn btn-primary" onClick={scrollToIntro}>
          <Compass size={20} />
          {heroData.buttonText}
        </button>
      </div>
      <div className="scroll-indicator">
        <ChevronDown size={40} color="white" style={{ opacity: 0.8 }} />
      </div>
    </section>
  )
}
