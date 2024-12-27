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
    }, 2000); // Change the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  // Disable right-click
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }

  document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
      event.keyCode === 123 ||
      ctrlShiftKey(e, 'I') ||
      ctrlShiftKey(e, 'J') ||
      ctrlShiftKey(e, 'C') ||
      (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
      return false;
  };
  
  return (
    <div className='bg-white'>
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
    </div>
  );
}

export default App;
