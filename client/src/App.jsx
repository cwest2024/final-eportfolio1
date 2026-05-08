import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './styles/main.css'

function App() {
  // This state controls which page is displayed.
  // This keeps the project simple without needing React Router.
  const [currentPage, setCurrentPage] = useState('Home')

  // This function decides which page component to show.
  function renderPage() {
    if (currentPage === 'About') {
      return <About />
    }

    if (currentPage === 'Projects') {
      return <Projects />
    }

    if (currentPage === 'Contact') {
      return <Contact />
    }

    return <Home />
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer />
    </div>
  )
}

export default App