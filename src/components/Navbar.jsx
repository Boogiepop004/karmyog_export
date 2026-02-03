import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isEnquiryPage = location.pathname === '/enquiry';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/#products' },
        { name: 'About', href: '/#about' },
        // Enquiry removed as text link
    ];

    // Helper to determine if we should use simple anchor or Router Link
    // For simplicity, we'll use Hash links on home page for smooth scroll, standard links otherwise
    const getLinkProps = (link) => {
        if (link.href.includes('#') && isHomePage) {
            return { href: link.href.substring(link.href.indexOf('#')) };
        }
        return { to: link.href, as: Link };
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full`}>
                <div className={`
                    w-full transition-all duration-300 border-b border-transparent
                    ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100' : 'bg-transparent'}
                `}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center py-4">

                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center gap-2">
                                <Link to="/" className={`font-main font-bold text-2xl tracking-tighter transition-colors ${scrolled || isOpen ? 'text-gray-900' : 'text-gray-900'}`}>
                                    KARMYOG
                                </Link>
                            </div>

                            {/* Spacer to push everything else to the right */}
                            <div className="flex-1"></div>

                            {/* Desktop Nav - Right Aligned */}
                            <div className="hidden md:flex items-center space-x-8 mr-8">
                                {navLinks.map((link) => {
                                    const isHashInHome = link.href.includes('#') && isHomePage;
                                    const props = isHashInHome
                                        ? { href: link.href.substring(link.href.indexOf('#')) }
                                        : { to: link.href };
                                    const Component = isHashInHome ? 'a' : Link;

                                    return (
                                        <Component
                                            key={link.name}
                                            {...props}
                                            className={`text-[15px] font-medium transition-colors hover:text-brand-cyan ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}
                                        >
                                            {link.name}
                                        </Component>
                                    )
                                })}
                            </div>

                            {/* CTA Button - Styling Update: Toggle Text/BG on Scroll */}
                            <div className="hidden md:block">
                                {!isEnquiryPage && (
                                    <Link
                                        to="/enquiry"
                                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 border group
                                            ${scrolled
                                                ? 'bg-gray-100/80 text-gray-900 border-gray-200 hover:bg-gray-200'
                                                : 'bg-brand-black/50 backdrop-blur-md text-white border-transparent hover:bg-brand-black/70 transition-all'
                                            }
                                        `}
                                    >
                                        Get In Touch <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5`} />
                                    </Link>
                                )}
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="flex md:hidden ml-4">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-2 text-gray-900 focus:outline-none"
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => {
                                const isHashInHome = link.href.includes('#') && isHomePage;
                                const props = isHashInHome
                                    ? { href: link.href.substring(link.href.indexOf('#')) }
                                    : { to: link.href };
                                const Component = isHashInHome ? 'a' : Link;

                                return (
                                    <Component
                                        key={link.name}
                                        {...props}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold text-gray-900"
                                    >
                                        {link.name}
                                    </Component>
                                )
                            })}
                            {!isEnquiryPage && (
                                <Link
                                    to="/enquiry"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-brand-black text-white inline-flex justify-center items-center px-6 py-4 rounded-lg text-lg font-bold mt-4 w-full"
                                >
                                    Get In Touch
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
