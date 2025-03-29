import api from './api';

export const userService = {
  updateProfile: async (userData) => {
    try {
      const response = await api.put('/users/profile', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  changePassword: async (passwordData) => {
    try {
      const response = await api.put('/users/password', passwordData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getDepositAddress: async (currency) => {
    try {
      const response = await api.get(`/wallet/deposit/${currency}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};
