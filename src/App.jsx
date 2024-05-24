import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogDetails from './components/Blog/BlogDetails'
import Footer from './components/Utils/Footer'
import Navbar from './components/Utils/Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import { solutions } from './data/solutions'
import SolutionsDetails from './components/Solutions/SolutionsDetails'
import { ScrollToTop } from './components/Utils/ScrollToTop'
import Shop from './pages/Shop'
import ProductsDetails from './components/Shop/ProductsDetails'
import Sidebar from "./components/Utils/Sidebar"

function App() {
  // tawk chat intergration
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/664b4012981b6c56477286b7/1huav4jup';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();

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
