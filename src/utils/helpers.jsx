import axios from 'axios';

const API_KEY = '27adda5772dd432aaea834a249cdd39b';
const BASE_URL = 'https://api.spoonacular.com';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.apiKey = API_KEY;
  return config;
});

export const fetchRecipes = (query, offset = 0) =>
  api.get('/recipes/complexSearch', {
    params: { query, number: 10, offset },
  });

export const fetchRecipeDetails = (id) =>
  api.get(`/recipes/${id}/information`);

export default api;
