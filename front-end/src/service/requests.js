const axios = require('axios');

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const loginSubmit = async (body) => {
  const result = await api.post('/users/login', body);
  return result;
};
