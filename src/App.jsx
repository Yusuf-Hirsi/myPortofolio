
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Header from './componants/Header'
// import Projects from './components/Projects'
import Service from './pages/Service'
import Skills from './pages/Skiss'
import Projects from './pages/projects'
import Footer from './pages/Footer'

function App() {

  return (
    <div>
      <Header/>
        <Hero />
        <About />
        <Service />
        <Skills/>
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
