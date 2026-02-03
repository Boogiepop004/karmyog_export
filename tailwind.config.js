/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-black': '#0B0E14',
                'brand-white': '#FFFFFF',
                'brand-gray': '#F3F4F6',
                'brand-dark': '#1F2937',
                'brand-teal': '#2dd4bf',
                'brand-cyan': '#0ea5e9',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'], // Keeping Outfit as it matches the vibe
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(to right, #0ea5e9, #2dd4bf)',
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
            }
        },
    },
    plugins: [],
}
