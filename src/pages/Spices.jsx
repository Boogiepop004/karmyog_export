import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const spices = [
    { id: 1, name: 'Chilli (S4 Sanam, Teja S17, Byadgi)', image: '/images/spices/product_chilli.png' },
    { id: 2, name: 'Cumin (Singapore, European Quality)', image: '/images/spices/product_cumin.png' },
    { id: 3, name: 'Black Pepper (Malabar, Tellicherry - 500GL)', image: '/images/spices/product_black_pepper.png' },
    { id: 4, name: 'Fenugreek (Methi - Sortex Clean)', image: '/images/spices/product_fenugreek.jpg' },
    { id: 5, name: 'Coriander (Eagle, Scooter, Indori)', image: '/images/spices/product_coriander.png' },
    { id: 6, name: 'Mustard Seeds (Black/Yellow/Brown)', image: '/images/spices/product_mustard.jpg' },
    { id: 7, name: 'Fennel (Saunf - Singapore/Europe)', image: '/images/spices/product_fennel.jpg' },
    { id: 8, name: 'Cloves (Lal Pari, Hand Picked)', image: '/images/spices/product_cloves.png' },
    { id: 9, name: 'Garlic (Ooty, Desi - Fresh/Dehydrated)', image: '/images/spices/product_garlic.png' },
    { id: 10, name: 'Turmeric Fingers (Salem, Nizamabad)', image: '/images/spices/product_turmeric.jpg' },
    { id: 11, name: 'Ginger (Fresh Washed/Dry)', image: '/images/spices/product_ginger.jpg' },
    { id: 12, name: 'Turmeric Root (Mother Bulb)', image: '/images/spices/product_turmeric_root.jpg' },
];

const Spices = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSpices = spices.filter(spice =>
        spice.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-20 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
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

                {/* Additional Info Section */}
                <div className="mt-20 border-t border-gray-100 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Packaging Options */}
                        <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Packaging Options</h3>
                            <ul className="space-y-4">
                                {[
                                    'PP/HDPE bags (25kg, 50kg)',
                                    'Paper bags with poly liner',
                                    'Vacuum sealed retail packs',
                                    'Glass jars for premium range',
                                    'Private label packaging'
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
                                    'Moisture content < 12%',
                                    'Aflatoxin testing',
                                    'Pesticide residue analysis',
                                    'Volatile oil content testing',
                                    'Microbiological testing'
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

export default Spices;
