import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-brand-black pt-16 pb-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Brand Info */}
                <div className="md:max-w-xs">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="font-bold text-3xl tracking-tight text-white">
                            MONTARA EXIM
                        </span>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                        Your trusted global trade partner. We ensure seamless logistics and premium quality products from India to the world.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                            <a key={idx} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-cyan hover:border-brand-cyan transition-all">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div className="md:text-right">
                    <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
                    <ul className="space-y-4 inline-block text-left md:text-right">
                        <li className="flex items-start gap-4 md:flex-row-reverse">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-brand-cyan">
                                <MapPin size={18} />
                            </div>
                            <span className="text-gray-400 mt-2 text-sm max-w-xs leading-relaxed">
                                PLOT NO. G -596, Laxmi Textile Park, <br />
                                GIDC SACHIN ROAD SURAT, <br />
                                394230, SURAT, GUJARAT
                            </span>
                        </li>
                        <li className="flex items-center gap-4 md:flex-row-reverse">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-brand-cyan">
                                <Phone size={18} />
                            </div>
                            <div className="flex flex-col md:items-end">
                                <span className="text-gray-400 text-sm">+91 6354 799 003</span>
                                <span className="text-gray-400 text-sm">+91 7284 070 601</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 md:flex-row-reverse">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-brand-cyan">
                                <Mail size={18} />
                            </div>
                            <span className="text-gray-400 text-sm">info@montaraexim.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Montara Exim.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
        </div>

            {/* Background Glow */ }
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl"></div>
    </div>
        </footer >
    );
};

export default Footer;
