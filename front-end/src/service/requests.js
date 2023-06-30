// const axios = require('axios');
import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://delivery-app-api-ocnj.onrender.com/',
  // headers: {'Access-Control-Allow-Origin': 'https://drinkdelivery.vercel.app'},
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  config.headers.Authorization = user ? user.token : '';
  return config;
});

export const getProducts = async (body) => {
  try {
    const result = await api.get('/products', body);
    return result.data;
  } catch (err) {
    return [];
  }
};

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

export const updateStatusSale = async (status, id) => {
  try {
    const { data } = await api.put(`/sales/${id}`, { status });
    return data;
  } catch (err) {
    return null;
  }
};

export const getAllSellers = async () => {
  try {
    const { data } = await api.get('/users/sellers');
    return data;
  } catch (err) {
    return null;
  }
};

export const registerSale = async (orderDetail) => {
  try {
    const { data } = await api.post('/sales', orderDetail);
    return data;
  } catch (err) {
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await api.get('/users');
    return data;
  } catch (err) {
    return null;
  }
};

export const deleteUser = async (email) => {
  try {
    const { data } = await api.delete('/users', { data: { email } });
    return data;
  } catch (err) {
    return null;
  }
};
