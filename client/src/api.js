import axios from 'axios';

const API = axios.create({
  // If we are on the live site, use the Render URL. Otherwise, use localhost.
  baseURL: window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/products' 
    : 'https://product-catalog-yutc.onrender.com/products',
});

export const getProducts = () => API.get('/');
export const addProduct = (product) => API.post('/', product);
export const updateProduct = (id, product) => API.put(`/${id}`, product);
export const deleteProduct = (id) => API.delete(`/${id}`);