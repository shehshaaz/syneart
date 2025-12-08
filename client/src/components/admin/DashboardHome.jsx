import React from 'react';

export default function DashboardHome() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-primary">Dashboard Overview</h1>
                <p className="text-secondary mt-1">Welcome back, here's what's happening today.</p>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-secondary">Total Sales</p>
                            <h3 className="text-2xl font-bold text-primary mt-1">$24,500</h3>
                        </div>
                        <span className="p-2 bg-green-100 text-green-600 rounded-lg text-xs font-bold">+12%</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-secondary">Active Users</p>
                            <h3 className="text-2xl font-bold text-primary mt-1">1,240</h3>
                        </div>
                        <span className="p-2 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold">+5%</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-secondary">Total Products</p>
                            <h3 className="text-2xl font-bold text-primary mt-1">48</h3>
                        </div>
                        <span className="p-2 bg-purple-100 text-purple-600 rounded-lg text-xs font-bold">New</span>
                    </div>
                </div>
            </div>

            {/* Recent Activity / Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[300px]">
                    <h3 className="text-lg font-bold text-primary mb-4">Sales Analytics</h3>
                    <div className="flex items-end gap-2 h-48 mt-8 px-4">
                        {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                            <div key={i} className="flex-1 bg-accent/20 hover:bg-accent/40 rounded-t-sm transition-all relative group" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}%
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-secondary px-4">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-primary mb-4">Recent Orders</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">Order #234{i}</p>
                                        <p className="text-xs text-secondary">2 mins ago</p>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-primary">$120.00</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
