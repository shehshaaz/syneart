import React from 'react';

export default function FeatureSection() {
    return (
        <section className="py-12 md:py-24 bg-bg">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div className="space-y-12" data-aos="slide-up" data-aos-easing="ease-out-quart" data-aos-offset="50" data-aos-duration="2000">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-primary font-medium">
                                Discover a smarter, more personal way to find the sofa that fits your style, space, and the way you live.
                            </p>
                            <p className="text-lg leading-relaxed text-secondary">
                                With flexible designs and a range of fabrics, colors, and layouts, our collection lets you shape a sofa that fits your space. Explore the guide to find the style, comfort, and material that suit you best.
                            </p>
                            <a href="#" className="inline-block text-secondary underline decoration-1 underline-offset-4 hover:text-primary transition-colors">
                                Learn More
                            </a>
                        </div>

                        {/* Thumbnail Image Area */}
                        <div className="relative w-full max-w-md pt-10">
                            <div className="bg-white/40 p-8 rounded-sm">
                                <img
                                    src="/images/feature2.jpg"
                                    alt="Chair Thumbnail"
                                    className="w-full h-auto object-contain mix-blend-multiply"
                                />
                            </div>
                            {/* Line drawing placeholder - using a simple border representation or SVG if available */}
                            <div className="flex gap-8 mt-8">
                                <img
                                    src="/images/demo1.jpg"
                                    alt="Detail 1"
                                    className="w-24 h-16 object-cover rounded-sm border border-secondary/20 hover:opacity-100 transition-opacity opacity-80"
                                />
                                <img
                                    src="/images/demo2.jpg"
                                    alt="Detail 2"
                                    className="w-24 h-16 object-cover rounded-sm border border-secondary/20 hover:opacity-100 transition-opacity opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Large Image */}
                    <div className="relative h-[300px] md:h-[500px] bg-white/40" data-aos="fade-up">
                        <img
                            src="/images/chair.jpg"
                            alt="Feature Chair Detail"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

