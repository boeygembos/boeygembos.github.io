import { useEffect, useRef } from 'react'

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

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welkom in Boeygem Bos</h1>
        <p className="hero-subtitle">Een magisch stukje natuur waar kinderen kunnen ontdekken, leren en spelen</p>
        <div className="hero-buttons">
          <a href="#intro" className="btn btn-primary">Ontdek Ons Verhaal</a>
          <a href="#gallery" className="btn btn-secondary">Bekijk Foto's</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
