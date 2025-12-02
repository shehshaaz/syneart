import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await api.post('/auth/login', { email, password });
      console.log('Login Success:', res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      console.error('Login Error:', err);
      setError(err.response?.data || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-bg">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Welcome Back</h2>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
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
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-secondary">
          Don't have an account? <Link to="/signup" className="text-accent font-semibold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
