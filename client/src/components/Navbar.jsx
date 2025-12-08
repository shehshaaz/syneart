import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        closeMenu();
        navigate('/');
    };

    return (
        <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-primary/5">
            <div className="container mx-auto px-6 py-6 flex items-center justify-between">
                {/* Left Side: Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter text-primary z-50 relative">
                    SYNE.ART
                </Link>

                {/* Center: Navigation Links (Desktop) */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-primary/80">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link to="/products" className="hover:text-primary transition-colors">Services</Link>
                    <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                    <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                </nav>

                {/* Right Side: CTA (Desktop) */}
                <div className="hidden lg:flex items-center gap-6">
                    <span className="text-xs font-medium tracking-wider text-primary/70">
                        Get A Free Quote +917558814397
                    </span>
                    <button className="bg-primary text-white text-xs font-bold tracking-widest px-6 py-3 hover:bg-secondary transition-colors uppercase">
                        Book Now
                    </button>

                    {/* User/Cart Icons (Optional addition to keep functionality) */}
                    <Link to="/cart" className="text-sm font-medium tracking-widest text-primary hover:text-secondary transition-colors ml-2">
                        CART (0)
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden z-50 relative flex flex-col gap-[5px] w-6 group"
                >
                    <span className={`w-full h-[2px] bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                    <span className={`w-full h-[2px] bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-[2px] bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-bg z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
                    }`}
            >
                <nav className="flex flex-col gap-8 text-center text-3xl font-light tracking-wide text-primary ">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/services", label: "Services" },
                        { to: "/about", label: "About Us" },
                        { to: "/gallery", label: "Gallery" },
                        { to: "/contact", label: "Contact Us" },
                        { to: "/cart", label: "Cart" }
                    ].map((link, index) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={closeMenu}
                            className={`hover:text-secondary transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className={`text-xl text-red-500 hover:text-red-600 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: '600ms' }}
                        >
                            Logout ({user.name})
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className={`text-xl hover:text-secondary transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: '600ms' }}
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}



