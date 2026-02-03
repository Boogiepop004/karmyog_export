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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-left">


                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Connecting <br />
                        <span className="gradient-text">India's Finest</span><br />
                        to the World
                    </h1>

                    <p className="mt-4 text-xl text-gray-300 mb-10 font-light max-w-2xl leading-relaxed">
                        Premium quality spices, textiles, and agricultural products delivered with reliability and speed across the globe.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#products"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg shadow-brand-cyan/20 cursor-pointer"
                        >
                            Explore Products <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
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
