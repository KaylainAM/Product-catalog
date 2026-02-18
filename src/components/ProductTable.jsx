import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="products-grid">
      {products.length === 0 ? (
        <div className="no-products-message">
          <p>No products found</p>
          <p className="subtitle">Click "Add Product" to get started</p>
        </div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="product-card-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
                  }}
                />
              ) : (
                <div className="product-no-image">
                  <span>No Image</span>
                </div>
              )}
              <span className="product-category-badge">{product.category}</span>
            </div>
            
            <div className="product-card-content">
              <h3 className="product-title">{product.title}</h3>
              
              <div className="product-details">
                {product.rating && (
                  <div className="product-rating">
                    <span className="stars">⭐ {product.rating.rate.toFixed(1)}</span>
                    <span className="review-count">({product.rating.count} reviews)</span>
                  </div>
                )}
                
                {product.description && (
                  <p className="product-description">
                    {product.description.length > 80 
                      ? `${product.description.substring(0, 80)}...` 
                      : product.description}
                  </p>
                )}
              </div>
              
              <div className="product-footer">
                <div className="product-price-section">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <span className="product-id">ID: {product.id}</span>
                </div>
                
                <div className="product-actions">
                  <button 
                    className="btn btn-edit"
                    onClick={() => onEdit(product)}
                    title="Edit Product"
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    className="btn btn-delete"
                    onClick={() => onDelete(product)}
                    title="Delete Product"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductTable;