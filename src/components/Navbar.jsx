import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';
    const isEnquiryPage = location.pathname === '/enquiry';
    const isProductDetail = location.pathname.startsWith('/products/');

    // Determine if we need solid background:
    // Always solid on non-home pages, or when scrolled/menu open on home page
    const showSolidBg = scrolled || isOpen || !isHomePage;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // useLayoutEffect runs BEFORE the browser paints, preventing visual blinks
    // Sync scroll state immediately on route change
    useLayoutEffect(() => {
        setScrolled(window.scrollY > 20);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Process', href: '/process' },
        { name: 'Certifications', href: '/certifications' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out w-full`}>
                <div className={`
                    w-full transition-all duration-200 ease-in-out border-b border-transparent
                    ${showSolidBg ? 'bg-white shadow-md border-gray-100' : 'bg-transparent'}
                `}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                        <div className="flex items-center py-3">

                            {/* Left Section: Logo or Back Button */}
                            <div className="flex-shrink-0 flex items-center gap-4">
                                {isProductDetail ? (
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => navigate(-1)}
                                            className="flex items-center justify-center p-2 -ml-2 rounded-full transition-all duration-200 text-gray-900 hover:bg-gray-100"
                                            aria-label="Go Back"
                                        >
                                            <ArrowLeft size={24} />
                                        </button>

                                        {/* Dynamic Page Title - conditionally rendered to prevent blink */}
                                        <AnimatePresence>
                                            {scrolled && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -16 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -16 }}
                                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                                    className="font-bold text-xl tracking-tight capitalize text-gray-900"
                                                >
                                                    {location.pathname.split('/').pop().replace('-', ' ')}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link to="/" className="flex items-center relative group">
                                        {/* Spacer to reserve width for the absolute logo */}
                                        <div className="h-10 w-40"></div>

                                        {/* The logo PNG has internal whitespace on the left (~15%).
                                            We use a negative left offset to pull the visible logo
                                            flush with the page content edge. */}
                                        <img
                                            src="/images/logo_main.png"
                                            alt="Montara Exim"
                                            className="absolute top-1/2 -translate-y-1/2 h-40 w-auto max-w-none object-contain"
                                            style={{ left: '-24px' }}
                                        />
                                    </Link>
                                )}
                            </div>

                            {/* Spacer */}
                            <div className="flex-1"></div>

                            {/* Desktop Nav */}
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
                                            className={`text-base font-bold transition-colors duration-200 hover:text-brand-cyan ${showSolidBg ? 'text-gray-900' : 'text-white'}`}
                                        >
                                            {link.name}
                                        </Component>
                                    )
                                })}
                            </div>

                            {/* CTA Button */}
                            <div className="hidden md:block">
                                {!isEnquiryPage && (
                                    <Link
                                        to="/enquiry"
                                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 border group
                                            ${showSolidBg
                                                ? 'bg-gray-900 hover:bg-black text-white border-gray-900'
                                                : 'bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border-white/10'
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
                                    className={`p-2 focus:outline-none transition-colors duration-200 ${showSolidBg ? 'text-gray-900' : 'text-white'}`}
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="fixed top-[64px] left-0 right-0 z-40 bg-white shadow-xl border-t border-gray-100 overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
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
                                        className="text-lg font-bold text-gray-900"
                                    >
                                        {link.name}
                                    </Component>
                                )
                            })}
                            {!isEnquiryPage && (
                                <Link
                                    to="/enquiry"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-brand-black text-white inline-flex justify-center items-center px-6 py-3 rounded-lg text-base font-bold w-full"
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
