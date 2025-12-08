import React from 'react';
import ProductList from '../components/ProductList';

export default function Products() {
    return (
        <div className="pt-10 pb-20">
            <div className="container mx-auto px-7">
                <h1 className="text-4xl font-serif font-bold text-primary mb-8 text-center" data-aos="fade-down">Our Collection</h1>
                <p className="text-center text-secondary mb-12 max-w-2xl mx-auto" data-aos="fade-up">
                    Explore our curated selection of premium furniture and interior pieces designed to elevate your living space.
                </p>
                <ProductList showHeader={false} />
            </div>
        </div>
    );
}
