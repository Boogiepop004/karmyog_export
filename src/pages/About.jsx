import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Clock, Truck, Users, Target, Heart } from 'lucide-react';
import PageHero from '../components/PageHero';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="About Us"
                subtitle="We are Montara Exim, your trusted partner in global trade. From the heart of India to the world, we deliver quality, reliability, and excellence."
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Our Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h4 className="text-brand-cyan font-bold tracking-wide uppercase text-sm mb-3">Who We Are</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Your Gateway to <span className="gradient-text">Premium Indian Produce</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Founded in Surat, Gujarat, Montara Exim has grown from a local trading house to a global merchant exporter. We specialize in sourcing the finest agricultural products, spices, and textiles directly from farmers and manufacturers across India.
                            </p>
                            <p>
                                Our mission is simple: to bridge the gap between Indian producers and global markets. We believe in fair trade, transparency, and building lasting relationships with our clients.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                            {/* Placeholder for About Image - could use a generic office or farm image */}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                <span className="text-lg">About Us Image</span>
                            </div>
                        </div>
                        {/* Floating Stat Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-brand-cyan/10 rounded-full text-brand-cyan">
                                    <Globe2 size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">15+</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Countries Served</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">The principles that drive every shipment, every deal, and every relationship.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: 'Integrity', desc: 'We conduct business with unwavering honesty and transparency.' },
                            { icon: Heart, title: 'Quality', desc: 'We never compromise on the standards of our products.' },
                            { icon: Users, title: 'Customer First', desc: 'Your satisfaction and success are our top priorities.' }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                                <div className="w-16 h-16 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us - Expanded */}
                <div>
                    <div className="text-center mb-16">
                        <h4 className="text-brand-cyan font-bold tracking-wide uppercase text-sm mb-3">Why Us</h4>
                        <h2 className="text-3xl font-bold text-gray-900">The Montara Advantage</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, color: 'orange', title: 'Quality Assured', desc: 'Every shipment undergoes rigorous multi-stage quality checks.' },
                            { icon: Globe2, color: 'blue', title: 'Global Network', desc: 'Strong logistics partnerships ensure timely delivery anywhere.' },
                            { icon: Truck, color: 'green', title: 'Efficient Logistics', desc: 'Optimized supply chain management for fresh delivery.' },
                            { icon: Clock, color: 'purple', title: '24/7 Support', desc: ' Dedicated account managers available round the clock.' }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-cyan/30 hover:shadow-md transition-colors group">
                                <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <item.icon className={`text-${item.color}-500 w-6 h-6`} />
                                </div>
                                <h4 className="text-gray-900 font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
