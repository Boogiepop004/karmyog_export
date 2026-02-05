import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Wheat, ChefHat, Shirt, Mountain, Citrus, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Spices',
        category: 'Spices',
        image: '/images/home/spices_cover.png',
        link: '/products/spices',
        desc: 'Premium, aromatic spices sourced directly from Indian farms. Available in whole and ground forms with strict moisture and quality control.'
    },
    {
        id: 2,
        name: 'Vegetables',
        category: 'Agriculture',
        image: '/images/home/vegetables_cover.png',
        link: '/products/vegetables',
        desc: 'Fresh vegetables, export-grade produce sourced from premium farms. Cold chain support, custom grading, and flexible packaging options available.'
    },
    {
        id: 3,
        name: 'Fruits',
        category: 'Agriculture',
        image: '/images/home/fruits_cover.png',
        link: '/products/fruits',
        desc: 'Fresh fruits, export-grade produce sourced from premium farms. Cold chain support, custom grading, and flexible packaging options available.'
    },
    {
        id: 4,
        name: 'Basmati & Non-Basmati Rice',
        category: 'Grains',
        image: '/images/rice-category.jpg',
        link: '/products/rice',
        desc: 'Long-grain aromatic Basmati and versatile Non-Basmati rice varieties. Multiple grades and packaging options for all markets.'
    },
    {
        id: 5,
        name: 'Textile',
        category: 'Garments',
        image: '/images/home/textiles_cover.png',
        link: '/products/textile',
        desc: 'High-quality cotton and textile raw materials processed for industrial use. Export-grade with full documentation.'
    },
];

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => product.link && navigate(product.link)}
            className={`rounded-[2rem] hover:shadow-soft transition-all duration-300 group relative overflow-hidden ${product.link ? 'cursor-pointer' : ''} ${product.image ? 'aspect-[4/3] md:aspect-auto' : 'bg-white p-8 border border-transparent hover:border-brand-cyan/20'}`}
        >
            {product.image ? (
                // Image Card Layout
                <>
                    <div className="absolute inset-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className={`absolute inset-0 transition-colors duration-500 ${product.name === 'Spices'
                            ? 'bg-black/10 group-hover:bg-transparent'
                            : 'bg-black/20 group-hover:bg-black/10'
                            }`}></div>
                    </div>

                    <div className="relative h-full flex flex-col justify-between p-8 text-white min-h-[280px] z-10 pb-36">
                        <h3 className="text-3xl font-bold tracking-tight drop-shadow-md">{product.name}</h3>
                        {/* "See" text removed */}
                    </div>

                    {/* Info Card - Permanent & Auto Height */}
                    <div className={`
                        absolute bottom-0 left-0 right-0 h-auto bg-black/40 backdrop-blur-sm p-6 text-white z-20 flex flex-col justify-center
                    `}>
                        <p className="text-sm md:text-base leading-relaxed font-medium text-gray-200">
                            {product.desc}
                        </p>
                    </div>
                </>
            ) : (
                // Icon Card Layout (Fallback for non-image items if any)
                <>
                    <div className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform`}>
                        {product.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">{product.desc}</p>
                </>
            )}

            <div className="flex items-center text-brand-cyan font-semibold group-hover:gap-2 transition-all">
                {/* Removed bottom 'Learn More' link to avoid clutter with new info card */}
            </div>
        </div>
    );
};

const DesktopProductRow = ({ product, index }) => {
    const navigate = useNavigate();
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 group cursor-pointer`}
            onClick={() => product.link && navigate(product.link)}>

            {/* Text Side */}
            <div className="flex-1 space-y-4 md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-brand-cyan transition-colors duration-300">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    {product.desc}
                </p>
                <div className="flex items-center text-brand-gold font-semibold group-hover:gap-2 transition-all pt-2">
                    <span className="uppercase tracking-widest text-sm">View Products</span>
                    <ArrowRight size={20} />
                </div>
            </div>

            {/* Image Box Side */}
            <div className="flex-1 w-full">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg group-hover:shadow-soft transition-all duration-500">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
            </div>
        </div>
    );
};

const ProductGrid = () => {
    return (
        <section id="products" className="py-24 bg-brand-gray/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h4 className="text-brand-cyan font-bold tracking-wide uppercase text-sm mb-2">What We Do</h4>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Exporting Excellence <br /> Across Borders
                        </h2>
                    </div>
                </div>

                {/* Mobile Grid View */}
                <div className="grid grid-cols-1 gap-8 md:hidden">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Desktop Zig-Zag View */}
                <div className="hidden md:flex flex-col gap-12">
                    {products.map((product, index) => (
                        <DesktopProductRow key={product.id} product={product} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductGrid;
