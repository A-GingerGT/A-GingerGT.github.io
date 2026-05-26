import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
