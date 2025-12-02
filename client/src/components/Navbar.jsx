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
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-7 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 font-bold tracking-wide" onClick={closeMenu}>
                    <img
                        src="/images/logo.png"
                        alt="SYNE.ART Logo"
                        className="w-14 h-14 rounded-xl shadow-lg object-cover"
                    />

                    <div>
                        <div className="text-lg text-primary">SYNE.ART</div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-secondary hover:text-primary font-semibold transition-colors">Home</Link>
                    <Link to="/cart" className="text-secondary hover:text-primary font-semibold transition-colors">Cart</Link>
                    <Link to="/wishlist" className="text-secondary hover:text-primary font-semibold transition-colors">Wishlist</Link>
                    <Link to="/admin" className="text-secondary hover:text-primary font-semibold transition-colors">Admin</Link>

                    {user ? (
                        <div className="flex items-center gap-4 ml-4">
                            <span className="text-primary font-semibold">
                                Hello, {user.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="px-5 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all shadow-md"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="ml-4 px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md">
                            Login
                        </Link>
                    )}
                </nav>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-0' : ''
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="container mx-auto px-7 py-4 flex flex-col gap-4 bg-white/95 backdrop-blur-md border-t border-gray-100">
                    {user && (
                        <div className="text-primary font-semibold py-2 border-b border-gray-200">
                            👤 Welcome, {user.name}
                        </div>
                    )}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="text-secondary hover:text-primary font-semibold transition-all hover:translate-x-2 duration-200 py-2"
                    >
                        🏠 Home
                    </Link>
                    <Link
                        to="/cart"
                        onClick={closeMenu}
                        className="text-secondary hover:text-primary font-semibold transition-all hover:translate-x-2 duration-200 py-2"
                    >
                        🛒 Cart
                    </Link>
                    <Link
                        to="/wishlist"
                        onClick={closeMenu}
                        className="text-secondary hover:text-primary font-semibold transition-all hover:translate-x-2 duration-200 py-2"
                    >
                        ❤️ Wishlist
                    </Link>
                    <Link
                        to="/admin"
                        onClick={closeMenu}
                        className="text-secondary hover:text-primary font-semibold transition-all hover:translate-x-2 duration-200 py-2"
                    >
                        ⚙️ Admin
                    </Link>

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="px-5 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all shadow-md text-center"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md text-center"
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
