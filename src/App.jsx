import { BrowserRouter } from 'react-router-dom';
import { lazy, useState, useEffect, Suspense } from 'react';
import './App.css';
const AppRoutes = lazy(() => import('./routes/AppRoutes')); 
const Footer = lazy(() => import('./components/Footer')); 
const Navbar = lazy(() => import('./components/navbar/Navbar')); 
const ScrollToTop = lazy(() => import('./components/ScrollToTop')); 
const CallToAction = lazy(() => import('./components/CallToAction')); 
const AppSpinner = lazy(() => import('./components/AppSpinner')); 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Change the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Suspense fallback={
      loading ? (<AppSpinner />) : ( <AppSpinner />)
    }>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <CallToAction />
        <Footer />
        {/* <MobileMenu /> */}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
