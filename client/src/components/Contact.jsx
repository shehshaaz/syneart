import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="mt-8 bg-gradient-to-b from-white to-[#fbfdff] p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact & Enquiry</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted (demo)'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your name" required className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                    <input type="email" placeholder="Email address" required className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                    <input type="tel" placeholder="Phone (optional)" className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                    <input type="text" placeholder="Project location / city" className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                    <textarea placeholder="Tell us about your project..." required className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all min-h-[140px] md:col-span-2 resize-y"></textarea>
                </div>
                <div className="mt-6 flex justify-end">
                    <button type="submit" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md">
                        Send enquiry
                    </button>
                </div>
            </form>
        </section>
    );
}
