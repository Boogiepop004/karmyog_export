import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Image as ImageIcon, CheckCircle } from 'lucide-react';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        country: '',
        productCategory: '',
        description: '',
        quantity: '',
        budget: 'Under $1,000',
        timeline: 'ASAP (Within 2 weeks)',
        additionalNotes: '',
        phone: '',
        website: '',
        communicationMethods: []
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            let updatedMethods = [...formData.communicationMethods];
            if (checked) {
                updatedMethods.push(value);
            } else {
                updatedMethods = updatedMethods.filter(method => method !== value);
            }
            setFormData({ ...formData, communicationMethods: updatedMethods });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Configuration - EASY TO CHANGE
    const BUSINESS_PHONE_NUMBER = '919054398743'; // Format: CountryCode + Number (No + or spaces)
    const BUSINESS_EMAIL = 'info@karmyog.com'; // Replace with your actual email

    const formatMessage = () => {
        return `*New Import Enquiry*\n\n` +
            `*Identity*\n` +
            `Name: ${formData.name}\n` +
            `Company: ${formData.company}\n` +
            `Email: ${formData.email}\n` +
            `Country: ${formData.country}\n\n` +
            `*Product Details*\n` +
            `Category: ${formData.productCategory}\n` +
            `Description: ${formData.description}\n` +
            `Quantity: ${formData.quantity}\n\n` +
            `*Business Logic*\n` +
            `Budget: ${formData.budget}\n` +
            `Timeline: ${formData.timeline}\n\n` +
            `*Contact*\n` +
            `Phone: ${formData.phone}\n` +
            `Website: ${formData.website}\n` +
            `Preferred Method: ${formData.communicationMethods.join(', ')}\n` +
            `--------------------------------\n` +
            `Notes: ${formData.additionalNotes}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = formatMessage();
        const encodedMessage = encodeURIComponent(message);

        // Priority Logic: If WhatsApp is selected (or nothing specific), typically prioritize WhatsApp for speed
        const prefersWhatsApp = formData.communicationMethods.includes('WhatsApp');
        const prefersEmail = formData.communicationMethods.includes('Email');

        if (prefersWhatsApp) {
            // Open WhatsApp
            const whatsappUrl = `https://wa.me/${BUSINESS_PHONE_NUMBER}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        } else if (prefersEmail) {
            // Open Email Client
            const mailtoUrl = `mailto:${BUSINESS_EMAIL}?subject=New Import Enquiry from ${formData.company}&body=${encodedMessage}`;
            window.location.href = mailtoUrl;
        } else {
            // Default to WhatsApp if no preference or other methods (like "Call")
            const whatsappUrl = `https://wa.me/${BUSINESS_PHONE_NUMBER}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        }

        // Show confirmation UI
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isSubmitted) {
        return (
            <div className="pt-24 pb-16 px-4 bg-brand-white min-h-screen font-outfit flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl mx-auto text-center bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
                >
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Enquiry Initiated!</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Thank you, <strong>{formData.name}</strong>. We have redirected you to your preferred contact method to finalize and send the details.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-8 text-left text-sm text-gray-500 border border-gray-200">
                        <p className="font-semibold mb-1">Why do I need to send the message?</p>
                        <p>To ensure your privacy and verified communication, we use your own WhatsApp or Email app to send the data directly to us without storing it on an intermediary server.</p>
                    </div>
                    <p className="text-gray-500 mb-6 text-sm">
                        Didn't open? <a href={`https://wa.me/${BUSINESS_PHONE_NUMBER}`} target="_blank" rel="noreferrer" className="text-brand-cyan hover:underline font-semibold">Click here to chat manually</a>.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-brand-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Send Another Enquiry
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12 px-4 bg-gray-50/50 min-h-screen font-outfit">
            <div className="max-w-4xl mx-auto">
                {/* Header - Minimal & Direct */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                        Import Requirements
                    </h1>
                    <h2 className="text-2xl font-bold text-brand-cyan">
                        Let's Connect
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"
                >
                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

                        {/* Row 1: Identity */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Your Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Your Company <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="company"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Row 2: Contact Info */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Your Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Row 3: Location & Web */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Country <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="country"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Website URL</label>
                            <input
                                type="text"
                                name="website"
                                placeholder="Optional"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all placeholder:text-gray-400"
                                value={formData.website}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Row 4: Product Info */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Product Category <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="productCategory"
                                required
                                placeholder="e.g. Spices, Textiles"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all placeholder:text-gray-400"
                                value={formData.productCategory}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Quantity <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="quantity"
                                required
                                placeholder="e.g. 500 kg"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all placeholder:text-gray-400"
                                value={formData.quantity}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Row 5: Business Logic */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Budget Range <span className="text-red-500">*</span></label>
                            <select
                                name="budget"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all bg-white"
                                value={formData.budget}
                                onChange={handleChange}
                            >
                                <option>Under $1,000</option>
                                <option>$1,000 - $5,000</option>
                                <option>$5,000 - $10,000</option>
                                <option>$10,000 - $25,000</option>
                                <option>$25,000 - $50,000</option>
                                <option>$50,000 - $100,000</option>
                                <option>$100,000 - $500,000</option>
                                <option>Above $500,000</option>
                                <option>Prefer not to disclose</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Timeline <span className="text-red-500">*</span></label>
                            <select
                                name="timeline"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all bg-white"
                                value={formData.timeline}
                                onChange={handleChange}
                            >
                                <option>ASAP (Within 2 weeks)</option>
                                <option>Within 1 month</option>
                                <option>Within 2-3 months</option>
                                <option>Within 6 months</option>
                                <option>Flexible timing</option>
                            </select>
                        </div>

                        {/* Full Width: Description */}
                        <div className="space-y-1.5 md:col-span-2">
                            <label className="text-sm font-semibold text-gray-700">Product Description <span className="text-red-500">*</span></label>
                            <textarea
                                name="description"
                                required
                                rows="2"
                                placeholder="Specifications, quality reqs, certifications..."
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all resize-none placeholder:text-gray-400"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Full Width: Images */}
                        <div className="space-y-1.5 md:col-span-2">
                            <label className="text-sm font-semibold text-gray-700">Reference Images</label>
                            <input
                                type="file"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-cyan/10 file:text-brand-cyan hover:file:bg-brand-cyan/20 text-sm text-gray-500"
                            />
                        </div>

                        {/* Full Width: Notes */}
                        <div className="space-y-1.5 md:col-span-2">
                            <label className="text-sm font-semibold text-gray-700">Additional Notes</label>
                            <textarea
                                name="additionalNotes"
                                rows="2"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all resize-none"
                                value={formData.additionalNotes}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Full Width: Methods */}
                        <div className="space-y-2 md:col-span-2 pt-2 border-t border-gray-100">
                            <label className="text-sm font-semibold text-gray-700 block">Preferred Communication <span className="text-red-500">*</span></label>
                            <div className="flex flex-wrap gap-4">
                                {['Email', 'WhatsApp'].map((method) => (
                                    <label key={method} className="flex items-center gap-2 cursor-pointer bg-gray-50 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                        <input
                                            type="checkbox"
                                            name="communicationMethods"
                                            value={method}
                                            checked={formData.communicationMethods.includes(method)}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-brand-cyan border-gray-300 rounded focus:ring-brand-cyan"
                                        />
                                        <span className="text-gray-700 text-sm font-medium">{method}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-brand-black text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg"
                            >
                                Submit Enquiry <Send size={18} />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Enquiry;
