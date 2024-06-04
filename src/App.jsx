import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext, useState, useEffect, Suspense } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import CallToAction from './components/CallToAction';
import DefaultSpinner from './components/Spinner';
import AppSpinner from './components/AppSpinner';

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
