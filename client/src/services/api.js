import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/destinations';

const api = {
  // Get all destinations
  getAllDestinations: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Get destination by ID
  getDestinationById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  // Get destinations by category
  getDestinationsByCategory: async (category) => {
    const response = await axios.get(`${API_URL}/category/${category}`);
    return response.data;
  },

  // Create new destination
  createDestination: async (destination) => {
    const response = await axios.post(API_URL, destination);
    return response.data;
  },

  // Update destination
  updateDestination: async (id, destination) => {
    const response = await axios.put(`${API_URL}/${id}`, destination);
    return response.data;
  },

  // Delete destination
  deleteDestination: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }
};

export default api;
