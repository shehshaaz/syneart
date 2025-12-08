import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ adminOnly = false }) {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && !user.isAdmin) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}
