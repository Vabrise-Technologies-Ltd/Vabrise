// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogDetails from './components/Blog/BlogDetails'
import Footer from './components/Helpers/Footer'
import Navbar from './components/Helpers/Navbar'
import UseFetch from './components/UseFetch'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import { solutions } from './data/solutions'
import SolutionsDetails from './components/Solutions/SolutionsDetails'
import { ScrollToTop } from './components/Helpers/ScrollToTop'
import Create from './pages/Admin/Create'
import Articles from './pages/Admin/Articles'
import Shop from './pages/Shop'
import ProductsDetails from './components/Shop/ProductsDetails'
// import Topnavbar from './components/Helpers/TopNavbar'
import MobileMenu from './components/Helpers/MobileMenu'

function App() {
  const {data: blogs, error, loading } = UseFetch('https://vabrise-api.onrender.com/api/articles/') 
  const { data: products } = UseFetch('https://vabrise-api.onrender.com/api/products') 
  // const { data: products } = UseFetch('http://localhost:8000/api/products') 
  console.log(products)
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        {/* <Topnavbar /> */}
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/solutions' element={ <Solutions /> } />
            <Route path='/products' element={ <Shop products={products} error={error} loading={loading} /> } />
            <Route path='/products/:slug' element={ <ProductsDetails products={products} error={error} loading={loading} /> } />
            <Route path='/solutions/:slug' element={ <SolutionsDetails solutions={solutions} /> } />
            <Route path='/articles' element={ <Blog blogs={blogs} error={error} loading={loading} /> } />
            <Route path='/articles/:slug' element={ <BlogDetails blogs={blogs} error={error} loading={loading} /> } />
            <Route path='/contact' element={ <Contact /> } />

            <Route path='/admin/create' element={ <Create /> } />
            <Route path='/admin/' element={ <Articles /> } />
        </Routes>
        <Footer />
        <MobileMenu />
      </BrowserRouter>


    </div>
  )
}

export default App
