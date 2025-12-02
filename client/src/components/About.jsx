import React from 'react';

export default function About() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-16 bg-[#f5f5f5] items-center rounded-lg mt-10">
            <div className="w-full">
                <img
                    src="/images/image.png"
                    alt="About Syne Art"
                    className="w-full h-[420px] object-cover rounded shadow-md"
                />
            </div>

            <div className="pr-10">
                <h2 className="text-5xl font-serif font-normal tracking-wider mb-5 text-primary">
                    GET TO KNOW<br />SYNE
                </h2>

                <p className="text-base leading-relaxed text-gray-800 max-w-md">
                    We are an interior design studio based in New York City.
                    We are in love with the concept of Zen minimalism and we
                    try to bring this approach to both our life and our work.
                </p>
            </div>
        </section>
    );
}
