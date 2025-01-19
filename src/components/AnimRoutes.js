import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import {AnimatePresence } from 'framer-motion';

import { Routes, Route, useLocation } from 'react-router-dom';
import Gallery1 from '../pages/Gallery1';

const AnimRoutes = () => {
  const location = useLocation();
  return (
  <AnimatePresence initial={true} mode='wait'>
    <Routes key={location.pathname} location={location}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path ="/gallery1" element={<Gallery1/>}/>
  </Routes>
  </AnimatePresence>);
};

export default AnimRoutes;
