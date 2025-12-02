import React from 'react';

export default function Wishlist() {
    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8 text-primary">Your Wishlist</h1>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center py-20">
                <p className="text-secondary text-lg">Your wishlist is currently empty.</p>
                <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md">
                    Browse Products
                </button>
            </div>
        </div>
    );
}
