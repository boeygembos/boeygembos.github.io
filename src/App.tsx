import { useState } from 'react'
import './theme.css'
import './cube.css'
import './styles.css'
import Header from './components/Header'
import Hero from './components/Hero'
import QuickInfo from './components/QuickInfo'
import IntroSection from './components/IntroSection'
import BosklasSection from './components/BosklasSection'
import Gallery from './components/Gallery'
import NatureSection from './components/NatureSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="App">
      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

      <div
        className={menuOpen ? 'menu-overlay active' : 'menu-overlay'}
        onClick={toggleMenu}>
      </div>

      <Header toggleMenu={toggleMenu} />
      <Hero />
      <QuickInfo />
      <IntroSection />
      <BosklasSection />
      <Gallery />
      <NatureSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
