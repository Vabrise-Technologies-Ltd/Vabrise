import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { solutions } from '../pages/solutions/data';
import Error404 from '../pages/errorPages/Error404';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Home = lazy(() => delay(2000).then(() => import('../pages/home/Home')));
const About = lazy(() => delay(2000).then(() => import('../pages/about/About')));
const Solutions = lazy(() => delay(2000).then(() => import('../pages/solutions/Solutions')));
const Blog = lazy(() => delay(2000).then(() => import('../pages/blogs/Blog')));
const Contact = lazy(() => delay(2000).then(() => import('../pages/contact/Contact')));
const BlogDetails = lazy(() => delay(2000).then(() => import('../pages/blogs/sections/BlogDetails')));
const SolutionsDetails = lazy(() => delay(2000).then(() => import('../pages/solutions/sections/SolutionsDetails')));

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
      </Routes>  );
};

export default AppRoutes;
