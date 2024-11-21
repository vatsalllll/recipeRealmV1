import axios from 'axios';

const API_KEY = '27adda5772dd432aaea834a249cdd39b';
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.apiKey = API_KEY;
  return config;
});

export const searchRecipes = async (query) => {
  const response = await fetch(
    `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true`
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
