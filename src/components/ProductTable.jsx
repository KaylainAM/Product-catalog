import React from 'react';
const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-800/50 text-gray-400 uppercase text-[10px] tracking-[0.15em]">
          <tr>
            <th className="px-8 py-4 font-bold">Ref ID</th>
            <th className="px-8 py-4 font-bold">Product Title</th>
            <th className="px-8 py-4 font-bold">Category</th>
            <th className="px-8 py-4 font-bold">Price</th>
            <th className="px-8 py-4 font-bold text-center">Manage</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800/50">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-blue-500/5 transition-colors">
              <td className="px-8 py-5 text-gray-500 font-mono text-xs">#{product.id}</td>
              <td className="px-8 py-5 font-semibold text-gray-200">{product.title}</td>
              <td className="px-8 py-5">
                <span className="bg-gray-800 text-indigo-300 px-3 py-1 rounded-full text-[10px] font-bold border border-indigo-500/20">
                  {product.category}
                </span>
              </td>
              <td className="px-8 py-5 text-emerald-400 font-bold">${product.price}</td>
              <td className="px-8 py-5 text-center">
                <div className="flex justify-center gap-6">
                  <button onClick={() => onEdit(product)} className="text-yellow-500 hover:text-yellow-400 font-bold text-sm transition-transform active:scale-90">Edit</button>
                  <button onClick={() => onDelete(product)} className="text-red-500 hover:text-red-400 font-bold text-sm transition-transform active:scale-90">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;