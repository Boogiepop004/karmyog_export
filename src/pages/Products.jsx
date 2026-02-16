import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-brand-black text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-cyan/20 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Explore our diverse range of premium Indian exports. Sourced locally, delivered globally.
                    </p>
                </div>
            </div>

            {/* Product Grid (Detailed Mode) */}
            <ProductGrid variant="detailed" />
        </div>
    );
};

export default Products;
