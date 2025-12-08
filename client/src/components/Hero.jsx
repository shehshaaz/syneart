import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative w-full h-[calc(100vh-80px)] bg-bg overflow-hidden">
            {/* Central Content */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
                <h1
                    data-aos="fade-up"
                    data-aos-delay="50"
                    className="text-[10vw] md:text-[5vw] font-cinzel font-black text-primary tracking-tighter leading-[0.8] mb-6 mix-blend-darken lowercase italic">
                    syne.art
                </h1>

                <div className="flex flex-col items-center gap-8">
                    <div data-aos="fade-up" data-aos-delay="100" className="w-24 h-[2px] bg-primary/20"></div>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-lg md:text-2xl font-light text-primary/80 tracking-wide max-w-xl">
                        Design to Define
                    </p>
                    <Link
                        to="/services"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="group relative px-8 py-3 border border-primary text-primary text-sm font-bold tracking-widest uppercase overflow-hidden hover:text-white transition-colors duration-300"
                    >
                        <span className="relative z-10">View All Services</span>
                        <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                    </Link>
                </div>
            </div>

            {/* Scattered Images - Hidden on mobile, visible on desktop */}

            {/* Left Image (Hanging Lights style) */}
            <div data-aos="fade-up-right" data-aos-delay="400" className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[20vw] h-[60vh] z-10">
                <img
                    src="/images/product1.png"
                    alt="Interior Detail"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
            </div>
            {/* Left Image (bottom) */}
            <div data-aos="fade-up-left" data-aos-delay="600" className="hidden md:block absolute left-[18%] bottom-[0%] w-[18vw] h-[35vh] z-10">
                <img
                    src="/images/product4.jpg"
                    alt="Decor Item"
                    className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
            </div>

            {/* Right Top Image (Sofa style) */}
            <div data-aos="fade-up-left" data-aos-delay="500" className="hidden md:block absolute right-0 top-0 w-[30vw] h-[55vh] z-10">
                <img
                    src="/images/hero.jpg"
                    alt="Living Room"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
            </div>

            {/* Right Bottom Image (Lamp style) */}
            <div data-aos="fade-up-right" data-aos-delay="700"  className="hidden md:block absolute right-[18%] bottom-[5%] w-[18vw] h-[35vh] z-10">
                <img
                    src="/images/product2.jpg"
                    alt="Decor Item"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
            </div>

            {/* Mobile Background Image (Optional, faint overlay) */}
            <div className="md:hidden absolute inset-0 z-0 opacity-5 pointer-events-none">
                <img
                    src="/images/hero.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}

