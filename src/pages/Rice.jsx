import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const riceProducts = [
    { id: 1, name: '1121 Basmati Rice (Creamy Sella, Steam)', image: '/images/product-basmati-1121.jpg' },
    { id: 2, name: 'IR-64 Rice (Parboiled, Raw 5%)', image: '/images/product-ir64-rice.png' },
    { id: 3, name: '1509 Basmati Rice (Golden Sella)', image: '/images/product-basmati-1509.jpg' },
    { id: 4, name: 'Sona Masoori Rice (Short Grain)', image: '/images/product-sona-masoori.jpg' },
    { id: 5, name: 'Pusa Basmati Rice (Raw, Steam)', image: '/images/product-pusa-basmati.png' },
    { id: 6, name: 'Ponni Rice (Thanjavur Variety)', image: '/images/product-ponni-rice.jpg' },
    { id: 7, name: 'Traditional Basmati Rice (Dehraduns)', image: '/images/product-traditional-basmati.png' },
    { id: 8, name: 'Broken Rice (100% Broken - A1)', image: '/images/product-broken-rice.jpg' },
];

const Rice = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = riceProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-20 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Basmati & Non-Basmati Rice
                        </h1>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search rice..."
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
                        {/* Packaging Options */}
                        <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Packaging Options</h3>
                            <ul className="space-y-4">
                                {[
                                    'PP bags (5kg, 10kg, 25kg, 50kg)',
                                    'Jute bags for traditional markets',
                                    'Non-woven bags with handles',
                                    'Retail packs (1kg, 2kg, 5kg)',
                                    'Custom branded packaging'
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

                        {/* Quality Parameters */}
                        <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Quality Parameters</h3>
                            <ul className="space-y-4">
                                {[
                                    'Grain length: 7.0mm+ (Basmati)',
                                    'Moisture: 12.5% max',
                                    'Broken: 1% to 5% grades',
                                    'No artificial polishing',
                                    'Aged for 12-24 months'
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

export default Rice;
