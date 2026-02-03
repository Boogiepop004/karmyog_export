import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Clock, Truck, ArrowRight } from 'lucide-react';

const achievements = [
    { id: 1, number: '15+', label: 'Countries Served' },
    { id: 2, number: '500+', label: 'Successful Shipments' },
    { id: 3, number: '100%', label: 'Quality Guarantee' },
    { id: 4, number: '24/7', label: 'Support Available' },
];

const Features = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gray to-transparent opacity-60 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Why Choose Us */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold tracking-wide uppercase text-xs mb-4">
                            About Us
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Bridging Borders with <br />
                            <span className="gradient-text">Trust & Excellence</span>
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            We are a Surat-based merchant exporter dedicated to sourcing the best of India. From fresh agricultural produce to quality textiles, we focus on straightforward, reliable trade. We work directly with producers to ensure quality and handle the logistics so you don't have to.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-brand-cyan/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="text-orange-500 w-6 h-6" />
                            </div>
                            <h4 className="text-gray-900 font-bold text-lg mb-2">Quality Assured</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Rigorous quality checks at every stage of packing.</p>
                        </div>
                        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-brand-cyan/30 transition-colors mt-8 group">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Globe2 className="text-blue-500 w-6 h-6" />
                            </div>
                            <h4 className="text-gray-900 font-bold text-lg mb-2">Global Network</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Strong logistics partners across 5 continents.</p>
                        </div>
                        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-brand-cyan/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Truck className="text-green-500 w-6 h-6" />
                            </div>
                            <h4 className="text-gray-900 font-bold text-lg mb-2">Fast Delivery</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Optimized supply chain for rapid turnaround.</p>
                        </div>
                        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-brand-cyan/30 transition-colors mt-8 group">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Clock className="text-purple-500 w-6 h-6" />
                            </div>
                            <h4 className="text-gray-900 font-bold text-lg mb-2">24/7 Support</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Always available to track and assist.</p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="border-t border-gray-100 pt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center feature-stats">
                        {achievements.map((item, index) => (
                            <div key={index} className="p-4">
                                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{item.number}</div>
                                <div className="text-gray-500 uppercase tracking-wider text-xs font-semibold">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
