import React from 'react';

const heroImages = [
    '/images/home/spices_cover.png',
    '/images/home/vegetables_cover.png',
    '/images/home/fruits_cover.png',
    '/images/rice-category.jpg',
    '/images/home/textiles_cover.png',
];

const PageHero = ({ title, subtitle }) => {
    return (
        <div className="relative text-white pt-40 pb-20 overflow-hidden">
            {/* pt-40 = navbar height (pt-20) + original padding (py-20). Background extends behind navbar. */}
            <div className="absolute inset-0 flex">
                {heroImages.map((src, i) => (
                    <div key={i} className="flex-1 min-w-0 h-full">
                        <img
                            src={src}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                ))}
            </div>

            {/* Semi-transparent dark overlay for text readability */}
            <div className="absolute inset-0 bg-brand-black/75"></div>

            {/* Text content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default PageHero;
