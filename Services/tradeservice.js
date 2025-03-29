import api from './api';

export const tradeService = {
  getMarketData: async (pair = 'BTC-USDT') => {
    try {
      const response = await api.get(`/market/${pair}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  placeOrder: async (orderData) => {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getOrderHistory: async (params = {}) => {
    try {
      const response = await api.get('/orders/history', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};
