import { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from './api';

function App() {
  // State Management
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', category: '', price: '' });
  const [editingId, setEditingId] = useState(null);

  // 1. Fetch Data on Load
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data. Is the server running?", error);
    }
  };

  // 2. Handle Form Submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.price) return;

    try {
      if (editingId) {
        await updateProduct(editingId, form);
      } else {
        await addProduct(form);
      }
      resetForm();
      loadProducts(); // Refresh the list
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // 3. Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  // 4. Handle Edit Click
  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({ 
      title: product.title, 
      category: product.category, 
      price: product.price 
    });
  };

  const resetForm = () => {
    setForm({ title: '', category: '', price: '' });
    setEditingId(null);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Catalog</h1>

        {/* Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? 'Edit Product' : 'Add New Product'}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Product Title"
              className="border p-2 rounded w-full"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Category"
              className="border p-2 rounded w-full"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Price"
              className="border p-2 rounded w-full"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
            />
            <div className="flex gap-2">
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full font-bold"
              >
                {editingId ? 'Update' : 'Add'}
              </button>
              {editingId && (
                <button 
                  type="button" 
                  onClick={resetForm}
                  className="bg-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
              <tr>
                <th className="p-4 border-b">ID</th>
                <th className="p-4 border-b">Title</th>
                <th className="p-4 border-b">Category</th>
                <th className="p-4 border-b">Price</th>
                <th className="p-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 border-b last:border-none">
                    <td className="p-4 text-gray-500">{p.id}</td>
                    <td className="p-4 font-medium">{p.title}</td>
                    <td className="p-4 text-gray-600">{p.category}</td>
                    <td className="p-4 font-bold text-gray-800">${p.price}</td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleEdit(p)} 
                        className="text-blue-500 hover:text-blue-700 font-medium mr-4"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(p.id)} 
                        className="text-red-500 hover:text-red-700 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-400">
                    No products found. Start by adding one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;