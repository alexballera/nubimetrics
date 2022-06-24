import { useFetch } from 'hooks/useFetch';
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

  // Custom hook useFetch
  const { data, isLoading, hasError } = useFetch(
    `${process.env.NEXT_PUBLIC_HOST}mock/recipes.json`
  );

  function getAllRecipes() {
    // Custom hook useFetch
    console.log(data, isLoading, hasError);
    setLoading(true);
    getRecipes()
      .then((res) => {
        const { data } = res;
        setRecipes(data.recipes);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={{ loading, recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
