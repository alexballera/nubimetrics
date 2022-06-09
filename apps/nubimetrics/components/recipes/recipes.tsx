import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

/* eslint-disable-next-line */
export interface RecipesProps {}

const styles = {
  theadCell: {
    color: '#79797A',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: ' sx={styles.tableCell}',
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

const recipes = [
  {
    name: 'Melodía de bayas mixtas',
    reviews: 3,
    cooked: true,
  },
  {
    name: 'Sopa tailandesa de coliflor al curry rojo',
    reviews: 3,
    cooked: false,
  },
  {
    name: 'Berenjena especiada crujiente',
    reviews: 2,
    cooked: true,
  },
  {
    name: 'Sopa de calabaza con un toque',
    reviews: 4,
    cooked: false,
  },
  {
    name: 'Ensalada de tofu carbonizado, maíz y espárragos',
    reviews: 1,
    cooked: true,
  },
  {
    name: 'Pollo al pesto cremoso en una sartén y ñoquis',
    reviews: 5,
    cooked: false,
  },
  {
    name: 'Pastel de pollo cremoso',
    reviews: 1,
    cooked: true,
  },
  {
    name: 'Pollo y papas a la francesa',
    reviews: 3,
    cooked: false,
  },
  {
    name: 'Estofado de ternera y verduras',
    reviews: 2,
    cooked: true,
  },
  {
    name: 'Lasaña de calabaza, espinacas y lentejas',
    reviews: 4,
    cooked: false,
  },
  {
    name: 'Soothing chicken soup',
    reviews: 5,
    cooked: true,
  },
  {
    name: 'Sopa de pollo calmante',
    reviews: 2,
    cooked: false,
  },
  {
    name: 'Enchiladas rapidas de carne',
    reviews: 2,
    cooked: true,
  },
  {
    name: 'Pollo al disco con champignones',
    reviews: 1,
    cooked: false,
  },
  {
    name: 'Horneado de brócoli con queso',
    reviews: 3,
    cooked: true,
  },
  {
    name: 'Ragú de pierna de cordero con pappardelle',
    reviews: 5,
    cooked: false,
  },
];

export function Recipes(props: RecipesProps) {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        size="small"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell sx={styles.theadCell}>Nombre de la receta</TableCell>
            <TableCell sx={styles.theadCell}>Reseñas</TableCell>
            <TableCell sx={styles.theadCell}>Cocinado antes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipes.map((recipe) => (
            <TableRow
              key={recipe.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={recipe.cooked ? styles.tbodyCell : styles.tbodyCellInactive}
              >
                {recipe.name}
              </TableCell>
              <TableCell
                sx={recipe.cooked ? styles.tbodyCell : styles.tbodyCellInactive}
              >
                {recipe.reviews}
              </TableCell>
              <TableCell
                sx={recipe.cooked ? styles.tbodyCell : styles.tbodyCellInactive}
              >
                {recipe.cooked ? 'True' : 'False'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Recipes;
