import React from 'react';

export default function About() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 py-16 bg-[#f5f5f5] items-center rounded-lg mt-10">
            <div className="w-full" data-aos="fade-down">
                <img
                    src="/images/about.jpg"
                    alt="About Syne Art"
                    className="w-full h-[420px] object-cover rounded shadow-md"
                />
            </div>

            <div className="md:pr-10" data-aos="fade-down">
                <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-wider mb-5 text-primary">
                    GET TO KNOW<br />SYNE
                </h2>

                <p className="text-base leading-relaxed text-gray-800 max-w-md">
                    We build your space exactly the way you imagine it.We craft your space with the elegance and precision your vision deserves.Transforming your ideas into bespoke spaces, crafted with premium mastery.               </p>
            </div>
        </section>
    );
}
