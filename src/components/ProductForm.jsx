import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ title: '', price: '', category: '' });

  useEffect(() => {
    if (product) setFormData(product);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-3xl shadow-2xl p-8 transform animate-slide-up">
        <h2 className="text-2xl font-black mb-6 italic text-white">
          {product ? 'EDIT PRODUCT' : 'NEW PRODUCT'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Item Name</label>
            <input 
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600" 
              placeholder="e.g. Wireless Mouse"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Category</label>
              <input 
                required
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none" 
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Price ($)</label>
              <input 
                required
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none" 
              />
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-black tracking-widest shadow-lg shadow-indigo-500/20 transition-all">
              {product ? 'UPDATE' : 'CREATE'}
            </button>
            <button type="button" onClick={onCancel} className="flex-1 bg-gray-800 hover:bg-gray-700 py-4 rounded-xl font-bold text-gray-400 border border-gray-700 transition-all">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;