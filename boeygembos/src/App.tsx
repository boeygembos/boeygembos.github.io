import './App.css'
import About from './Components/About'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Header from './Components/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
