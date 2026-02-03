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
                'brand-orange': '#F97316', // Orange 500
                'brand-green': '#22C55E',  // Green 500
                // Mapped for backward compatibility during transitions, but ideal to use explicit names
                'brand-cyan': '#F97316',   // Mapping old cyan to new Orange (Primary)
                'brand-teal': '#22C55E',   // Mapping old teal to new Green (Secondary)
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'], // Keeping Outfit as it matches the vibe
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(to right, #F97316, #22C55E)',
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
            }
        },
    },
    plugins: [],
}
