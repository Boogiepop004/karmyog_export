import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const fruits = [
    { id: 1, name: 'Pomegranate (Bhagawa, Ganesh)', image: '/images/fruits/product_pomegranate_new.png' },
    { id: 2, name: 'Dry Semi Husked Coconut (Pollachi)', image: '/images/fruits/product_coconut_dry_real.png' }, // User provided real image
    { id: 3, name: 'G9 Banana (Cavendish Green)', image: '/images/fruits/product_banana_g9_green_real.png' }, // User provided real image
    { id: 4, name: 'G9 Banana (Cavendish Yellow)', image: '/images/fruits/product_banana_g9_yellow_new.jpg' },
    { id: 5, name: 'Banana Leaf (Fresh Export Quality)', image: '/images/fruits/product_banana_leaf_real.png' },
    { id: 6, name: 'Green Grapes (Thompson Seedless, Sonaka)', image: '/images/fruits/product_grapes_green_new.png' },
    { id: 7, name: 'Red Globe Grapes (Jumbo)', image: '/images/fruits/product_grapes_red_new.png' },
    { id: 8, name: 'Black Grapes (Sharad Seedless)', image: '/images/fruits/product_grapes_black_new.png' },
    { id: 9, name: 'Guava (L-49, Allahabad Safeda)', image: '/images/fruits/product_guava_new.jpg' },
    { id: 10, name: 'Badami Mango (Alphonso of South)', image: '/images/fruits/product_mango_badami_1769750981536.png' },
    { id: 11, name: 'Alphonso Mango (Devgad, Ratnagiri)', image: '/images/fruits/product_mango_alphonso_1769750996775.png' },
    { id: 12, name: 'Rajapuri Mango (Premium Large)', image: '/images/fruits/product_mango_rajapuri_1769751012387.png' },
    { id: 13, name: 'Yelakki Banana (Tiny, Sweet)', image: '/images/fruits/product_banana_yb_1769751030918.png' },
    { id: 14, name: 'Rasthali Banana (Silk)', image: '/images/fruits/product_banana_rk_1769751047065.png' },
    { id: 15, name: 'Indian Gooseberry (Amla - Banarasi)', image: '/images/fruits/product_gooseberry_1769751063015.png' },
    { id: 16, name: 'Pineapple', image: '/images/fruits/product_pineapple.png' },
    { id: 17, name: 'Watermelon', image: '/images/fruits/product_watermelon.jpg' },
];

const Fruits = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-20 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Simple & Clean */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Fruits
                        </h1>
                    </div>

                    {/* Search - Minimal */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-4 py-3 bg-white border-b-2 border-gray-100 hover:border-gray-300 focus:border-brand-black w-full md:w-64 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Grid - Uniform Sizing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {filteredFruits.map((fruit, index) => (
                        <div
                            key={fruit.id}
                            className="group cursor-default"
                        >
                            {/* Image Container - OBJECT COVER for alignment */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-6 relative shadow-sm group-hover:shadow-md transition-all duration-300">
                                <img
                                    src={fruit.image}
                                    alt={fruit.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content - Simple Name */}
                            <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-lg font-bold text-gray-900 tracking-wide uppercase">
                                    {fruit.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredFruits.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400">No fruits found</p>
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

export default Fruits;
