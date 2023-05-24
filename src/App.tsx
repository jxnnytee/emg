import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaptionCarousel from "./Carousel"
import Hero from "./Hero"
import Navbar from "./Navbar"
import SimpleSidebar from "./Sidebar"
import Footer from "./Footer"
import About from "./About"
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';


function App() {

  return (
    <>
      <Router>
        <Navbar />
       <SimpleSidebar children={undefined} />
       
      
                <Routes>
                  <Route path="/" element={<Hero />} />
                  <Route path="/carousel" element={<CaptionCarousel />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />

                  
                </Routes>
                <Footer />
              </Router>

    </>
  )
}

export default App
