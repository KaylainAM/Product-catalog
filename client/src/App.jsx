import { useState, useEffect } from 'react';
import * as api from './api';

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', category: '', price: '' });

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    const res = await api.getProducts();
    setProducts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.addProduct(form);
    setForm({ title: '', category: '', price: '' });
    loadData();
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input className="border p-2 flex-1" placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
          <input className="border p-2 w-32" type="number" placeholder="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </form>
        <table className="w-full text-left">
          <thead><tr className="border-b"><th>ID</th><th>Title</th><th>Price</th></tr></thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-b">
                <td className="py-2">{p.id}</td>
                <td>{p.title}</td>
                <td>${p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;