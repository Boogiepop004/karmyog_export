import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Wheat, ChefHat, Shirt, Mountain, Citrus, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
    { id: 1, name: 'Spices', category: 'Spices', image: '/images/home/spices_cover.png', link: '/products/spices', desc: '' }, // Updated to Image Card
    { id: 2, name: 'Vegetables', category: 'Agriculture', image: '/images/home/vegetables_cover.png', link: '/products/vegetables', desc: '' },
    { id: 3, name: 'Fruits', category: 'Agriculture', image: '/images/home/fruits_cover.png', link: '/products/fruits', desc: '' },
    { id: 4, name: 'Basmati & Non-Basmati Rice', category: 'Grains', image: '/images/rice-category.jpg', link: '/products/rice', desc: '' }, // Image Card
    { id: 5, name: 'Textile', category: 'Garments', image: '/images/home/textiles_cover.png', link: '/products/textile', desc: '' }, // Image Card
];

const ProductGrid = () => {
    const navigate = useNavigate();

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            onClick={() => product.link && navigate(product.link)}
                            className={`rounded-[2rem] hover:shadow-soft transition-all duration-300 group relative overflow-hidden ${product.link ? 'cursor-pointer' : ''} ${product.image ? 'aspect-[4/3] md:aspect-auto' : 'bg-white p-8 border border-transparent hover:border-brand-cyan/20'}`}
                        >
                            {product.image ? (
                                // Image Card Layout
                                <>
                                    <div className="absolute inset-0">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className={`absolute inset-0 transition-colors duration-500 ${product.name === 'Spices'
                                            ? 'bg-black/10 group-hover:bg-transparent'  // Brighter for Spices
                                            : 'bg-black/20 group-hover:bg-black/10'     // Standard for others
                                            }`}></div>
                                    </div>
                                    <div className="relative h-full flex flex-col justify-between p-8 text-white min-h-[280px]">
                                        <h3 className="text-3xl font-bold tracking-tight">{product.name}</h3>
                                        <div className="mt-auto">
                                            <span className="text-sm font-medium tracking-widest uppercase border-b border-white/50 pb-0.5 group-hover:border-white transition-all opacity-0 group-hover:opacity-100 duration-500 translate-y-2 group-hover:translate-y-0">See</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                // Icon Card Layout
                                <>
                                    <div className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform`}>
                                        {product.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                    <p className="text-gray-500 mb-6 leading-relaxed">{product.desc}</p>
                                </>
                            )}

                            <div className="flex items-center text-brand-cyan font-semibold group-hover:gap-2 transition-all">
                                <span>Learn more</span> <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Decorative gradient blob */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-brand-cyan/10 to-brand-teal/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
