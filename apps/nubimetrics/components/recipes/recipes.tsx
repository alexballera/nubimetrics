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
import { useEffect, useState } from 'react';
import { getRecipes } from 'services/recipe.service';

/* eslint-disable-next-line */
export interface RecipesProps {
  name: string;
  reviews: number;
  cooked: boolean;
}

const styles = {
  theadCell: {
    color: '#79797A',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '16px',
  },
  tbodyCell: {
    color: '#19191A',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '24px',
  },
  tbodyCellInactive: {
    color: '#79797A',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '24px',
  },
};

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
            <TableCell sx={styles.theadCell}>Nombre de la receta</TableCell>
            <TableCell sx={styles.theadCell}>Reseñas</TableCell>
            <TableCell sx={styles.theadCell}>Cocinado antes</TableCell>
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
                    recipe.cooked ? styles.tbodyCell : styles.tbodyCellInactive
                  }
                >
                  {recipe.name}
                </TableCell>
                <TableCell
                  sx={
                    recipe.cooked ? styles.tbodyCell : styles.tbodyCellInactive
                  }
                >
                  {recipe.reviews}
                </TableCell>
                <TableCell
                  sx={
                    recipe.cooked ? styles.tbodyCell : styles.tbodyCellInactive
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
