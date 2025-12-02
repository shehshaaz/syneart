import React, { useState, useEffect } from 'react';
import api from '../api';

export default function Admin() {
  const [product, setProduct] = useState({ name: '', price: '', description: '', image: '', category: '' });
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Fetch Products Error:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      if (editingId) {
        // Update existing product
        const res = await api.put(`/products/${editingId}`, product);
        console.log('Product Updated:', res.data);
        setMessage('Product updated successfully!');
        setEditingId(null);
      } else {
        // Create new product
        const res = await api.post('/products', product);
        console.log('Product Added:', res.data);
        setMessage('Product added successfully!');
      }
      setProduct({ name: '', price: '', description: '', image: '', category: '' });
      fetchProducts(); // Refresh the product list
    } catch (err) {
      console.error('Submit Error:', err);
      setMessage('Failed to save product.');
    }
  };

  const handleEdit = (prod) => {
    setProduct({
      name: prod.name,
      price: prod.price,
      description: prod.description,
      image: prod.image,
      category: prod.category || ''
    });
    setEditingId(prod._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/products/${id}`);
        setMessage('Product deleted successfully!');
        fetchProducts(); // Refresh the product list
      } catch (err) {
        console.error('Delete Error:', err);
        setMessage('Failed to delete product.');
      }
    }
  };

  const handleCancel = () => {
    setProduct({ name: '', price: '', description: '', image: '', category: '' });
    setEditingId(null);
    setMessage(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-primary">Admin Dashboard</h1>

      {/* Add/Edit Product Form */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-10">
        <h2 className="text-xl font-bold mb-6 text-secondary">
          {editingId ? 'Edit Product' : 'Add New Product'}
        </h2>
        {message && <div className={`p-3 rounded mb-4 text-center ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} `}>
          {message}
        </div>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-secondary mb-2">Product Name</label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Price ($)</label>
            <input
              type="number"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Image URL</label>
            <input
              type="text"
              value={product.image}
              onChange={(e) => setProduct({ ...product, image: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Category</label>
            <input
              type="text"
              value={product.category}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-secondary mb-2">Description</label>
            <textarea
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all min-h-[100px]"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-end gap-3">
            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all shadow-md"
              >
                Cancel
              </button>
            )}
            <button type="submit" className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-md">
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>

      {/* Product List */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold mb-6 text-secondary">All Products</h2>
        {products.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-secondary font-semibold">Image</th>
                  <th className="text-left py-3 px-4 text-secondary font-semibold">Name</th>
                  <th className="text-left py-3 px-4 text-secondary font-semibold">Category</th>
                  <th className="text-left py-3 px-4 text-secondary font-semibold">Price</th>
                  <th className="text-left py-3 px-4 text-secondary font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => (
                  <tr key={prod._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover rounded" />
                    </td>
                    <td className="py-3 px-4 font-medium text-primary">{prod.name}</td>
                    <td className="py-3 px-4 text-secondary">{prod.category || 'N/A'}</td>
                    <td className="py-3 px-4 font-semibold text-accent">${prod.price}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(prod)}
                          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(prod._id)}
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-secondary text-center py-8">No products found. Add your first product above!</p>
        )}
      </div>
    </div>
  );
}
