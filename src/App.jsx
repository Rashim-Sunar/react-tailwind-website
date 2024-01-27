// 🏷️Images & Source Files: 
// Figma File: https://tinyurl.com/2f6wr2vd
import './App.css'   
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import Footer from './components/shared/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
