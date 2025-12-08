import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Products from './pages/Products';
import AdminLayout from './components/admin/AdminLayout';
import DashboardHome from './components/admin/DashboardHome';
import UserManagement from './components/admin/UserManagement';
import ProtectedRoute from './components/ProtectedRoute';
import Services from './pages/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror:true,

            easing: 'ease-out-cubic',
        });
    }, []);
    return (
        <Router>
            <div className="min-h-screen bg-bg text-primary font-sans selection:bg-accent selection:text-white flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/wishlist" element={<Wishlist />} />

                        {/* Admin Routes */}
                        <Route element={<ProtectedRoute adminOnly={true} />}>
                            <Route path="/admin" element={<AdminLayout />}>
                                <Route index element={<DashboardHome />} />
                                <Route path="products" element={<Admin />} />
                                <Route path="users" element={<UserManagement />} />
                                <Route path="settings" element={<div className="p-4">Settings Page (Coming Soon)</div>} />
                            </Route>
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
