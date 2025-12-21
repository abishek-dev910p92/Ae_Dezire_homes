import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  const [page, setPage] = useState(getPage())

  useEffect(() => {
    const onHashChange = () => setPage(getPage())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Header current={page} />
      <main className="pt-20">
        {page === 'home' && <Home />}
        {page === 'services' && <Services />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer />
    </>
  )
}

function getPage() {
  const key = window.location.hash.replace('#', '')
  return ['home', 'services', 'about', 'contact'].includes(key) ? key : 'home'
}

export default App
