import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogDetails from './components/Blog/BlogDetails'
import Footer from './components/Utils/Footer'
import Navbar from './components/Utils/Navbar/Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import { solutions } from './data/solutions'
import SolutionsDetails from './components/Solutions/SolutionsDetails'
import { ScrollToTop } from './components/Utils/ScrollToTop'
import { useContext } from 'react'
import { FetchContext } from './components/Contexts/FetchContext'
import ErrorPage from './components/Utils/ErrorPage'
import CallToAction from './components/Utils/CallToAction'

function App() {
  const { products, errorProducts } = useContext(FetchContext);
  console.log(products)
  
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/solutions' element={ <Solutions /> } />
            <Route path='/solutions/:slug' element={ <SolutionsDetails solutions={solutions} /> } />
            <Route path='/articles' element={ <Blog /> } />
            <Route path='/articles/:slug' element={ <BlogDetails /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='*' element={ <ErrorPage /> } />
        </Routes>
        <CallToAction />
        <Footer />
        {/* <MobileMenu /> */}
      </BrowserRouter>


    </div>
  )
}

export default App
