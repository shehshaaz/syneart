import React, { useState, useEffect } from 'react';
import api from '../../api';

export default function UserManagement() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Mock data for now as we don't have a user list endpoint yet
        // In a real app, this would be: api.get('/users').then(res => setUsers(res.data));
        setUsers([
            { _id: '1', name: 'Admin User', email: 'admin@syne.art', isAdmin: true, createdAt: '2023-01-01' },
            { _id: '2', name: 'John Doe', email: 'john@example.com', isAdmin: false, createdAt: '2023-02-15' },
            { _id: '3', name: 'Jane Smith', email: 'jane@example.com', isAdmin: false, createdAt: '2023-03-10' },
        ]);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            // api.delete(`/users/${id}`);
            setUsers(users.filter(u => u._id !== id));
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-primary">User Management</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 font-semibold text-secondary">Name</th>
                            <th className="p-4 font-semibold text-secondary">Email</th>
                            <th className="p-4 font-semibold text-secondary">Role</th>
                            <th className="p-4 font-semibold text-secondary">Joined</th>
                            <th className="p-4 font-semibold text-secondary">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.map(user => (
                            <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-primary">{user.name}</td>
                                <td className="p-4 text-secondary">{user.email}</td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.isAdmin ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                                        {user.isAdmin ? 'Admin' : 'User'}
                                    </span>
                                </td>
                                <td className="p-4 text-secondary">{new Date(user.createdAt).toLocaleDateString()}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="text-red-500 hover:text-red-700 font-medium text-sm"
                                        disabled={user.isAdmin} // Prevent deleting admin for safety
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
