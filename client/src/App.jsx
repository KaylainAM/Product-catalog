import { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from './api';

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ title: '', category: '', price: '' });
  const [editingId, setEditingId] = useState(null);

  // Fetch products on load
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateProduct(editingId, formData);
    } else {
      await addProduct(formData);
    }
    setFormData({ title: '', category: '', price: '' });
    setEditingId(null);
    loadProducts(); // Refresh list
  };

  const handleEdit = (p) => {
    setEditingId(p.id);
    setFormData({ title: p.title, category: p.category, price: p.price });
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4 mb-8">
          <input className="border p-2 rounded" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
          <input className="border p-2 rounded" placeholder="Category" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required />
          <input className="border p-2 rounded" type="number" placeholder="Price" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
          <button className="bg-blue-600 text-white rounded font-bold hover:bg-blue-700">
            {editingId ? 'Update' : 'Add Product'}
          </button>
        </form>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-3">ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.title}</td>
                <td className="p-3 capitalize">{p.category}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3">
                  <button onClick={() => handleEdit(p)} className="text-blue-500 mr-4">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;