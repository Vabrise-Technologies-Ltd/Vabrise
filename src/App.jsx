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

function App() {
  const {data: posts, error, loading } = UseFetch('https://jsonplaceholder.typicode.com/posts') 

  const blogs = posts.data
  // console.log(blogs)
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
            <Route path='/blog' element={ <Blog blogs={blogs} error={error} loading={loading} /> } />
            <Route path='/blogs/:id' element={ <BlogDetails blogs={blogs} error={error} loading={loading} /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App
