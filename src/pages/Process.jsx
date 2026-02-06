import React from 'react';
import { ClipboardCheck, Package, Ship, FileCheck, CheckCircle2 } from 'lucide-react';

const Process = () => {
    return (
        <div className="pt-20 pb-16 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                        Our Process
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We have refined our export operations into a seamless, 4-step workflow designed to ensure speed, accuracy, and quality at every stage.
                    </p>
                </div>

                {/* Process Steps (Detailed) */}
                <div className="relative mb-32">
                    {/* Connecting Line (Vertical on Desktop & Mobile) - Adjusted for layout */}
                    <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gray-100 -translate-x-1/2 z-0 hidden md:block"></div>
                    <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-gray-100 -translate-x-1/2 z-0 block md:hidden"></div>

                    <div className="space-y-16">
                        {[
                            {
                                step: '01',
                                title: 'Sourcing & Order Confirmation',
                                desc: 'We begin by identifying the best source for your specific requirements. We negotiate directly with farmers and manufacturers to secure premium quality at competitive rates.',
                                details: ['Vendor Assessment', 'Price Negotiation', 'Sample Verification', 'Order Agreement'],
                                icon: ClipboardCheck
                            },
                            {
                                step: '02',
                                title: 'Quality Inspection & Grading',
                                desc: 'Our team conducts rigorous on-site inspections. Products are graded according to international standards (size, color, weight) and tested for quality parameters.',
                                details: ['On-site Inspection', 'Lab Testing (if required)', 'Sorting & Grading', 'Defect Removal'],
                                icon: CheckCircle2
                            },
                            {
                                step: '03',
                                title: 'Packaging & Private Labeling',
                                desc: 'Goods are packed in export-grade materials to ensure freshness and safety during transit. We offer custom branding and packaging options as per client needs.',
                                details: ['Export-Grade Material', 'Custom Branding', 'Weight Verification', 'Palletization'],
                                icon: Package
                            },
                            {
                                step: '04',
                                title: 'Logistics & Documentation',
                                desc: 'We handle all freight bookings (Sea/Air), customs clearance, and documentation (FSSAI, APEDA, Origin Certs) to ensure a hassle-free import for you.',
                                details: ['Freight Booking', 'Customs Clearance', 'Documentation', 'Shipment Tracking'],
                                icon: Ship
                            }
                        ].map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 relative z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Step Indicator */}
                                <div className="flex-shrink-0 pl-1 md:pl-0 md:w-1/2 flex md:justify-end justify-start relative">
                                    <div className={`w-14 h-14 rounded-full bg-white border-4 border-gray-100 text-brand-cyan font-bold flex items-center justify-center text-xl shadow-sm z-10 ${index % 2 !== 0 ? 'md:order-last md:ml-[-28px]' : 'md:mr-[-28px]'}`}>
                                        {item.step}
                                    </div>
                                    <div className="hidden md:block w-full"></div> {/* Spacer for grid alignment */}
                                </div>

                                {/* Content Card */}
                                <div className="flex-grow md:w-1/2 pt-2">
                                    <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:border-brand-cyan/20 transition-colors">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                                                <item.icon className="text-brand-cyan w-6 h-6" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-600 mb-6 leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {item.details.map((detail, idx) => (
                                                <div key={idx} className="flex items-center text-sm font-medium text-gray-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></div>
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Methodology Highlight */}
                <div className="bg-brand-black text-white p-12 rounded-[2rem] text-center">
                    <h2 className="text-3xl font-bold mb-6">Reliability is our Methodology</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        We don't just ship products; we deliver promises. Our streamlined process minimizes delays and ensures that what you order is exactly what you receive.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Process;
