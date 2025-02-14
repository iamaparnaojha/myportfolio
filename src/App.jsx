import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main>
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2024 Aparna Ojha. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
