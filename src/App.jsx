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
import Solutions from './pages/Solutions'
import { solutions } from './data/solutions'
import SolutionsDetails from './components/Solutions/SolutionsDetails'
import { ScrollToTop } from './components/ScrollToTop'
import Create from './pages/Admin/Create'
import Articles from './pages/Admin/Articles'
import Shop from './pages/Shop'

function App() {
  const {data: blogs, error, loading } = UseFetch('https://vabrise-api.onrender.com/api/articles/') 

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/services' element={ <Solutions /> } />
            <Route path='/products' element={ <Shop /> } />
            <Route path='/solutions/:slug' element={ <SolutionsDetails solutions={solutions} /> } />
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
