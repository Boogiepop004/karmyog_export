import React from 'react';
import ProductGrid from '../components/ProductGrid';
import PageHero from '../components/PageHero';

const Products = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Our Products"
                subtitle="Explore our diverse range of premium Indian exports. Sourced locally, delivered globally."
            />

            {/* Product Grid (Detailed Mode) */}
            <ProductGrid variant="detailed" />
        </div>
    );
};

export default Products;
