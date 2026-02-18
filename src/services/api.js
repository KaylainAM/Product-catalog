import axios from 'axios';

const API = axios.create({
  baseURL: 'https://product-catalog-yutc.onrender.com' 
});
export const productAPI = {
  // Get all products
  getAllProducts: async () => {
    const response = await API.get('/products');
    return response.data;
  },

  // Get single product
  getProduct: async (id) => {
    const response = await API.get(`/products/${id}`);
    return response.data;
  },

  // Create new product
  createProduct: async (product) => {
    const response = await API.post('/products', product);
    return response.data;
  },

  // Update product
  updateProduct: async (id, product) => {
    const response = await API.put(`/products/${id}`, product);
    return response.data;
  },


  // Delete product
  deleteProduct: async (id) => {
    await API.delete(`/products/${id}`);
  }
};