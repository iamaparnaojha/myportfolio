import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen text-gray-200">
      <div className="background-animation" />
      <Header />
      <Navigation />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="glass-dark text-gray-400 text-center py-10 border-t border-white/5">
        <p className="text-sm tracking-widest uppercase mb-2">Designed & Built by</p>
        <p className="text-xl font-bold text-white mb-4">Aparna Ojha</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
