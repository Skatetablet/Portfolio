import Contact from "./components/Contact"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import './index.css'
import "./components/stylesheet.css"

function App() {
 
  return (
    <div className="bg-slate-400">
      <NavBar />
      <div className="container mx-auto py-4">
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
