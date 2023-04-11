// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/services' element={ <Services /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
