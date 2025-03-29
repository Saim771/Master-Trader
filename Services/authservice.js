import api from './api';

export const authService = {
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      return response.data.user;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('token');
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};
