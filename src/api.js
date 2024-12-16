import axios from 'axios';

const API_URL = 'http://localhost:8001';  // Update this with your API's URL

// Get a country by code
export const fetchCountry = async (code) => {
  try {
    const response = await axios.get(`${API_URL}/country?code=${code}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching country');
  }
};

// Create a new country
export const createCountry = async (newCountry) => {
  try {
    const response = await axios.post(`${API_URL}/country`, newCountry);
    return response.data;
  } catch (error) {
    throw new Error('Error creating country');
  }
};

// Delete a country by code
export const deleteCountry = async (code) => {
  try {
    const response = await axios.delete(`${API_URL}/country?code=${code}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting country');
  }
};
