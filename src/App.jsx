import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductPage from "./components/ProductPage"
import RegisterPage from "./components/RegisterPage"
import ContactPage from "./components/ContactPage"
import AboutPage from './components/About';
import GalleryPage from './components/GalleryPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;