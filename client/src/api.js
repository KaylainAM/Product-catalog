import axios from 'axios';

// Connects to the backend running on port 3000
const API = axios.create({
  baseURL: 'http://localhost:3000/products',
});

export const getProducts = () => API.get('/');
export const addProduct = (product) => API.post('/', product);
export const updateProduct = (id, product) => API.put(`/${id}`, product);
export const deleteProduct = (id) => API.delete(`/${id}`);