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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-10 md:mt-0">
                <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">


                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                        Connecting <br />
                        <span className="gradient-text">India's Finest</span><br />
                        to the World
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200 mb-12 font-light max-w-2xl leading-relaxed mx-auto md:mx-0 drop-shadow-md">
                        Premium quality spices, textiles, and agricultural products delivered with reliability and speed across the globe.
                    </p>

                    <div className="flex flex-row justify-center md:justify-start gap-4 items-center w-full">
                        <motion.a
                            href="#products"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary px-8 py-4 rounded-full font-bold text-base md:text-lg flex justify-center items-center gap-2 shadow-lg shadow-brand-cyan/20 whitespace-nowrap"
                        >
                            Explore Products <ArrowRight size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
