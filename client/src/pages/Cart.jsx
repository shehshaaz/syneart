import React from 'react';

export default function Cart() {
    return (
        <div className="max-w-4xl mx-auto py-10 px-6" data-aos="fade-up">
            <h1 className="text-3xl font-bold mb-8 text-primary">Your Cart</h1>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center py-20">
                <p className="text-secondary text-lg">Your cart is currently empty.</p>
                <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}
