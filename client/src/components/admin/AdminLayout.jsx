import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function AdminLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const isActive = (path) => {
        return location.pathname === path ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100';
    };

    return (
        <div className="flex min-h-screen bg-bg">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    <span className="text-xl font-bold text-primary tracking-wide">SYNE.ADMIN</span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link to="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${isActive('/admin')}`}>
                        <span>📊</span> Dashboard
                    </Link>
                    <Link to="/admin/products" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${isActive('/admin/products')}`}>
                        <span>📦</span> Products
                    </Link>
                    <Link to="/admin/users" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${isActive('/admin/users')}`}>
                        <span>👥</span> Users
                    </Link>
                    <Link to="/admin/settings" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${isActive('/admin/settings')}`}>
                        <span>⚙️</span> Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                            {user?.name?.charAt(0) || 'A'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-primary truncate">{user?.name || 'Admin'}</p>
                            <p className="text-xs text-secondary truncate">{user?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <span>🚪</span> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}
