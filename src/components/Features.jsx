import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Clock, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            We are a Surat-based merchant exporter dedicated to sourcing the best of India. From fresh agricultural produce to quality textiles, we focus on straightforward, reliable trade. We work directly with producers to ensure quality and handle the logistics so you don't have to.
                        </p>

                        <Link to="/about" className="inline-flex items-center text-brand-cyan font-bold hover:gap-2 transition-all gap-1 group">
                            Read Our Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

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




                {/* New Section: Operational Excellence (Process & Certifications) */}
                <div className="border-t border-gray-100 pt-16 mt-20 md:mt-32">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <h4 className="text-brand-cyan font-bold tracking-wide uppercase text-sm mb-3">How We Work</h4>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Operational <span className="gradient-text">Excellence</span>
                        </h2>
                    </div>

                    {/* Export Process - Simple Connect-the-Dots Timeline */}
                    <div className="relative max-w-6xl mx-auto mb-12">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[24px] left-0 right-0 h-0.5 bg-gray-100 z-0"></div>

                        {/* Connecting Line (Mobile: Vertical) */}
                        <div className="block md:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-100 -translate-x-1/2 z-0 h-[85%] mt-6"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 relative z-10">
                            {[
                                { step: '01', title: 'Order Sourcing', desc: 'Direct procurement from certified partner farms.' },
                                { step: '02', title: 'Quality Check', desc: 'Rigorous grading and lab testing standards.' },
                                { step: '03', title: 'Packaging', desc: 'Export-safe packing with custom branding.' },
                                { step: '04', title: 'Global Logistics', desc: 'Efficient sea/air freight booking & documentation.' }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center group bg-white md:bg-transparent py-4 md:py-0">
                                    {/* Dot Node */}
                                    <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-100 group-hover:border-brand-cyan transition-colors duration-300 flex items-center justify-center font-bold text-brand-cyan shadow-sm mb-4 md:mb-6 z-10 relative">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mb-32">
                        <Link to="/process" className="inline-flex items-center text-brand-cyan font-bold hover:gap-2 transition-all gap-1 group bg-brand-cyan/5 px-6 py-2 rounded-full hover:bg-brand-cyan/10">
                            Explore Our Process <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Certifications - Minimalist Grid */}
                    <div className="border-t border-gray-100 pt-16 mt-20 md:mt-32 max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-gray-900">Accreditations & Memberships</h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                            {[
                                'APEDA', 'FSSAI', 'Spices Board', 'Tea Board', 'FIEO', 'ISO 9001:2015', 'Halal Certified', 'Organic Certified'
                            ].map((cert, index) => (
                                <div key={index} className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-600 font-semibold hover:bg-white hover:border-brand-cyan/30 hover:shadow-sm transition-all cursor-default">
                                    {cert}
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link to="/certifications" className="inline-flex items-center text-gray-500 font-semibold hover:text-brand-cyan transition-all gap-1 text-sm">
                                View Compliance Details <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Stats - Full Width & Centered */}
                <div className="border-t border-gray-100 pt-16 mt-20 md:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center feature-stats max-w-5xl mx-auto">
                        {achievements.map((item, index) => (
                            <div key={index} className="p-4">
                                <div className="font-bold text-gray-900 mb-2 leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                                    {item.number}
                                </div>
                                <div className="text-gray-500 uppercase tracking-wider text-xs md:text-sm font-bold">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;
