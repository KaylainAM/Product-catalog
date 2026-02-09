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

  // Fetch products on component mount
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
      setError('Failed to fetch products. Make sure json-server is running.');
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
    <div className="app">
      <header className="app-header">
        <h1>Product Catalog</h1>
        <button className="btn btn-primary" onClick={handleCreate}>
          + Add Product
        </button>
      </header>

      <main className="app-main">
        {loading && <div className="loading">Loading products...</div>}
        
        {error && (
          <div className="error-message">
            {error}
            <button onClick={fetchProducts}>Retry</button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="products-count">
              Total Products: {products.length}
            </div>
            <ProductTable
              products={products}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />
          </>
        )}
      </main>

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