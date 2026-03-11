import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import About from "./pages/About"
import './App.css'

function App() {
  return (
    <>
      
      <Router>

        
        <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">University of Baguio</span> 
        <Link to="/">Home</Link>  
        <Link to="/about"> About</Link> 
        <Link to="/services"> Services</Link> 
        <Link to="/contact"> Contact</Link>
        
     </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
     
    </>
  )
}

export default App
