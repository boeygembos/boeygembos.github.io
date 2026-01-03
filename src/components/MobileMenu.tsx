import { X, Home, BookOpen, Camera, Flower2, Backpack, MapPin } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

export default function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  return (
    <nav className={isOpen ? 'mobile-menu active' : 'mobile-menu'}>
      <div style={{ padding: '2rem 1.5rem', borderBottom: '2px solid oklch(0.8 0.04 130)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, color: 'oklch(0.48 0.12 150)', fontSize: '1.5rem' }}>
            🌲 Boeygem Bos
          </h2>
          <button
            onClick={toggleMenu}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          >
            <X size={28} color="oklch(0.45 0.05 140)" />
          </button>
        </div>
      </div>
      <div style={{ padding: '1rem 0' }}>
        <a href="#home" className="nav-item" onClick={toggleMenu}>
          <Home size={24} />
          <span>Home</span>
        </a>
        <a href="#intro" className="nav-item" onClick={toggleMenu}>
          <BookOpen size={24} />
          <span>Intro</span>
        </a>
        <a href="#gallery" className="nav-item" onClick={toggleMenu}>
          <Camera size={24} />
          <span>Galerij</span>
        </a>
        <a href="#nature" className="nav-item" onClick={toggleMenu}>
          <Flower2 size={24} />
          <span>Natuur</span>
        </a>
        <a href="#bosklas" className="nav-item" onClick={toggleMenu}>
          <Backpack size={24} />
          <span>Bosklas</span>
        </a>
        <a href="#contact" className="nav-item" onClick={toggleMenu}>
          <MapPin size={24} />
          <span>Contact</span>
        </a>
      </div>
    </nav>
  )
}
