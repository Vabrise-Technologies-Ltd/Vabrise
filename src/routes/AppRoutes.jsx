// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Solutions from '../pages/solutions/Solutions';
import Blog from '../pages/blogs/Blog';
import Contact from '../pages/contact/Contact';
import BlogDetails from '../pages/blogs/sections/BlogDetails';
import SolutionsDetails from '../pages/solutions/sections/SolutionsDetails';
import { solutions } from '../pages/solutions/data';
import Error404 from '../pages/errorPages/Error404';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/solutions' element={<Solutions />} />
      <Route path='/solutions/:slug' element={<SolutionsDetails solutions={solutions} />} />
      <Route path='/articles' element={<Blog />} />
      <Route path='/articles/:slug' element={<BlogDetails />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
