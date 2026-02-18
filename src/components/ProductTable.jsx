import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-products">No products found</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td className="image-cell">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="product-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/60x60?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                </td>
                <td>{product.id}</td>
                <td className="title-cell">{product.title}</td>
                <td>
                  <span className="category-badge">{product.category}</span>
                </td>
                <td className="price-cell">${product.price.toFixed(2)}</td>
                <td className="actions-cell">
                  <button 
                    className="btn btn-edit"
                    onClick={() => onEdit(product)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-delete"
                    onClick={() => onDelete(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;