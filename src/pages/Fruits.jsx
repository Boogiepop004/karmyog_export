import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const fruits = [
    { id: 1, name: 'Pomegranate', image: '/images/fruits/product_pomegranate_new.png' },
    { id: 2, name: 'Dry Semi Husked Coconut', image: '/images/fruits/product_coconut_dry_real.png' }, // User provided real image
    { id: 3, name: 'G9 Banana (Green)', image: '/images/fruits/product_banana_g9_green_real.png' }, // User provided real image
    { id: 4, name: 'G9 Banana (Yellow)', image: '/images/fruits/product_banana_g9_yellow_new.jpg' },
    { id: 5, name: 'Banana Leaf', image: '/images/fruits/product_banana_leaf_new.jpg' },
    { id: 6, name: 'Green Grapes', image: '/images/fruits/product_grapes_green_new.png' },
    { id: 7, name: 'Red Globe Grapes', image: '/images/fruits/product_grapes_red_new.png' },
    { id: 8, name: 'Black Grapes', image: '/images/fruits/product_grapes_black_new.png' },
    { id: 9, name: 'Guava', image: '/images/fruits/product_guava_new.jpg' },
    { id: 10, name: 'Badami Mango', image: '/images/fruits/product_mango_badami_1769750981536.png' },
    { id: 11, name: 'Alphonso Mango', image: '/images/fruits/product_mango_alphonso_1769750996775.png' },
    { id: 12, name: 'Rajapuri Mango', image: '/images/fruits/product_mango_rajapuri_1769751012387.png' },
    { id: 13, name: 'YB Banana (Yelakki)', image: '/images/fruits/product_banana_yb_1769751030918.png' },
    { id: 14, name: 'RK Banana (Rasthali)', image: '/images/fruits/product_banana_rk_1769751047065.png' },
    { id: 15, name: 'Indian Gooseberry (Amla)', image: '/images/fruits/product_gooseberry_1769751063015.png' },
];

const Fruits = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-24 pb-16 min-h-screen relative">
            {/* Background Image specific for Fruits page */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
                <img
                    src="/images/fruits_bg_test.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header - Simple & Clean */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <div>
                        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-brand-black mb-4 transition-colors">
                            <ArrowLeft size={20} className="mr-2" /> Back to Home
                        </Link>
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
                        <motion.div
                            key={fruit.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
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
                        </motion.div>
                    ))}
                </div>

                {filteredFruits.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400">No fruits found</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Fruits;
