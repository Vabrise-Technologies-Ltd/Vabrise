import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogDetails from './components/Blog/BlogDetails'
import Footer from './components/Helpers/Footer'
import Navbar from './components/Helpers/Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import { solutions } from './data/solutions'
import SolutionsDetails from './components/Solutions/SolutionsDetails'
import { ScrollToTop } from './components/Helpers/ScrollToTop'
import Shop from './pages/Shop'
import ProductsDetails from './components/Shop/ProductsDetails'
import Sidebar from "./components/Helpers/Sidebar"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
          <Navbar />
          <Sidebar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/solutions' element={ <Solutions /> } />
            <Route path='/products' element={ <Shop /> } />
            <Route path='/products/:slug' element={ <ProductsDetails /> } />
            <Route path='/solutions/:slug' element={ <SolutionsDetails solutions={solutions} /> } />
            <Route path='/articles' element={ <Blog /> } />
            <Route path='/articles/:slug' element={ <BlogDetails /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
        <Footer />
        {/* <MobileMenu /> */}
      </BrowserRouter>


    </div>
  )
}

export default App
