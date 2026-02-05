import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const textileProducts = [
    { id: 1, name: 'Raw Cotton Bales (Shankar-6, MCU-5)', image: '/images/textile/product_cotton_bales.png' },
    { id: 2, name: 'Cotton Waste (Hard/Soft Waste)', image: '/images/textile/product_cotton_waste.png' },
    { id: 3, name: 'Grey Fabric (Cotton/Polyster)', image: '/images/textile/product_grey_fabric.png' },
    { id: 4, name: 'Cotton Linters (First Cut/Second Cut)', image: '/images/textile/product_cotton_linters.png' },
    { id: 5, name: 'Yarn (Carded, Combed, Open End)', image: '/images/product-yarn.png' },
];

const Textile = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = textileProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-20 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Textile
                        </h1>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search textile..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-4 py-3 bg-white border-b-2 border-gray-100 hover:border-gray-300 focus:border-brand-black w-full md:w-64 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="group cursor-default"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-6 relative shadow-sm group-hover:shadow-md transition-all duration-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-lg font-bold text-gray-900 tracking-wide uppercase">
                                    {product.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400">No products found</p>
                    </div>
                )}

                {/* Additional Info Section */}
                <div className="mt-20 border-t border-gray-100 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Cotton Specifications */}
                        <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Cotton Specifications</h3>
                            <ul className="space-y-4">
                                {[
                                    'Staple length: 28mm to 32mm',
                                    'Micronaire: 3.5 to 4.9',
                                    'Strength: 25+ g/tex',
                                    'Moisture: 8.5% max',
                                    'Trash content: < 4%'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-brand-gold mr-3 mt-1">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Packaging & Shipping */}
                        <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Packaging & Shipping</h3>
                            <ul className="space-y-4">
                                {[
                                    'Pressed bales (165-170 kg)',
                                    'HDPE/PP strapping',
                                    'Container stuffing',
                                    'Fumigation certificate',
                                    'Quality test reports'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-brand-gold mr-3 mt-1">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Textile;
