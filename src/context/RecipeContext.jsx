import { createContext, useReducer } from 'react';

const RecipeContext = createContext();

const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

function recipeReducer(state, action) {
  switch (action.type) {
    case 'FETCH_RECIPES_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_RECIPES_SUCCESS':
      return { ...state, loading: false, recipes: action.payload };
    case 'FETCH_RECIPES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
