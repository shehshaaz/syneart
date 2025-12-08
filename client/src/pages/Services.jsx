import React from 'react';

export default function Services() {
    return (
        <div className="w-full bg-bg pt-20 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h1 className="text-4xl md:text-8xl font-sans font-light text-primary tracking-wide uppercase mb-6">
                        OUR SERVICES
                    </h1>
                    <div className="w-24 h-[1px] bg-primary mx-auto mb-6"></div>
                    <p className="text-primary/70 text-lg max-w-2xl mx-auto font-light">
                        Customize services for all of your Room needs
                    </p>
                </div>

                {/* Service Item 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 h-[400px] md:h-[500px] overflow-hidden" data-aos="fade-right">
                        <img
                            src="/images/hero.jpg"
                            alt="Interior Painting"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 md:pl-10" data-aos="fade-left">
                        <div className="w-12 h-[2px] bg-primary mb-6"></div>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                            Luxury Sofa
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6 font-light">
                            This Text Box widget is placed within a Flexbox Container. If you want to learn more about how containers can help you with your website, watch this video.
                        </p>
                        <p className="text-primary/80 leading-relaxed font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatem soluta. Aspernatur eveniet quo facere repellendus, nihil nostrum debitis similique doloremque perferendis totam maiores sunt perspiciatis culpa eum consequatur facilis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
