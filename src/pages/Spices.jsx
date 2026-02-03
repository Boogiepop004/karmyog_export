import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const spices = [
    { id: 1, name: 'Chilli', image: '/images/spices/product_chilli.png' },
    { id: 2, name: 'Cumin (Jeera)', image: '/images/spices/product_cumin.png' },
    { id: 3, name: 'Black Pepper', image: '/images/spices/product_black_pepper.png' },
    { id: 4, name: 'Fenugreek (Methi)', image: '/images/spices/product_fenugreek.jpg' },
    { id: 5, name: 'Coriander (Dhania)', image: '/images/spices/product_coriander.png' },
    { id: 6, name: 'Mustard Seeds (Sarson/Rai)', image: '/images/spices/product_mustard.jpg' },
    { id: 7, name: 'Fennel (Saunf)', image: '/images/spices/product_fennel.jpg' },
    { id: 8, name: 'Cloves (Laung)', image: '/images/spices/product_cloves.png' },
    { id: 9, name: 'Garlic (Fresh & Dehydrated)', image: '/images/spices/product_garlic.png' },
    { id: 10, name: 'Turmeric', image: '/images/spices/product_turmeric.jpg' },
];

const Spices = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSpices = spices.filter(spice =>
        spice.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <div>
                        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-brand-black mb-4 transition-colors">
                            <ArrowLeft size={20} className="mr-2" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Spices
                        </h1>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search spices..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-4 py-3 bg-white border-b-2 border-gray-100 hover:border-gray-300 focus:border-brand-black w-full md:w-64 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {filteredSpices.map((spice, index) => (
                        <div
                            key={spice.id}
                            className="group cursor-default"
                        >
                            {/* Image Container - Consistent Sizing */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-6 relative shadow-sm group-hover:shadow-md transition-all duration-300">
                                <img
                                    src={spice.image}
                                    alt={spice.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-lg font-bold text-gray-900 tracking-wide uppercase">
                                    {spice.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredSpices.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400">No spices found</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Spices;
