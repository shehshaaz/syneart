import React, { useEffect, useState } from 'react';
import api from '../api';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get('/products');
                setProducts(res.data);
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section id="rooms" className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h2 className="text-4xl font-serif font-medium mb-4 text-primary">Thoughtful<br />& Functional</h2>
                    <button className="px-6 py-3 bg-[#d4a373] text-white font-semibold rounded hover:bg-[#c59260] transition-colors">
                        VIEW PRODUCTS
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.length > 0 ? products.map((product) => (
                        <div key={product._id} className="group">
                            <div className="bg-[#e5e5e5] h-64 w-full mb-4 overflow-hidden rounded-sm">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="font-bold text-lg text-primary">{product.name}</h3>
                            <p className="text-sm text-secondary mb-1">{product.category || 'Furniture'}</p>
                            <p className="font-semibold text-accent">${product.price}</p>
                        </div>
                    )) : (
                        <p className="col-span-full text-secondary">No products found. Add some from the Admin panel.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
