const handleSubmit = async (productData) => {
  try {
    console.log('handleSubmit called with:', productData); // DEBUG
    
    if (editingProduct) {
      // UPDATE
      console.log('Updating product:', editingProduct.id);
      await productAPI.updateProduct(editingProduct.id, productData);
      console.log('Update successful');
    } else {
      // CREATE
      console.log('Creating new product');
      await productAPI.createProduct(productData);
      console.log('Create successful');
    }
    
    await fetchProducts(); // Refresh the list
    setShowForm(false);
    setEditingProduct(null);
  } catch (err) {
    console.error('Error saving product:', err);
    alert('Failed to save product: ' + err.message);
  }
};
export default App;