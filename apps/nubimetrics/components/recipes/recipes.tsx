// Base
import { ChangeEvent, useContext, useState } from 'react';
// Base End

// MUI
import {
  CircularProgress,
  FormGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
// MUI end

// Own components
import { CustomModal as Modal } from 'components/common/custom-modal/custom-modal';
import CustomRatings from 'components/common/custom-ratings/custom-ratings';
// Own components end

// Context
import { RecipesContext } from 'context/RecipesContext';
// Context end

// Styles
import { recipesStyles } from './recipes.module';
import IOSSwitch from 'components/common/ios-switch/ios-switch';
import DetailRecipe from 'components/detail-recipe/detail-recipe';
// Styles end

export interface RecipesProps {
  name: string;
  reviews: number;
  cooked: boolean;
  ingredients: string[];
  preparation: string[];
}

export function Recipes() {
  const [recipe, setRecipe] = useState<RecipesProps>();
  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

  // Ejemplo de context
  const { loading, recipes } = useContext(RecipesContext);

  const handleOpen = (recipe: RecipesProps) => {
    setRecipe(recipe);
    setOpen(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(!event.target.checked);
    console.log(checked);
  };

  return (
    <>
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
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpen(recipe)}
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
                    <CustomRatings
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
      {recipe && (
        <Modal
          title={recipe.name}
          open={open}
          setOpen={setOpen}
          content={<DetailRecipe recipe={recipe} />}
        />
      )}
    </>
  );
}

export default Recipes;
