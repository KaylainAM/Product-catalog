import React, { useState, useEffect } from 'react';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import DeleteConfirmation from './components/DeleteConfirmation';
import { productAPI } from './services/api';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productAPI.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products. Please check your connection.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleSubmit = async (productData) => {
    try {
      if (editingProduct) {
        await productAPI.updateProduct(editingProduct.id, productData);
      } else {
        await productAPI.createProduct(productData);
      }
      await fetchProducts();
      setShowForm(false);
      setEditingProduct(null);
    } catch (err) {
      alert('Failed to save product');
      console.error(err);
    }
  };

  const handleDeleteClick = (product) => {
    setDeletingProduct(product);
  };

  const handleDeleteConfirm = async () => {
    try {
      await productAPI.deleteProduct(deletingProduct.id);
      await fetchProducts();
      setDeletingProduct(null);
    } catch (err) {
      alert('Failed to delete product');
      console.error(err);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
    setDeletingProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-md sticky top-0 z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Product Catalog
              </h1>
              <p className="text-sm text-gray-400 mt-1">ALU BSE Inventory System</p>
            </div>
            <button 
              onClick={handleCreate}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span className="text-xl">+</span> Add Product
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-400">Syncing with backend...</p>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-2xl text-center">
            <p className="text-red-400 font-medium mb-4">{error}</p>
            <button onClick={fetchProducts} className="px-4 py-2 bg-red-600 rounded-lg text-sm font-bold">Retry Connection</button>
          </div>
        )}

        {/* Display */}
        {!loading && !error && (
          <div className="space-y-8">
            {/* Stats Card */}
            <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 inline-block min-w-[240px]">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Total Inventory</p>
              <p className="text-5xl font-black text-white mt-2 italic">{products.length}<span className="text-blue-500 text-xl ml-1">items</span></p>
            </div>

            {/* Table Container */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
              <ProductTable
                products={products}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
              />
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}

      {deletingProduct && (
        <DeleteConfirmation
          product={deletingProduct}
          onConfirm={handleDeleteConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default App;