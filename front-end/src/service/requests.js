const axios = require('axios');

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token || '';
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

export const getUser = async (token = null) => {
  try {
    let config;
    if (token) {
      config = {
        headers: { Authorization: token },
      };
    }
    const result = await api.get('/users/token', config);
    return result;
  } catch (error) {
    return null;
  }
};
