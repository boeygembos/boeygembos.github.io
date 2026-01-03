import { X, Home, BookOpen, Camera, Flower2, Backpack, MapPin } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

export default function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  return (
    <nav className={isOpen ? 'mobile-menu active' : 'mobile-menu'}>
      <div className="mobile-menu-header">
        <div className="repel">
          <h2 className="mobile-menu-title">
            🌲 Boeygem Bos
          </h2>
          <button
            onClick={toggleMenu}
            className="mobile-menu-close"
          >
            <X size={28} color="oklch(0.45 0.05 140)" />
          </button>
        </div>
      </div>
      <div className="py-s">
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
