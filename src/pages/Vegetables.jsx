import React, { useState } from 'react';
import { motion } from 'framer-motion';

const vegetables = [
    { id: 1, name: 'Onion (Nashik Red, Pink)', image: '/images/product-onion.jpg' },
    { id: 2, name: 'Elephant Yam (Suran - Gajendra)', image: '/images/vegetables/product_elephant_yam_suran.png' },
    { id: 3, name: 'Green Chilli (G4, Sitara)', image: '/images/vegetables/product_green_chilli_g4.png' },
    { id: 4, name: 'Lime (Kagzi - Thin Skinned)', image: '/images/vegetables/product_lime.png' },
    { id: 7, name: 'Tomato (Vaishali, Rupali)', image: '/images/vegetables/product_tomato.jpg' },
    { id: 9, name: 'Okra (Bhindi)', image: '/images/vegetables/product_okra_bhindi.png' },
    { id: 10, name: 'Bottle Gourd (Loki)', image: '/images/product-bottle-gourd.png' },
    { id: 11, name: 'Bitter Gourd (Dark Green)', image: '/images/product-bitter-gourd.png' },
    { id: 12, name: 'Ridge Gourd (Luffa)', image: '/images/product-ridge-gourd.png' },
    { id: 13, name: 'Ivy Gourd (Tindora)', image: '/images/product-ivy-gourd.jpg' },
    { id: 14, name: 'Cluster Beans (Guar)', image: '/images/product-cluster-beans.jpg' },
    { id: 15, name: 'Drumstick (PKM-1, ODC)', image: '/images/product-drumstick.png' },
];

const Vegetables = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVegetables = vegetables.filter(veg =>
        veg.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-20 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Vegetables
                        </h1>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search vegetables..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-4 pr-4 py-3 bg-white border-b-2 border-gray-100 hover:border-gray-300 focus:border-brand-black w-full md:w-64 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {filteredVegetables.map((veg, index) => (
                        <div
                            key={veg.id}
                            className="group cursor-default"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-6 relative shadow-sm group-hover:shadow-md transition-all duration-300">
                                <img
                                    src={veg.image}
                                    alt={veg.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-lg font-bold text-gray-900 tracking-wide uppercase">
                                    {veg.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredVegetables.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400">No vegetables found</p>
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
                                    'Corrugated boxes (3kg, 5kg, 10kg)',
                                    'Wooden crates for bulk',
                                    'Modified atmosphere packaging',
                                    'Retail-ready punnets',
                                    'Custom branding available'
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

                        {/* Quality Standards */}
                        <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Quality Standards</h3>
                            <ul className="space-y-4">
                                {[
                                    'GLOBAL GAP certified farms',
                                    'Pesticide residue testing',
                                    'Size grading and sorting',
                                    'Pre-cooling facilities',
                                    'Phytosanitary certification'
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

export default Vegetables;
