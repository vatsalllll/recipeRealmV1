import axios from 'axios';

const API_KEY = 'e43e3b4918b747babe51298f48dd377c';
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.apiKey = API_KEY;
  return config;
});

export const searchRecipes = async (query = '', page = 1, limit = 9, filters = {}) => {
  const offset = (page - 1) * limit;
  const params = new URLSearchParams({
    apiKey: API_KEY,
    offset: offset.toString(),
    number: limit.toString(),
    addRecipeInformation: 'true',
    ...filters
  });

  if (query) {
    params.append('query', query);
  }

  if (filters.cuisine && !query) {
    params.append('cuisine', filters.cuisine);
  }

  const response = await fetch(
    `${BASE_URL}/complexSearch?${params.toString()}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  return response.json();
};

export const fetchRecipeDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch recipe details');
  }
  return response.json();
};

export default api;
