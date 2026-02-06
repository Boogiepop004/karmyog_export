import React from 'react';
import { Award, Shield, FileCheck, Globe } from 'lucide-react';

const Certifications = () => {

    const certs = [
        {
            name: 'APEDA',
            full: 'Agricultural and Processed Food Products Export Development Authority',
            desc: 'Ensures our agricultural exports meet strict quality standards set by the Government of India.',
            type: 'Government Recognized'
        },
        {
            name: 'FSSAI',
            full: 'Food Safety and Standards Authority of India',
            desc: 'Validates that our food products undergo necessary quality checks and are safe for consumption.',
            type: 'Food Safety'
        },
        {
            name: 'Spices Board',
            full: 'Spices Board of India',
            desc: 'Mandatory certification ensuring the purity and quality of our spice exports.',
            type: 'Commodity Specific'
        },
        {
            name: 'Tea Board',
            full: 'Tea Board of India',
            desc: 'Certification for export of premium Indian tea, adhering to global quality benchmarks.',
            type: 'Commodity Specific'
        },
        {
            name: 'ISO 9001:2015',
            full: 'International Organization for Standardization',
            desc: 'Demonstrates our commitment to quality management systems and consistent service improvement.',
            type: 'Quality Management'
        },
        {
            name: 'IEC',
            full: 'Import Export Code',
            desc: 'Primary government license authorizing us to carry out international trade activities.',
            type: 'Trade License'
        },
        {
            name: 'FIEO',
            full: 'Federation of Indian Export Organisations',
            desc: 'Membership bodies that connect us with global trade networks and policy updates.',
            type: 'Trade Body'
        }
    ];

    return (
        <div className="pt-20 pb-16 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                        Certifications & Compliance
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Trust is built on verification. We are fully licensed, certified, and compliant with all Indian and International trade regulations to ensure seamless exports.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {certs.map((cert, index) => (
                        <div key={index} className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all group">
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                                    {cert.type}
                                </span>
                                <Shield className="text-brand-cyan w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{cert.name}</h2>
                            <p className="text-sm font-semibold text-gray-400 mb-4">{cert.full}</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {cert.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quality Policy */}
                <div className="bg-brand-cyan/5 rounded-[3rem] p-12 md:p-20 text-center border border-brand-cyan/10">
                    <div className="w-16 h-16 rounded-2xl bg-brand-cyan text-white flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-cyan/30">
                        <Award className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Quality Policy</h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        "We are committed to delivering products that not only meet but exceed our customers' expectations. Through continuous improvement of our processes and strict adherence to food safety standards, we ensure that every shipment carries the stamp of quality and trust."
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Certifications;
