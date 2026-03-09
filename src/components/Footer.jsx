import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-brand-black pt-16 pb-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-10 mb-12 max-w-5xl mx-auto items-start justify-between">
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
                            {[
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/jasmin-gondaliya-88a547232/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
                                { Icon: Instagram, href: "https://www.instagram.com/montaraexim?igsh=a2tmOXhyZGZqYTJ6&utm_source=qr" },
                                {
                                    // Use Phone icon directly if Whatsapp is not imported (or use Whatsapp from lucide-react if added at the top)
                                    // By user instructions: link to the api with number +91 884 941 7264
                                    Icon: function WhatsappIcon(props) {
                                        return (
                                            <svg xmlns="http://www.w3.org/漂2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        );
                                    },
                                    href: "https://wa.me/918849417264"
                                }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target={social.href !== "#" ? "_blank" : "_self"} rel={social.href !== "#" ? "noopener noreferrer" : ""} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-cyan hover:border-brand-cyan transition-all">
                                    <social.Icon size={18} />
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

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl"></div>
            </div>
        </footer >
    );
};

export default Footer;
