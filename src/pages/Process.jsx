import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Package, Ship, Sprout } from 'lucide-react';
import PageHero from '../components/PageHero';

const Process = () => {
    const steps = [
        {
            id: '01',
            title: 'Order Sourcing',
            icon: Sprout,
            color: 'green',
            image: '/images/process_sourcing.png',
            desc: 'We source directly from certified partner farms and manufacturers. Our team verifies the origin and quality of raw materials at the source itself.',
            details: ['Direct Farm Procurement', 'Origin Verification', 'Raw Material Inspection']
        },
        {
            id: '02',
            title: 'Quality Check & Grading',
            icon: ClipboardCheck,
            color: 'blue',
            image: '/images/process_quality.png',
            desc: 'Every product undergoes rigorous grading and lab testing standards. We ensure compliance with international food safety and quality regulations.',
            details: ['Lab Testing', 'Size & Color Grading', 'Phytosanitary Checks']
        },
        {
            id: '03',
            title: 'Packaging',
            icon: Package,
            color: 'orange',
            image: '/images/process_packaging.png',
            desc: 'We use export-grade packaging materials designed to preserve freshness and prevent damage during transit. Custom branding and labeling are available.',
            details: ['Export-Safe Packing', 'Custom Labeling', 'Vacuum/Modified Atmosphere']
        },
        {
            id: '04',
            title: 'Global Logistics',
            icon: Ship,
            color: 'brand-cyan',
            image: '/images/process_logistics.png',
            desc: 'Our logistics team handles efficient sea or air freight booking, documentation, and customs clearance to ensure timely delivery to your port.',
            details: ['Freight Booking', 'Customs Documentation', 'Real-time Tracking']
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Export Process"
                subtitle="A seamless journey from our farms to your doorstep. We handle every step with precision and care."
            />

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Visual Side - Now with actual images */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-cyan text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                                    {step.id}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {step.desc}
                                </p>

                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Key Activities</h4>
                                    <ul className="space-y-3">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-center text-gray-600">
                                                <div className="w-2 h-2 rounded-full bg-brand-cyan mr-3"></div>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 bg-brand-black rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-cyan/10 to-transparent pointer-events-none"></div>
                    <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Start Your Shipment Today</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8 relative z-10">
                        Ready to experience a hassle-free import process? Get a quote for your requirements.
                    </p>
                    <a href="/enquiry" className="inline-block bg-brand-cyan text-brand-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors relative z-10">
                        Request a Quote
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Process;
