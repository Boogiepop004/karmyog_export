import React, { useState } from 'react';
import { motion } from 'framer-motion';

const vegetables = [
    { id: 1, name: 'Onion', image: '/images/vegetables/product_onion.png' },
    { id: 2, name: 'Elephant Yam (Suran)', image: '/images/vegetables/product_elephant_yam_suran.png' },
    { id: 3, name: 'Green Chilli (G4)', image: '/images/vegetables/product_green_chilli_g4.png' },
    { id: 4, name: 'Lime', image: '/images/vegetables/product_lime.png' },
    { id: 7, name: 'Tomato', image: '/images/vegetables/product_tomato.jpg' },
    { id: 9, name: 'Okra (Bhindi)', image: '/images/vegetables/product_okra_bhindi.png' },
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

            </div>
        </div>
    );
};

export default Vegetables;
