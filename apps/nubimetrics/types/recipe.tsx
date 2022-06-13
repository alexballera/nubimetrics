export type DetailRecipeProps = {
  name: string;
  reviews: number;
  cooked: boolean;
  ingredients: string[];
  preparation: string[];
};

export type RecipeProps = {
  recipe?: DetailRecipeProps;
};
