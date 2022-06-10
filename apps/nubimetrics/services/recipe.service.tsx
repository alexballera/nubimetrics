import axios from 'axios';

export const getRecipes = async () => {
  return await axios.get('/mock/recipes.json');
};
