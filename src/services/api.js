import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/products';

console.log('API URL:', API_URL); // DEBUG

export const productAPI = {
  getAllProducts: async () => {
    console.log('GET all products');
    const response = await axios.get(API_URL);
    console.log('Got products:', response.data);
    return response.data;
  },

  getProduct: async (id) => {
    console.log('GET product:', id);
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  createProduct: async (product) => {
    console.log('POST product:', product);
    const response = await axios.post(API_URL, product);
    console.log('Created:', response.data);
    return response.data;
  },

  updateProduct: async (id, product) => {
    console.log('PUT product:', id, product);
    const response = await axios.put(`${API_URL}/${id}`, product);
    console.log('Updated:', response.data);
    return response.data;
  },

  deleteProduct: async (id) => {
    console.log('DELETE product:', id);
    await axios.delete(`${API_URL}/${id}`);
    console.log('Deleted');
  }
};