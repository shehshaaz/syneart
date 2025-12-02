import React from 'react';

export default function Hero() {
    return (
        <section className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 px-10 py-16 bg-[#f2f2f2] items-start rounded-lg">
                <div className="relative">
                    <h1 className="text-5xl font-black font-serif tracking-widest mb-8 relative -top-20 text-primary">
                        SYNE.ART
                    </h1>
                    <h2 className="text-lg font-gray-200 font-serif tracking-widest mb-1 relative -top-30 left-15 text-primary">design to define</h2>
                    

                    <div className="text-2xl leading-relaxed mb-10 text-gray-800 font-large">
                        Crafting Rooms as <br />
                       Unique as You.
                    </div>

                   
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <img
                        src="/images/Screenshot 2025-11-28 033451.png"
                        className="w-full h-[390px] object-cover rounded shadow-md hover:scale-[1.02] transition-transform duration-500"
                        alt="Interior Design 1"
                    />
                    <img
                        src="/images/Screenshot 2025-11-28 033507.png"
                        className="w-full h-[390px] object-cover rounded shadow-md hover:scale-[1.02] transition-transform duration-500"
                        alt="Interior Design 2"
                    />
                </div>
            </div>
        </section>
    );
}
