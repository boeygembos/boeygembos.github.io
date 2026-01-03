import { Menu, Home, BookOpen, Camera, Flower2, Backpack, MapPin } from 'lucide-react'

interface HeaderProps {
  toggleMenu: () => void
}

export default function Header({ toggleMenu }: HeaderProps) {
  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-icon">🌲</div>
          <h1 className="logo-text">Boeygem Bos</h1>
        </div>

        <nav className="desktop-nav">
          <a href="#home" className="desktop-nav-item">
            <Home size={20} />
            <span>Home</span>
          </a>
          <a href="#intro" className="desktop-nav-item">
            <BookOpen size={20} />
            <span>Intro</span>
          </a>
          <a href="#gallery" className="desktop-nav-item">
            <Camera size={20} />
            <span>Galerij</span>
          </a>
          <a href="#nature" className="desktop-nav-item">
            <Flower2 size={20} />
            <span>Natuur</span>
          </a>
          <a href="#bosklas" className="desktop-nav-item">
            <Backpack size={20} />
            <span>Bosklas</span>
          </a>
          <a href="#contact" className="desktop-nav-item">
            <MapPin size={20} />
            <span>Contact</span>
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
        >
          <Menu size={32} color="oklch(0.48 0.12 150)" />
        </button>
      </div>
    </header>
  )
}
