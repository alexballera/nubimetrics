import { useEffect, useState } from 'react';
import { getRecipes } from 'services/recipe.service';
import { RecipesContext } from './RecipesContext';

export interface RecipesProps {
  name: string;
  reviews: number;
  cooked: boolean;
  ingredients: string[];
  preparation: string[];
}

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState<RecipesProps[]>();
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    getAllRecipes();
  }, []);

  function getAllRecipes() {
    setLoading(true);
    getRecipes()
      .then((res) => {
        const { data } = res;
        setRecipes(data.recipes);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }
  return (
    <RecipesContext.Provider value={{ loading, recipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
