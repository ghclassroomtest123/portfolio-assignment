import Footer from './components/footer'
import Header from './components/header'
import Experience from './components/experience'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text)]">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
