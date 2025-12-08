import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import About from '../components/About';
import ProductList from '../components/ProductList';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <div className="container mx-auto px-7 pb-10">
                <FeatureSection />
                <About />
                <ProductList />
                <Contact />
            </div>
        </>
    );
}

