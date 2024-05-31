import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes';

// import BlogDetails from './components/Blog/BlogDetails'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import CallToAction from './components/CallToAction'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <CallToAction />
        <Footer />
        {/* <MobileMenu /> */}
      </BrowserRouter>


    </div>
  )
}

export default App
