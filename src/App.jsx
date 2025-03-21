import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contactpage from './Components/Contact/Contactpage'
import Header from './Components/header'
import Home from './Components/Home'
import Aboutpage from './Components/About/Aboutpage'
import Estate from './Components/Estate/estate'
import Footer from './Components/footer'
import Leadership from './Components/Leadership/leadership'
import ScrollToTop from './Components/scroll'
import Edubase from './Components/Edubase/Edubase'
import Services from './Components/Services/services'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#040318] h-[7rem] md:h-[7.4rem]">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/estate" element={<Estate />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/edubase" element={<Edubase />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router >
  )
}

export default App
