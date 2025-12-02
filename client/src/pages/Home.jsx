import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProductList from '../components/ProductList';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <ProductList />
            <Contact />
        </>
    );
}
