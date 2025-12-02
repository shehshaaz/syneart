import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await api.post('/auth/register', { name, email, password });
            console.log('Signup Success:', res.data);
            navigate('/login');
        } catch (err) {
            console.error('Signup Error:', err);
            setError(err.response?.data || 'Something went wrong');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-bg">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Create Account</h2>
                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md">
                        Sign Up
                    </button>
                </form>
                <p className="mt-6 text-center text-secondary">
                    Already have an account? <Link to="/login" className="text-accent font-semibold hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
}
