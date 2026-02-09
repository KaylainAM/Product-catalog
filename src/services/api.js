import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/products';

export const productAPI = {
  // Get all products
  getAllProducts: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Get single product
  getProduct: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  // Create new product
  createProduct: async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
  },

  // Update product
  updateProduct: async (id, product) => {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
  },

  // Delete product
  deleteProduct: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
};