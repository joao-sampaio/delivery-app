const axios = require('axios');

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  config.headers.Authorization = user ? user.token : '';
  return config;
});

export const loginSubmit = async (body) => {
  try {
    const result = await api.post('/users/login', body);
    return result;
  } catch (err) {
    return null;
  }
};

export const registerSubmit = async (body) => {
  try {
    const result = await api.post('/users/newuser', body);
    return result;
  } catch (err) {
    return null;
  }
};

export const getAllSales = async () => {
  try {
    const { data } = await api.get('/sales');
    return data;
  } catch (err) {
    return [];
  }
};

export const getSaleById = async (id) => {
  try {
    const { data } = await api.get(`/sales/${id}`);
    return data;
  } catch (err) {
    return [];
  }
};
