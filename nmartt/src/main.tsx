 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './Header';
import Hero from './Hero';
import AboutUs from './Aboutus';
import Product from './Product';
import Signup from './Signup';
import Login from './Login';
import Footer from './Footer';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <AboutUs />
            <Product />
            <Footer/>
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
 
)
 