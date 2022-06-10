// Base
import { useEffect, useState } from 'react';
// Base End

// MUI
import {
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
// MUI end

// Services
import { getRecipes } from 'services/recipe.service';
// Services end

// Styles
import { recipesStyles } from './recipes.module';
// Styles end

export interface RecipesProps {
  name: string;
  reviews: number;
  cooked: boolean;
}

export function Recipes() {
  const [recipes, setRecipes] = useState<RecipesProps[]>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    getRecipes()
      .then((res) => {
        setRecipes(res.data.recipes);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <TableContainer>
      <Table aria-label="simple table" size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={recipesStyles.theadCell}>
              Nombre de la receta
            </TableCell>
            <TableCell sx={recipesStyles.theadCell}>Reseñas</TableCell>
            <TableCell sx={recipesStyles.theadCell}>Cocinado antes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipes &&
            recipes.map((recipe: RecipesProps) => (
              <TableRow
                key={recipe.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  sx={
                    recipe.cooked
                      ? recipesStyles.tbodyCell
                      : recipesStyles.tbodyCellInactive
                  }
                >
                  {recipe.name}
                </TableCell>
                <TableCell
                  sx={
                    recipe.cooked
                      ? recipesStyles.tbodyCell
                      : recipesStyles.tbodyCellInactive
                  }
                >
                  {recipe.reviews}
                </TableCell>
                <TableCell
                  sx={
                    recipe.cooked
                      ? recipesStyles.tbodyCell
                      : recipesStyles.tbodyCellInactive
                  }
                >
                  {recipe.cooked ? 'True' : 'False'}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {loading && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            minHeight: 150,
          }}
        >
          <CircularProgress />
        </Stack>
      )}
    </TableContainer>
  );
}

export default Recipes;
