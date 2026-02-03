import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.png"
                    alt="Global Logistics Ship"
                    className="w-full h-full object-cover scale-105"
                />
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-brand-black/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="max-w-4xl text-left pt-20">


                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                        Connecting <br />
                        <span className="gradient-text">India's Finest</span><br />
                        to the World
                    </h1>

                    <p className="mt-6 text-xl text-gray-200 mb-12 font-light max-w-2xl leading-relaxed">
                        Premium quality <span className="text-brand-orange font-medium">spices</span>, <span className="text-brand-green font-medium">agricultural products</span>, and textiles delivered with reliability and speed across the globe.
                    </p>

                    <div className="flex flex-row items-center gap-4">
                        <motion.a
                            href="#products"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary px-6 py-4 md:px-8 rounded-full font-bold text-base md:text-lg flex items-center gap-2 shadow-lg shadow-brand-orange/20 whitespace-nowrap"
                        >
                            Explore Products <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-6 py-4 md:px-8 rounded-full font-bold text-base md:text-lg text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2 whitespace-nowrap"
                        >
                            Contact Us <ChevronRight size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
