import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Clock, Truck, Users, Target, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20 pb-16 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero / Introduction */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                        About <span className="gradient-text">Montara Exim</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We are a Surat-based merchant exporter dedicated to bridging the gap between India's finest producers and the global market. With a commitment to quality and transparency, we facilitate seamless trade of agricultural produce, spices, and textiles.
                    </p>
                </div>

                {/* Vision & Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-stretch">
                    <div className="bg-gray-50/50 p-10 rounded-3xl border border-gray-100 flex flex-col justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-6">
                            <Target className="text-brand-cyan w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To be the most trusted global partner for sourcing Indian products, recognized for our integrity, operational excellence, and commitment to sustainable trade practices.
                        </p>
                    </div>
                    <div className="bg-gray-50/50 p-10 rounded-3xl border border-gray-100 flex flex-col justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                            <Heart className="text-orange-500 w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To empower Indian farmers and manufacturers by providing them a global platform, while ensuring our international clients receive only the highest quality products with unmatched service and reliability.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Integrity', desc: 'We believe in honest, transparent dealing. No hidden costs, no compromises on quality.' },
                            { icon: Globe2, color: 'text-green-500', bg: 'bg-green-50', title: 'Global Outlook', desc: 'Understanding international standards and market nuances to serve diverse client needs.' },
                            { icon: Users, color: 'text-purple-500', bg: 'bg-purple-50', title: 'Partnership', desc: 'Building long-term relationships with both our suppliers and our buyers.' }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-white text-center">
                                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 mx-auto`}>
                                    <item.icon className={`${item.color} w-7 h-7`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us (Detailed) */}
                <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    {/* Decorative Gradients */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                In a complex global market, we simplify trade through reliability, quality assurance, and logistical expertise.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center">
                                    <ShieldCheck className="text-brand-cyan w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Uncompromising Quality</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Every shipment undergoes rigorous multi-stage quality checks. We work only with certified growers and manufacturers who meet our strict standards.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center">
                                    <Clock className="text-orange-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We understand the value of time in trade. Our optimized supply chain and logistics partnerships ensure your goods arrive on schedule.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center">
                                    <Globe2 className="text-blue-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Global Expertise</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Navigating customs, documentation, and international regulations can be daunting. We handle the complexity so you can focus on your business.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center">
                                    <Truck className="text-green-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">End-to-End Solutions</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        From sourcing to final delivery, we provide a comprehensive solution that includes packaging, freight booking, and customs clearance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
