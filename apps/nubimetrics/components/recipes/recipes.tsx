// Base
import { ChangeEvent, useEffect, useState } from 'react';
// Base End

// MUI
import {
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Rating,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
// MUI end

// Services
import { getRecipes } from 'services/recipe.service';
// Services end

// Styles
import { recipesStyles } from './recipes.module';
import IOSSwitch from 'components/ios-switch/ios-switch';
// Styles end

const StiledRating = styled(Rating)(
  () => `
  & .MuiRating-icon {
    color: #FFD19A;
  }
  & .MuiRating-iconEmpty {
    color: #E9DBCB;
  }
  `
);

export interface RecipesProps {
  name: string;
  reviews: number;
  cooked: boolean;
}

export function Recipes() {
  const [recipes, setRecipes] = useState<RecipesProps[]>();
  const [loading, setLoading] = useState<boolean>();
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(!event.target.checked);
    console.log(checked);
  };

  useEffect(() => {
    setLoading(true);
    getRecipes()
      .then((res) => {
        const recipes = res.data.recipes;
        setRecipes(recipes);
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
                  <StiledRating
                    name="read-only"
                    value={recipe.reviews}
                    readOnly
                    emptyIcon={<StarIcon fontSize="inherit" />}
                  />
                </TableCell>
                <TableCell
                  sx={
                    recipe.cooked
                      ? recipesStyles.tbodyCell
                      : recipesStyles.tbodyCellInactive
                  }
                >
                  <FormGroup>
                    <IOSSwitch
                      sx={{ m: 1 }}
                      checked={recipe.cooked}
                      name={recipe.name}
                      onChange={handleChange}
                    />
                  </FormGroup>
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
