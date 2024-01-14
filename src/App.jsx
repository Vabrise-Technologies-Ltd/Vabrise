// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogDetails from './components/Blog/BlogDetails'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import UseFetch from './components/UseFetch'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import { services } from './data/services'
import ServicesDetails from './components/OurServices/ServicesDetails'
import { ScrollToTop } from './components/ScrollToTop'
import Create from './pages/Admin/Create'
import Articles from './pages/Admin/Articles'

function App() {
  const {data: blogs, error, loading } = UseFetch('http://localhost:8000/api/articles') 

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/services' element={ <Services /> } />
            <Route path='/services/:id' element={ <ServicesDetails services={services} /> } />
            <Route path='/articles' element={ <Blog blogs={blogs} error={error} loading={loading} /> } />
            <Route path='/articles/:slug' element={ <BlogDetails blogs={blogs} error={error} loading={loading} /> } />
            <Route path='/contact' element={ <Contact /> } />

            <Route path='/admin/create' element={ <Create /> } />
            <Route path='/admin/' element={ <Articles /> } />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App
