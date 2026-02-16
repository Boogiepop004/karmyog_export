import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            name: 'APEDA',
            full: 'Agricultural and Processed Food Products Export Development Authority',
            desc: 'Recognized by the Ministry of Commerce & Industry, Govt. of India, ensuring quality standards for agricultural exports.'
        },
        {
            name: 'FSSAI',
            full: 'Food Safety and Standards Authority of India',
            desc: 'Verifies that our food products meet science-based standards for safety and nutritional quality.'
        },
        {
            name: 'Spices Board',
            full: 'Spices Board India',
            desc: 'Certification for the export of quality spices, ensuring purity and adherence to international grade standards.'
        },
        {
            name: 'ISO 9001:2015',
            full: 'International Organization for Standardization',
            desc: 'Demonstrates our commitment to quality management systems and consistent customer satisfaction.'
        },
        {
            name: 'FIEO',
            full: 'Federation of Indian Export Organisations',
            desc: 'Apex body of Indian export promotion organizations, representing our standing in the global trade community.'
        },
        {
            name: 'Halal Certified',
            full: 'Halal Certification',
            desc: 'Ensures our products are prepared in accordance with Islamic dietary laws for relevant markets.'
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-brand-black text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-cyan/20 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Certifications</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        We adhere to the highest international standards. Our accreditations are a testament to our commitment to quality.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certs.map((cert, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-brand-gold/10 rounded-xl text-brand-gold shrink-0">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">{cert.full}</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {cert.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compliance Statement */}
                <div className="mt-20 bg-gray-50 rounded-3xl p-10 md:p-16 border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">100% Compliant</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Montara Exim ensures that every consignment is accompanied by the necessary phytosanitary certificates, certificate of origin, and lab test reports as required by the importing country. We stay updated with global trade regulations to ensure hassle-free clearance.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Certifications;
