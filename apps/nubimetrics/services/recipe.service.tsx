import axios from 'axios';

export const getRecipes = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_HOST}mock/recipes.json`);
};
