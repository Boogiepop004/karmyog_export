import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Enquiry from './pages/Enquiry';
import Fruits from './pages/Fruits';
import Spices from './pages/Spices';
import Vegetables from './pages/Vegetables';
import Textile from './pages/Textile';
import Rice from './pages/Rice';
import Products from './pages/Products';
import About from './pages/About';
import Process from './pages/Process';
import Certifications from './pages/Certifications';

import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="min-h-screen bg-brand-white text-gray-900 relative">
            <ScrollToTop />
            <div className="noise-overlay"></div>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <ProductGrid variant="simple" />
                            <Features />
                        </>
                    } />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/enquiry" element={<Enquiry />} />
                    <Route path="/products/fruits" element={<Fruits />} />
                    <Route path="/products/vegetables" element={<Vegetables />} />
                    <Route path="/products/spices" element={<Spices />} />
                    <Route path="/products/textile" element={<Textile />} />
                    <Route path="/products/rice" element={<Rice />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
